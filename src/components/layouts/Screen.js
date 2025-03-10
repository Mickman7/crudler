import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

const Screen = ({children}) => {
  return (
    <View style={styles.screen}>
      {children}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Screen;