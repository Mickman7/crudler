import {ScrollView, StyleSheet } from 'react-native';

import Screen from '../layouts/Screen.js';
import initialModules from '../../data/modules.js'
import ModuleItem from '../../modules/ModuleItem.js'


const handleSelect = () => alert('Item selected');


const ModuleListScreen = () => {
  // const modules = initialModules;

  return (
    <Screen>
      <ScrollView style={styles.container}>
      {
        initialModules.map((module) => (
          <ModuleItem module={module} onSelect={handleSelect} />
        ))
      }
      </ScrollView>
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