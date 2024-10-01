import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import Screen from '../layouts/Screen';
import initialModules from '../../data/modules';

const ModuleListScreen = () => {
  return (
    <Screen>
      <Pressable style={styles.container}>
      {
        initialModules.map((modules) => (
          <View style={styles.item}>
            <Text style={styles.text}>
              {modules.ModuleCode} {modules.ModuleName}
            </Text>
          </View>
        ))
      }
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  text: {
    fontSize: 16,
  }
});


export default ModuleListScreen;