import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CustomHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/SendMeThatLogo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
    </View>
  );
}

// CSS Styles: NO DYNAMIC DEVICE THEME, JUST DARK MODE 
const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    paddingTop: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', // # 101000
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});
