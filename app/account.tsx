import { StyleSheet, Text } from "react-native";

import { Screen } from "@/components/ui/Screen";
import { colors } from "@/theme/colors";

export default function AccountScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Account and onboarding</Text>
      <Text style={styles.description}>
        Email and password, Google login, and phone OTP will authenticate your
        AIOMessenger account only. Google login does not connect a Gmail mailbox; mailbox
        access requires a separate provider connection and consent.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  description: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
  title: {
    color: colors.foreground,
    fontSize: 28,
    fontWeight: "700",
  },
});
