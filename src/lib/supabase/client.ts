import "react-native-url-polyfill/auto";

import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import {
  createClient,
  type SupportedStorage,
  type SupabaseClient,
} from "@supabase/supabase-js";

import { getPublicEnv } from "@/lib/env";
import type { Database } from "@/types/database";

const authStorage: SupportedStorage = {
  getItem: (key) =>
    Platform.OS === "web"
      ? Promise.resolve(globalThis.localStorage.getItem(key))
      : SecureStore.getItemAsync(key),
  setItem: (key, value) =>
    Platform.OS === "web"
      ? Promise.resolve(globalThis.localStorage.setItem(key, value))
      : SecureStore.setItemAsync(key, value, {
          keychainAccessible: SecureStore.AFTER_FIRST_UNLOCK,
        }),
  removeItem: (key) =>
    Platform.OS === "web"
      ? Promise.resolve(globalThis.localStorage.removeItem(key))
      : SecureStore.deleteItemAsync(key),
};

let client: SupabaseClient<Database> | undefined;

export function getSupabaseClient(): SupabaseClient<Database> {
  if (!client) {
    const { EXPO_PUBLIC_SUPABASE_ANON_KEY, EXPO_PUBLIC_SUPABASE_URL } = getPublicEnv();

    client = createClient<Database>(
      EXPO_PUBLIC_SUPABASE_URL,
      EXPO_PUBLIC_SUPABASE_ANON_KEY,
      {
        auth: {
          autoRefreshToken: true,
          detectSessionInUrl: false,
          persistSession: true,
          storage: authStorage,
        },
      },
    );
  }

  return client;
}
