import { Pressable, ScrollView, StyleSheet, View, Text } from 'react-native';
import Screen from '../layouts/Screen';
import initialModules from '../../data/modules.js'


const handleSelect = () => alert('Item selected');


const ModuleListScreen = () => {
  // const modules = initialModules;

  return (
    <Screen>
      <Pressable onPress={handleSelect} style={styles.container}>
      {
        initialModules.map((module) => (
          <View key={module.ModuleID} style={styles.item}>
            <Text style={styles.text}>
              {module.ModuleCode} {module.ModuleName}
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