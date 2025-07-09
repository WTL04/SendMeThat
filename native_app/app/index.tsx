import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native';
import ContactsScreen from "./ContactsScreen";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ContactsScreen />
    </SafeAreaView>
  );
}
