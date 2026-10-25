import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="chats" options={{ title: "Chats" }} />
      <Tabs.Screen name="mail" options={{ title: "Mail" }} />
    </Tabs>
  );
}
