import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { ConfigurationNotice } from "@/components/feedback/ConfigurationNotice";
import { Screen } from "@/components/ui/Screen";
import { publicEnvResult } from "@/lib/env";
import { colors } from "@/theme/colors";

export default function BootScreen() {
  return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>MESSAGING, MADE SIMPLE</Text>
        <Text style={styles.title}>AIOMessenger</Text>
        <Text style={styles.description}>
          One app for conversations now, with optional email connections planned for
          later.
        </Text>
        {!publicEnvResult.success && <ConfigurationNotice />}
        <Link href="/(tabs)/chats" style={styles.link}>
          Open Chats
        </Link>
        <Link href="/account" style={styles.secondaryLink}>
          Account and onboarding
        </Link>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 32,
  },
  description: {
    color: colors.muted,
    fontSize: 17,
    lineHeight: 25,
    marginTop: 12,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  link: {
    alignSelf: "flex-start",
    backgroundColor: colors.primary,
    borderRadius: 10,
    color: colors.surface,
    fontSize: 16,
    fontWeight: "700",
    marginTop: 28,
    overflow: "hidden",
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  secondaryLink: {
    alignSelf: "flex-start",
    color: colors.primary,
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
  },
  title: {
    color: colors.foreground,
    fontSize: 36,
    fontWeight: "800",
    marginTop: 8,
  },
});
