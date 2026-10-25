import { StyleSheet, Text } from "react-native";

import { Screen } from "@/components/ui/Screen";
import { colors } from "@/theme/colors";

export default function ChatsScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Chats</Text>
      <Text style={styles.description}>
        Your conversations will appear here. Chat features are planned for the first
        product phase.
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
