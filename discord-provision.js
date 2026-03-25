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
  // No webhook needed — bot sends messages directly via /channels/{id}/messages
  return { channelId, channelName: channel.name, webhookUrl: null };
}

/**
 * Send an embed to a user's personal Discord channel using the bot token.
 * Uses channel messages endpoint (no webhook permission needed).
 */
async function postToUserChannel(user, embed) {
  const channelId = user.discordChannelId;
  if (!channelId) return;
  const token = getBotToken();
  if (!token) return;
  try {
    const res = await fetch(`${DISCORD_API}/channels/${channelId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bot ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ embeds: [embed] })
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
