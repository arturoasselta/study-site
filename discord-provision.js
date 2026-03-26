/**
 * discord-provision.js
 * Per-user Discord channel provisioning for StudyLab.
 * Creates a private channel + webhook for each user in the 👤 Users category.
 */

const DISCORD_API = 'https://discord.com/api/v10';

function getBotToken() {
  return process.env.DISCORD_BOT_TOKEN || '';
}

function getGuildId() {
  return process.env.DISCORD_GUILD_ID || '1458617441931231496';
}

function getUsersCategoryId() {
  return process.env.DISCORD_USERS_CATEGORY_ID || '1486191342764818442';
}

/**
 * Sanitize a display name into a valid Discord channel slug.
 * e.g. "Arturo Asselta" → "arturo-asselta"
 */
function slugifyName(name) {
  return (name || 'user')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .substring(0, 80);
}

/**
 * Provision a Discord channel + webhook for a new user.
 * Returns { channelId, channelName, webhookUrl } or throws on error.
 */
async function provisionUserChannel(user) {
  const token = getBotToken();
  if (!token) throw new Error('DISCORD_BOT_TOKEN not set');

  const guildId = getGuildId();
  const categoryId = getUsersCategoryId();
  const channelName = slugifyName(user.display_name || user.email.split('@')[0]);
  const headers = {
    'Authorization': `Bot ${token}`,
    'Content-Type': 'application/json'
  };

  // 1. Create the text channel under the Users category
  const chRes = await fetch(`${DISCORD_API}/guilds/${guildId}/channels`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: channelName,
      type: 0, // GUILD_TEXT
      parent_id: categoryId,
      topic: `StudyLab support & activity for ${user.display_name || user.email}`,
      position: 0
    })
  });

  if (!chRes.ok) {
    const err = await chRes.text();
    throw new Error(`Failed to create Discord channel: ${err}`);
  }
  const channel = await chRes.json();
  const channelId = channel.id;

  console.log(`[discord-provision] Provisioned channel #${channel.name} (${channelId}) for user ${user.id}`);

  // 2. Create a webhook for the channel (so @bot mentions can be posted and responded to)
  let webhookUrl = null;
  try {
    const whRes = await fetch(`${DISCORD_API}/channels/${channelId}/webhooks`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name: 'Procadamia' })
    });
    if (whRes.ok) {
      const wh = await whRes.json();
      webhookUrl = `https://discord.com/api/webhooks/${wh.id}/${wh.token}`;
      console.log(`[discord-provision] Webhook created for #${channel.name}: ${wh.id}`);
    } else {
      console.warn(`[discord-provision] Webhook creation failed for #${channel.name}:`, await whRes.text());
    }
  } catch (e) {
    console.warn(`[discord-provision] Webhook creation error:`, e.message);
  }

  return { channelId, channelName: channel.name, webhookUrl };
}

/**
 * Send an embed (+ optional mention text) to a user's personal Discord channel.
 * Pass `content` to include a @mention or plain text above the embed.
 */
async function postToUserChannel(user, embed, content = null) {
  const channelId = user.discordChannelId;
  if (!channelId) return;
  const token = getBotToken();
  if (!token) return;
  try {
    const body = { embeds: [embed] };
    if (content) body.content = content;
    const res = await fetch(`${DISCORD_API}/channels/${channelId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bot ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const err = await res.text();
      console.warn('[discord-provision] postToUserChannel error:', err);
    }
  } catch (e) {
    console.warn('[discord-provision] postToUserChannel error:', e.message);
  }
}

/**
 * Send a plain text message to a user's personal Discord channel.
 */
async function sendToUserChannel(channelId, content) {
  if (!channelId) return;
  const token = getBotToken();
  if (!token) return;
  try {
    await fetch(`${DISCORD_API}/channels/${channelId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bot ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    });
  } catch (e) {
    console.warn('[discord-provision] sendToUserChannel error:', e.message);
  }
}

/**
 * Delete a user's Discord channel (e.g., on account deletion).
 */
async function deprovisionUserChannel(channelId) {
  const token = getBotToken();
  if (!token || !channelId) return;
  try {
    await fetch(`${DISCORD_API}/channels/${channelId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bot ${token}` }
    });
    console.log(`[discord-provision] Deleted channel ${channelId}`);
  } catch (e) {
    console.warn('[discord-provision] deprovision error:', e.message);
  }
}

module.exports = { provisionUserChannel, postToUserChannel, sendToUserChannel, deprovisionUserChannel, slugifyName };
