import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/theme/colors";

export function ConfigurationNotice() {
  return (
    <View accessibilityRole="alert" style={styles.notice}>
      <Text style={styles.title}>Supabase is not configured</Text>
      <Text style={styles.message}>
        Add EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY to your .env file,
        then restart Expo. Only an anon or publishable key belongs in the app;
        service-role keys must stay server-side.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    color: colors.foreground,
    lineHeight: 21,
    marginTop: 6,
  },
  notice: {
    backgroundColor: colors.warningBackground,
    borderRadius: 12,
    marginTop: 24,
    padding: 16,
  },
  title: {
    color: colors.warning,
    fontSize: 16,
    fontWeight: "700",
  },
});
