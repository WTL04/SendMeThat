// app/index.tsx

import { Text, useColorScheme, View, Button, SafeAreaView, StyleSheet } from "react-native";
import { useRouter } from 'expo-router'
import CustomHeader from "./components/CustomHeader";

export default function App() {
  // enabling route navigation
  const router = useRouter();

  // checking device theme
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  const styles = getStyles(isDark);

  return (
    <SafeAreaView style={styles.container}>

      {/* Custom header with logo top left */}
      <CustomHeader />

      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Home Screen</Text>
        <Button title="Go to Contacts" onPress={() => router.push('/contacts')} />
      </View>
    </SafeAreaView>
  );


}

// helper function: changes theme based on device theme
const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1, // take up as much available space as its parent
      backgroundColor: isDark ? '#121212' : '#fff',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: isDark ? '#fff' : '#000',
    },
  });

