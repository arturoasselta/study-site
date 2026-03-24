/**
 * ghl-sync.js — Procadamia ↔ GHL Sync Layer
 *
 * All functions are fire-and-forget: they never throw or block the main server.
 * GHL failures log to console but never break the website.
 *
 * Location: wmLPEMJ8Bv7HJyloTa5K
 * API key: stored in ~/.agents/secrets.json → ghl.procadamia_pit_key
 */

const https = require('https');
const fs = require('fs');

// ─── Config ──────────────────────────────────────────────────────────────────

const LOCATION_ID = 'wmLPEMJ8Bv7HJyloTa5K';
const BASE_URL = 'services.leadconnectorhq.com';
const VERSION = '2021-07-28';

const PIPELINES = {
  userLifecycle:  'FVcYePOLvbUKaDa2LYlX',
  supportTickets: '3x7qknn93F17Y88uvhct',
  courseRequests: 'ZQN71vththsx93ZjlYfT',
};

const STAGES = {
  // User Lifecycle
  newSignup:    'f2417124-6f69-4228-94b3-299b45b96f6b',
  onboarding:   '0751a056-641e-4f83-906f-12ac90044aba',
  activeTrial:  '1933c7f2-ced9-4a27-a7d9-9d09d80b0cfc',
  activePaid:   'd7801511-48f3-4a60-9cf3-50845be1ab90',
  atRisk:       '55e4bc65-58ef-4f63-9f8a-3a0d12eef24c',
  churned:      '68077938-3da2-4729-a758-2248261daee3',
  winBack:      '66163c16-0bda-4415-a487-1626b4953d16',
  // Support Tickets
  newTicket:    'b93a86e3-f902-4408-9d48-3755b33543c0',
  // Course Requests
  reqReceived:  'b572e35d-d73f-4ac1-82ad-77bce7f7b29a',
};

// status → User Lifecycle stage mapping
const STATUS_TO_STAGE = {
  pending:  STAGES.newSignup,
  approved: STAGES.activeTrial,   // manual approval = trial access
  denied:   STAGES.churned,
  admin:    STAGES.activePaid,    // admins treated as paid
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getApiKey() {
  try {
    const secrets = JSON.parse(fs.readFileSync('/Users/arturoasselta/.agents/secrets.json', 'utf8'));
    return secrets.ghl.procadamia_pit_key;
  } catch (e) {
    console.error('[ghl-sync] Cannot read API key:', e.message);
    return null;
  }
}

function apiCall(method, path, body = null) {
  return new Promise((resolve) => {
    const apiKey = getApiKey();
    if (!apiKey) return resolve(null);

    const bodyStr = body ? JSON.stringify(body) : null;
    const options = {
      hostname: BASE_URL,
      path,
      method,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Version': VERSION,
        'Content-Type': 'application/json',
        ...(bodyStr ? { 'Content-Length': Buffer.byteLength(bodyStr) } : {}),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (c) => { data += c; });
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, body: data }); }
      });
    });
    req.on('error', (e) => {
      console.error(`[ghl-sync] API error ${method} ${path}:`, e.message);
      resolve(null);
    });
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

// Fire-and-forget wrapper: catches all errors, never blocks
function safe(label, fn) {
  fn().catch(e => console.error(`[ghl-sync] ${label} failed:`, e.message));
}

// ─── Users file helpers ───────────────────────────────────────────────────────

function loadUsers() {
  try { return JSON.parse(fs.readFileSync('/Users/arturoasselta/study-site/users.json', 'utf8')); }
  catch { return []; }
}
function saveUsers(users) {
  fs.writeFileSync('/Users/arturoasselta/study-site/users.json', JSON.stringify(users, null, 2));
}
function updateUserGhlIds(userId, ghlContactId, ghlOppId) {
  const users = loadUsers();
  const user = users.find(u => u.id === userId);
  if (user) {
    if (ghlContactId) user.ghl_contact_id = ghlContactId;
    if (ghlOppId)     user.ghl_opp_id = ghlOppId;
    saveUsers(users);
  }
}

// ─── Email templates ─────────────────────────────────────────────────────────

