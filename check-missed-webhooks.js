#!/usr/bin/env node
/**
 * Check for course requests/support tickets that didn't get Discord notifications
 * Run: node check-missed-webhooks.js [--fix]
 * With --fix flag, will resend missed Discord posts
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const COURSE_REQUESTS_FILE = path.join(__dirname, 'course-requests.json');
const PROCADAMIA_STATE = '/Users/arturoasselta/Desktop/Projects/Mojo\ Jojo/mojo-mortgage-bot/workspace/procadamia/state.json';
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1486021025186713851/ruYPakF5zcPctEIA2SlrcxL8K2Yxnr-AG9K5aAPaJWv9uDYwZVJ8kvcJU56fydeqALGc';

const BOT_MENTION_SUPPORT = '<@1458619930487296121>';

function postToDiscord(message) {
  return new Promise((resolve) => {
    const body = JSON.stringify({ content: message, username: 'StudyLab Support' });
    const options = {
      hostname: 'discord.com',
      path: '/api/webhooks/1486021025186713851/ruYPakF5zcPctEIA2SlrcxL8K2Yxnr-AG9K5aAPaJWv9uDYwZVJ8kvcJU56fydeqALGc',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };
    const req = https.request(options, (res) => {
      resolve(res.statusCode === 204 || res.statusCode === 200);
      res.resume();
    });
    req.on('error', () => resolve(false));
    req.write(body);
    req.end();
  });
}

async function checkMissedWebhooks() {
  try {
    // Load course requests
    const requests = JSON.parse(fs.readFileSync(COURSE_REQUESTS_FILE, 'utf8'));
    const procadamiaState = JSON.parse(fs.readFileSync(PROCADAMIA_STATE, 'utf8'));

    // Get all course request IDs from GHL
    const ghlRequestIds = Object.entries(procadamiaState.opportunities)
      .filter(([_, opp]) => opp.pipelineId === 'ZQN71vththsx93ZjlYfT')
      .map(([id]) => id);

    console.log(`📊 Audit: ${requests.length} course requests logged, ${ghlRequestIds.length} in GHL pipeline\n`);

    let missed = 0;
    const fix = process.argv[2] === '--fix';

    for (const req of requests) {
      const inGHL = ghlRequestIds.some(id => procadamiaState.opportunities[id]?.createdAt?.includes(req.createdAt));
      if (inGHL) {
        console.log(`✅ ${req.id} — ${req.subject} (${req.email}) — in GHL`);
      } else {
        missed++;
        console.log(`❌ ${req.id} — ${req.subject} (${req.email}) — MISSING from GHL`);
      }
    }

    if (missed === 0) {
      console.log(`\n✨ All requests synced to GHL. No discord webhooks needed to resend.`);
      return;
    }

    if (fix) {
      console.log(`\n🔄 Reposting ${missed} missed Discord notifications...\n`);
      for (const req of requests) {
        const inGHL = ghlRequestIds.some(id => procadamiaState.opportunities[id]?.createdAt?.includes(req.createdAt));
        if (!inGHL) continue;

        const timestamp = new Date(req.createdAt).toLocaleString('en-US', { timeZone: 'America/New_York' });
        const msg = `${BOT_MENTION_SUPPORT} **📚 Course Request #${req.id}**\n\n` +
          `**From:** (user) (${req.email})\n` +
          `**Requested Course:** ${req.subject}\n` +
          (req.description ? `**Details:** ${req.description}\n` : '') +
          `\n**Submitted:** ${timestamp}`;

        const ok = await postToDiscord(msg);
        if (ok) {
          console.log(`✅ Reposted #${req.id}`);
        } else {
          console.log(`❌ Failed to repost #${req.id}`);
        }
        await new Promise(r => setTimeout(r, 200)); // small delay between posts
      }
      console.log(`\nDone!`);
    } else {
      console.log(`\nℹ️  Run with --fix to repost missed Discord notifications`);
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

checkMissedWebhooks();
