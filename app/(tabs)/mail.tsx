import { StyleSheet, Text } from "react-native";

import { Screen } from "@/components/ui/Screen";
import { colors } from "@/theme/colors";

export default function MailScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Mail</Text>
      <Text style={styles.description}>
        Connect an existing email account here in a later phase. App registration does not
        connect a mailbox.
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
