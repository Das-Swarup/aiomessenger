# Product roadmap

The product is one app with Chats and Mail. Chat is the first release focus;
Mail connects to existing mail providers and does not provide email hosting.

## Weeks 1–16: Chat MVP

- [ ] Weeks 1–2: Confirm Chat product requirements, privacy model, and
      retention/media policy. iOS and Android are the current release targets;
      use the existing `aiomessenger` Supabase project during development.
- [ ] Weeks 3–4: Email/password, Google app-account login, and phone OTP;
      verification, profile, and onboarding.
- [ ] Weeks 5–6: Discovery and contact controls.
- [ ] Weeks 7–9: One-to-one conversations, message history, delivery/read
      states, and realtime updates.
- [ ] Weeks 10–11: Group conversations, membership, and permissions.
- [ ] Weeks 12–13: Image/file media with storage policies and size/type limits.
- [ ] Weeks 14–15: Notifications, settings, abuse reporting, and account
      controls.
- [ ] Week 16: Accessibility, privacy/security review, reliability testing,
      release readiness, and production rollout.

## Weeks 17–22: Mail

- [ ] Week 17: Confirm provider feasibility, Gmail approval, OAuth scopes,
      consent text, and data-retention policy.
- [ ] Weeks 18–19: Explicit Gmail account connection and secure token handling
      through approved server-side flows.
- [ ] Weeks 20–21: Read-only mail views and user-controlled sync/disconnect.
- [ ] Week 22: Provider-policy review, privacy/security testing, and staged
      release.

## Invariants

- Registering with a phone number or email authenticates the app account only;
  it never grants mailbox access.
- Google login authenticates the app account only and does not request Gmail
  mailbox scopes.
- Mailbox access requires a separate user-authorized provider connection.
- Gmail integration is conditional on provider approval.
- The app does not host proprietary email.
- Client access to Supabase data is protected by RLS; privileged credentials
  never ship in the app.
