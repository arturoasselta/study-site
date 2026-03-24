#!/usr/bin/env node
/**
 * One-time backfill: sync existing Procadamia users into GHL
 */
const ghlSync = require('./ghl-sync');
const fs = require('fs');

const USERS_FILE = './users.json';
const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  console.log(`Backfilling ${users.length} users to GHL...`);
  for (const user of users) {
    if (user.ghl_contact_id) {
      console.log(`  SKIP ${user.display_name} — already synced`);
      continue;
    }
    console.log(`  Syncing ${user.display_name} (${user.status})...`);
    // Use onUserSignup to create contact+opp, then onUserStatusChange to set correct stage
    ghlSync.onUserSignup(user);
    await sleep(1500); // avoid rate limits
    ghlSync.onUserStatusChange(user, user.status);
    await sleep(1500);
  }
  // Wait for async ops to complete
  await sleep(5000);
  const updated = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  console.log('\nResult:');
  updated.forEach(u => console.log(`  ${u.display_name}: ghl_contact_id=${u.ghl_contact_id || 'MISSING'}`));
})();
