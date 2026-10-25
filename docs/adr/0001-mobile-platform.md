# ADR 0001: Expo and React Native client

- Status: Accepted
- Date: 2026-10-25

## Context

The repository had no application code or established navigation choice. The
product needs one mobile app with Chats first and Mail later, with a maintainable
TypeScript structure and minimal route scaffolding.

## Decision

Use React Native, Expo, TypeScript, and Expo Router. Use the current Expo SDK
and its package compatibility tooling rather than adding native modules with
unverified version compatibility. Use Expo SecureStore for native persisted
Supabase auth sessions. Web builds, if used, store sessions in `localStorage`
and do not have equivalent secure-storage guarantees. iOS Keychain entries may
survive an app reinstall; Android app data is removed when the app is
uninstalled.

Support iOS and Android as release platforms. Retain Expo's web-compatible
structure and dependencies so web can be evaluated later, but do not treat web
as a supported client or release target unless requested.

Use Supabase as the managed backend for Postgres, Auth, Realtime, Storage, and
Edge Functions. Do not add a separately managed Postgres server or Redis as
default infrastructure. Do not use Flutter or NestJS.

## Consequences

- Feature code belongs under `src/features`; URL routes belong under `app/`.
- Expo-compatible dependencies must be checked with `npx expo install --check`.
- Native credential persistence is platform-managed and not shared with a
  separate browser session.
- Web support requires a future product decision and review of browser auth
  storage and platform-specific behavior.
- Server-state and form libraries are deferred until a feature needs them.
