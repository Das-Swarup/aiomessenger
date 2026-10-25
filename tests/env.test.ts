import { describe, expect, it } from "@jest/globals";

import { publicEnvSchema } from "@/lib/env";

describe("public environment validation", () => {
  it("accepts the required public Supabase URL and key", () => {
    expect(
      publicEnvSchema.safeParse({
        EXPO_PUBLIC_SUPABASE_URL: "https://project.supabase.co",
        EXPO_PUBLIC_SUPABASE_ANON_KEY: "public-anon-key",
      }).success,
    ).toBe(true);
  });

  it("rejects a missing URL or key", () => {
    expect(publicEnvSchema.safeParse({}).success).toBe(false);
  });

  it("rejects a malformed URL", () => {
    expect(
      publicEnvSchema.safeParse({
        EXPO_PUBLIC_SUPABASE_URL: "not-a-url",
        EXPO_PUBLIC_SUPABASE_ANON_KEY: "public-anon-key",
      }).success,
    ).toBe(false);
  });
});
