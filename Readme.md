# AIOMessenger

An Expo and React Native app foundation for a single product with two primary
areas: Chats (Weeks 1–16) and Mail (Weeks 17–22). Chat is the initial product
focus. Mail will connect to existing providers; this project will not host
proprietary email.

## Current foundation

- Expo + React Native + TypeScript with Expo Router.
- iOS and Android are the supported release platforms. Expo web support is
  retained for possible future expansion, but web is not currently supported
  for release.
- Supabase client configuration for Auth, Postgres, Realtime, Storage, and Edge
  Functions. No database features or schema have been deployed by this scaffold.
- Native auth-session persistence through Expo SecureStore, backed by the
  platform's protected storage. iOS Keychain entries may persist after app
  reinstall; Android app data is removed on uninstall. The web fallback uses
  browser `localStorage`, which does not provide equivalent secure storage.
- Minimal Chats, Mail, and account/onboarding routes.
- Public environment validation; the app can display its setup screen before
  Supabase credentials are configured.

## Requirements

- Node.js 22 LTS (or a newer Node version supported by the installed Expo SDK).
- npm.
- Expo Go or an iOS/Android simulator for device previews.

## Install and run

```sh
npm install
cp .env.example .env
# Edit .env and set the Supabase URL and anon/publishable key.
npm start
```

Use the Expo terminal shortcuts (`i` for iOS simulator, `a` for Android
emulator, or scan the QR code with Expo Go. `npm run web` is available for
exploratory compatibility checks only; web is not currently a supported client.

The client may contain only the Supabase anon (legacy) or publishable key.
These keys are intended to be public and are safe only when database access is
protected by Row Level Security. Never put a service-role key, database
password, OAuth client secret, or other privileged secret in an `EXPO_PUBLIC_*`
variable or in the mobile app. Keep privileged credentials in server-side
Supabase Edge Function secrets.

## Checks

```sh
npm run lint
npm run format:check
npm run typecheck
npm test
npm run check
```

`npm run check` runs lint, formatting verification, type checking, and tests.
Use `npm run format` to format supported source/config files.
Run `npx expo install --check` and `npx expo-doctor` after changing Expo
dependencies.

## Project layout

```text
app/                         Expo Router routes (Chats, Mail, onboarding)
src/components/ui/           Shared layout primitives
src/components/feedback/     Configuration and status feedback
src/features/                Feature-owned modules (placeholders for now)
src/lib/env/                 Validated public runtime configuration
src/lib/supabase/            Typed Supabase client and auth storage
src/lib/query/               Reserved for server-state setup
src/lib/logger/              Reserved for app logging setup
src/theme/                   Shared design tokens
src/types/                   Shared and generated types
src/utils/                   Small cross-feature utilities
supabase/migrations/         Reviewed, versioned SQL migrations
supabase/functions/          Supabase Edge Functions
tests/                       Unit tests
docs/adr/                    Architecture decision records
```

Empty feature directories are intentional extension points. React Hook Form,
form schemas, and TanStack Query should be introduced with the first forms and
server-state features that need them; Zod is already used for environment
validation.

## Supabase setup and safe workflow

1. Use the existing `aiomessenger` Supabase project for development until
   directed otherwise. Do not create or link another remote project. Its
   deployment role (development, staging, or production) has not been assigned.
2. Copy `.env.example` to `.env` and use the URL and anon/publishable key for
   that project. Keep `.env` out of version control.
3. Add schema changes as timestamped SQL files in `supabase/migrations/`.
   Review migration SQL before any application. Do not make untracked
   dashboard-only schema changes.
4. Enable RLS on every exposed table and storage bucket. Define least-privilege
   policies before shipping client access; test both allowed and denied access.
5. Use Supabase MCP for project/schema inspection and safe database work only
   after confirming the connected project is `aiomessenger`. Prefer read-only
   inspection. Never run destructive or data-changing operations without an
   explicit, reviewed plan and approval.

For manual client setup, retrieve the URL and anon/legacy or publishable key
from the `aiomessenger` project's Supabase dashboard API settings and put only
those public values in `.env`. Planned app-account sign-in methods are email
and password, Google login, and phone OTP. Configure their Supabase Auth
providers and redirect URLs when implementing sign-in. Google login is for
AIOMessenger authentication only; it must not request Gmail mailbox scopes.
Do not create Storage buckets or expose tables until their RLS policies and
access requirements have been reviewed. Add privileged credentials, including
provider OAuth secrets, only to server-side Supabase configuration when a
feature is approved.

The Supabase CLI may be installed using its official installation method for
migration tooling. Do not initialize or link another remote project, start a
separate Supabase development project, or apply migrations until that workflow
is explicitly approved.

MCP was available during scaffold setup. The connected project named
`aiomessenger` was confirmed as active; its public schema contained no tables
and its migration history was empty. No database changes were made.

## Authentication and Mail boundary

Email/password, Google login, and phone OTP authenticate a user's
AIOMessenger account only. Google login does not grant access to a Gmail
mailbox. Mailbox access will be a separate, explicit provider authorization
flow, beginning with Gmail only if the required provider approval is granted.
Never build proprietary email hosting.

## Decisions still requiring product-owner approval

- Gmail OAuth scope, consent and retention policy, and the required approval
  path before Mail work begins.
- Chat MVP product requirements, retention policy, and media limits.

Web remains outside the supported release scope unless requested later.

See [the roadmap](./docs/roadmap.md) and [architecture decisions](./docs/adr/).
