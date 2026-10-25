import type { PropsWithChildren } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { colors } from "@/theme/colors";

export function Screen({ children }: PropsWithChildren) {
  return <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexGrow: 1,
    padding: 24,
  },
});
