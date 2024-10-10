import {LogBox, ScrollView, StyleSheet, Text } from 'react-native';

import Screen from '../layouts/Screen.js';
import initialModules from '../../data/modules'
import ModuleItem from '../../modules/ModuleItem.js'
import { useState } from 'react';
import Icons from '../UI/Icons.js'
import { Button, ButtonTray, uttonTray } from '../UI/Button.js'

// console.log(initialModules[0].ModuleCode)


// const modules = initialModules;



const ModuleListScreen = ({navigation}) => {
  const [modules, setModules] = useState(initialModules);
  LogBox.ignoreLogs(['Non-serialized values were found in the navigation state']);

  
  const gotoViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete });
  const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', {onAdd});

  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
    console.log('Deleted ModuleID:', module.ModuleID);
    
  };

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  }

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  }

  const handleAdd = (module) => setModules([...modules, module])


  return (
    <Screen>
      <ButtonTray>
        <Button label='Add' onClick={gotoAddScreen} />
      </ButtonTray>
      <ScrollView style={styles.container}>
      {
        initialModules.map((module) => (
          // <ModuleItem module={module} onSelect={() => handleDelete(module)} />
          <ModuleItem key={module.ModuleID} module={module} onSelect={() => handleSelect(module)} />

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