const EMAILS = {
  welcome: (name) => ({
    subject: `Welcome to Procadamia, ${name.split(' ')[0]}! 🎓`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <div style="background:#6c63ff;padding:32px 24px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:24px">Welcome to Procadamia 🐵</h1>
        </div>
        <div style="background:#f9f9fb;padding:28px 24px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5;border-top:none">
          <p style="margin:0 0 16px">Hey ${name.split(' ')[0]},</p>
          <p style="margin:0 0 16px">Your account has been created and is <strong>pending review</strong>. We'll shoot you another email as soon as it's approved — usually within 24 hours.</p>
          <p style="margin:0 0 24px">Once approved, you'll have access to all the interactive study guides on the platform.</p>
          <a href="https://procadamia.com" style="display:inline-block;background:#6c63ff;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:600">Visit Procadamia →</a>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:28px 0">
          <p style="margin:0;font-size:13px;color:#777">Questions? Just reply to this email. — Mojo Jojo 🐵</p>
        </div>
      </div>
    `,
  }),

  approved: (name) => ({
    subject: `You're in! Your Procadamia account is ready 🎉`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <div style="background:#22c55e;padding:32px 24px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:24px">You're approved! 🎉</h1>
        </div>
        <div style="background:#f9f9fb;padding:28px 24px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5;border-top:none">
          <p style="margin:0 0 16px">Hey ${name.split(' ')[0]},</p>
          <p style="margin:0 0 16px">Great news — your Procadamia account has been <strong>approved</strong>! You now have full access to the interactive study guides.</p>
          <p style="margin:0 0 24px">Log in and start studying 👇</p>
          <a href="https://procadamia.com" style="display:inline-block;background:#22c55e;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:600">Go to Procadamia →</a>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:28px 0">
          <p style="margin:0;font-size:13px;color:#777">Need help getting started? Reply here. — Mojo Jojo 🐵</p>
        </div>
      </div>
    `,
  }),

  denied: (name) => ({
    subject: `Procadamia account update`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <div style="background:#6b7280;padding:32px 24px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:24px">Account Update</h1>
        </div>
        <div style="background:#f9f9fb;padding:28px 24px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5;border-top:none">
          <p style="margin:0 0 16px">Hey ${name.split(' ')[0]},</p>
          <p style="margin:0 0 16px">Unfortunately we weren't able to approve your Procadamia account at this time.</p>
          <p style="margin:0 0 24px">If you think this is a mistake, reply to this email and we'll take another look.</p>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:28px 0">
          <p style="margin:0;font-size:13px;color:#777">— Mojo Jojo 🐵</p>
        </div>
      </div>
    `,
  }),

  courseRequestConfirm: (name, subject) => ({
    subject: `Got it! Your course request for "${subject}" is in 📚`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <div style="background:#6c63ff;padding:32px 24px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:24px">Course Request Received 📚</h1>
        </div>
        <div style="background:#f9f9fb;padding:28px 24px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5;border-top:none">
          <p style="margin:0 0 16px">Hey ${name.split(' ')[0]},</p>
          <p style="margin:0 0 16px">We've received your request for <strong>${subject}</strong>. We'll review your materials and get to work on the interactive guide.</p>
          <p style="margin:0 0 24px">You'll see it appear on the home page once it's published. We'll also shoot you an email when it's ready.</p>
          <a href="https://procadamia.com" style="display:inline-block;background:#6c63ff;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:600">Back to Procadamia →</a>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:28px 0">
          <p style="margin:0;font-size:13px;color:#777">— Mojo Jojo 🐵</p>
        </div>
      </div>
    `,
  }),
};

// ─── Core GHL operations ─────────────────────────────────────────────────────

async function createContact(email, name, phone = null) {
  const payload = {
    locationId: LOCATION_ID,
    email,
    firstName: name.split(' ')[0],
    lastName: name.split(' ').slice(1).join(' ') || '',
    name,
    source: 'procadamia.com',
    tags: ['procadamia-user'],
  };
  if (phone) payload.phone = phone;
  const res = await apiCall('POST', '/contacts/', payload);
  return res?.body?.contact?.id || null;
}

async function createOpportunity(contactId, contactName, pipelineId, stageId, title, monetaryValue = 0) {
  const payload = {
    pipelineId,
    locationId: LOCATION_ID,
    name: title,
    pipelineStageId: stageId,
    status: 'open',
    contactId,
    monetaryValue,
  };
  const res = await apiCall('POST', '/opportunities/', payload);
  return res?.body?.opportunity?.id || null;
}

async function moveOpportunityStage(oppId, stageId) {
  return apiCall('PUT', `/opportunities/${oppId}`, { pipelineStageId: stageId });
}

async function addOpportunityNote(oppId, note) {
  return apiCall('POST', `/opportunities/${oppId}/notes`, { body: note });
}

async function findContactByEmail(email) {
  const res = await apiCall('GET', `/contacts/?locationId=${LOCATION_ID}&email=${encodeURIComponent(email)}`);
  const contacts = res?.body?.contacts;
  return contacts?.[0]?.id || null;
}

/**
 * Send a transactional email via GHL conversations API.
 * Uses the location's configured sending domain — no external email service needed.
 */
async function sendEmail(contactId, subject, html) {
  const res = await apiCall('POST', '/conversations/messages', {
    type: 'Email',
    contactId,
    locationId: LOCATION_ID,
    subject,
    html,
    message: subject, // plain-text fallback
  });
  const ok = res?.status === 200 || res?.status === 201;
  if (ok) console.log(`[ghl-sync] Email sent → contact:${contactId} | "${subject}"`);
  else    console.warn(`[ghl-sync] Email failed → contact:${contactId} | status:${res?.status}`);
  return ok;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Called on POST /api/signup
 * Creates GHL contact + User Lifecycle opportunity at "New Signup"
 */
function onUserSignup(user) {
  safe('onUserSignup', async () => {
    let contactId = await findContactByEmail(user.email);
    if (!contactId) {
      contactId = await createContact(user.email, user.display_name);
    }
    if (!contactId) return;

    const oppId = await createOpportunity(
      contactId,
      user.display_name,
      PIPELINES.userLifecycle,
      STAGES.newSignup,
      `${user.display_name} — Procadamia Signup`
    );

    updateUserGhlIds(user.id, contactId, oppId);

    // Send welcome email
    const { subject, html } = EMAILS.welcome(user.display_name);
    await sendEmail(contactId, subject, html);

    console.log(`[ghl-sync] Signup synced → contact:${contactId} opp:${oppId}`);
  });
}

/**
 * Called on PATCH /api/admin/users/:id (status change)
 * Moves GHL opportunity to the matching stage
 */
function onUserStatusChange(user, newStatus) {
  safe('onUserStatusChange', async () => {
    const stage = STATUS_TO_STAGE[newStatus];
    if (!stage) return;

    let oppId = user.ghl_opp_id;

    // If no opp tracked, look up contact and find their opp
    if (!oppId) {
      let contactId = user.ghl_contact_id || await findContactByEmail(user.email);
      if (!contactId) {
        contactId = await createContact(user.email, user.display_name);
      }
      if (contactId) {
        oppId = await createOpportunity(
          contactId,
          user.display_name,
          PIPELINES.userLifecycle,
          stage,
          `${user.display_name} — Procadamia Signup`
        );
        updateUserGhlIds(user.id, contactId, oppId);
      }
      return;
    }

    await moveOpportunityStage(oppId, stage);
    const noteMap = {
      approved: 'Account approved — trial access granted via admin panel.',
      denied: 'Account denied via admin panel.',
      admin: 'Upgraded to admin status.',
      pending: 'Status reset to pending.',
    };
    await addOpportunityNote(oppId, noteMap[newStatus] || `Status changed to ${newStatus}.`);

    // Send status-change email
    if (newStatus === 'approved' || newStatus === 'denied') {
      const contactId = user.ghl_contact_id || await findContactByEmail(user.email);
      if (contactId) {
        const emailData = EMAILS[newStatus](user.display_name);
        await sendEmail(contactId, emailData.subject, emailData.html);
      }
    }

    console.log(`[ghl-sync] Status change ${newStatus} → stage ${stage} for opp ${oppId}`);
  });
}

/**
 * Called on POST /api/support-ticket
 * Creates a new opportunity in the Support Tickets pipeline
 */
function onSupportTicket(user, ticket) {
  safe('onSupportTicket', async () => {
    let contactId = user.ghl_contact_id || await findContactByEmail(user.email);
    if (!contactId) {
      contactId = await createContact(user.email, user.display_name);
      if (!contactId) return;
      const users = loadUsers();
      const u = users.find(u2 => u2.id === user.id);
      if (u) { u.ghl_contact_id = contactId; saveUsers(users); }
    }

    const title = `[Ticket #${ticket.id}] ${ticket.type} — ${user.display_name}`;
    const oppId = await createOpportunity(
      contactId,
      user.display_name,
      PIPELINES.supportTickets,
      STAGES.newTicket,
      title
    );

    if (oppId) {
      await addOpportunityNote(oppId,
        `Type: ${ticket.type}\n\nDescription: ${ticket.description}` +
        (ticket.url ? `\n\nURL: ${ticket.url}` : '') +
        (ticket.steps ? `\n\nSteps: ${ticket.steps}` : '')
      );
    }

    console.log(`[ghl-sync] Support ticket #${ticket.id} synced → opp:${oppId}`);
  });
}

/**
 * Called on POST /api/course-request (new endpoint to be added)
 * Creates a new opportunity in the Course Requests pipeline
 */
function onCourseRequest(user, request) {
  safe('onCourseRequest', async () => {
    let contactId = user.ghl_contact_id || await findContactByEmail(user.email);
    if (!contactId) {
      contactId = await createContact(user.email, user.display_name);
      if (!contactId) return;
    }

    const title = `Course Request: ${request.subject} — ${user.display_name}`;
    const oppId = await createOpportunity(
      contactId,
      user.display_name,
      PIPELINES.courseRequests,
      STAGES.reqReceived,
      title
    );

    if (oppId) {
      await addOpportunityNote(oppId,
        `Requested Course: ${request.subject}\n\nDescription: ${request.description || 'N/A'}`
      );
    }

    // Send confirmation email to requester
    const { subject: emailSubject, html: emailHtml } = EMAILS.courseRequestConfirm(user.display_name, request.subject);
    await sendEmail(contactId, emailSubject, emailHtml);

    console.log(`[ghl-sync] Course request synced → opp:${oppId}`);
  });
}

module.exports = {
  onUserSignup,
  onUserStatusChange,
  onSupportTicket,
  onCourseRequest,
  PIPELINES, STAGES, LOCATION_ID,
};
