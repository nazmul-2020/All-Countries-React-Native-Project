import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Countries from './Countries/Countries';
import Country from './Countries/Country';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native App</Text>
      <StatusBar style="auto" />
      <Countries/>
      {/* <Country/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
