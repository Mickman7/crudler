import {ScrollView, StyleSheet, Text } from 'react-native';

import Screen from '../layouts/Screen.js';
import initialModules from '../../data/modules'
import ModuleItem from '../../modules/ModuleItem.js'
import { useState } from 'react';

// console.log(initialModules[0].ModuleCode)


// const modules = initialModules;




const ModuleListScreen = ({navigation}) => {
  const [modules, setModules] = useState(initialModules);

  
  const handleSelect = (module) => navigation.navigate('ModuleViewScreen', { module })

  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
    console.log('Deleted ModuleID:', module.ModuleID);
    
  };


  return (
    <Screen>
      <ScrollView style={styles.container}>
      {
        initialModules.map((module) => (
          // <ModuleItem module={module} onSelect={() => handleDelete(module)} />
          <ModuleItem module={module} onSelect={() => handleSelect(module)} />

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