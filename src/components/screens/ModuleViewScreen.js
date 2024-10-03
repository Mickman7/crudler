import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';

const ModuleViewScreen = ({navigate, route}) => {

  const { module } = route.params;

  if (!module) {
    return <Text>Loading...</Text>;
  }


  return (
    <View style={styles.container}>
      <FullWidthImage source={{uri:module.ModuleImage}} style={styles.image} />
      <View style={styles.infoTray}>
        <Text style={styles.boldText}>{module.ModuleCode} {module.ModuleName}</Text>
        <Text style={styles.text}>Level {module.ModuleLevel}</Text>
        <Text style={styles.text}>
          {module.ModuleLeaderName} <Text style={styles.dimText}>(Module Leader)</Text>
          </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    padding: 10
  },
  infoTray: {
    gap: 5
  },
  text: {
    fontSize: 16
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  dimText: {
    color: 'grey'
  },
  image: {
    borderRadius: 3
  }
});

export default ModuleViewScreen;