# ADR 0002: Supabase environments and schema safety

- Status: Accepted
- Date: 2026-10-25

## Context

The application needs managed database, authentication, realtime, storage, and
server-side function capabilities without exposing privileged credentials to
the client.

## Decision

Use the existing `aiomessenger` Supabase project for development until the
product owner directs otherwise. Do not create or link additional remote
projects. The project's deployment role is not yet assigned. Keep schema
changes in reviewed, timestamped SQL migrations. Confirm the connected project
before using Supabase MCP. Prefer read-only MCP inspection; never apply
migrations or destructive/data-changing operations automatically.

Enable and test Row Level Security for every client-accessible table and
storage bucket. The app can use only the public anon/publishable key. Service
role keys, database credentials, and OAuth client secrets remain server-side,
such as in Edge Function secrets.

## Consequences

- No project-specific IDs or credentials are embedded in source control.
- Dashboard-only schema changes are not the source of truth.
- Any migration against the shared project requires review and explicit
  approval.
- Phone/email app-account authentication and mailbox-provider OAuth are
  separate flows.
