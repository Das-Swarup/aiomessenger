import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AppState, Platform } from "react-native";

import { publicEnvResult } from "@/lib/env";
import { getSupabaseClient } from "@/lib/supabase/client";

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === "web" || !publicEnvResult.success) {
      return;
    }

    const { auth } = getSupabaseClient();
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        void auth.startAutoRefresh();
      } else {
        void auth.stopAutoRefresh();
      }
    });

    if (AppState.currentState === "active") {
      void auth.startAutoRefresh();
    }

    return () => {
      subscription.remove();
      void auth.stopAutoRefresh();
    };
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="index" options={{ title: "AIOMessenger" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="account" options={{ title: "Account" }} />
      </Stack>
    </>
  );
}
