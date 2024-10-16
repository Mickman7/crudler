import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Icons from '../components/UI/Icons';
import {Button, ButtonTray} from '../components/UI/Button';
import { useState } from 'react';


const defaultModule = {
    ModuleID: null,
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: null,
    ModuleLeaderID: null,
    ModuleLeaderName: null,
    ModuleImage: null,
  };

const ModuleForm = ({onSubmit, onCancel}) => {

    defaultModule.ModuleImage = 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg';
    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);

    const [module, setModule] = useState(defaultModule);

    const handleChange = (field, value) => setModule({...module, [field]: value});
    const handleSubmit = () => onSubmit(module);

    const submitLabel = 'Add';
    const submitIcon = <Icons.Add />

  return (
    <View style={styles.formContainer}>
    <View style={styles.container}>
      <Text style={styles.itemLabel}>ModuleCode</Text>
      <TextInput 
        value={module.ModuleCode} 
        onChangeText={(value) => handleChange('ModuleCode', value)}
        style={styles.itemTextInput}
        />

      <Text style={styles.itemLabel}>ModuleName</Text>
      <TextInput 
        value={module.ModuleName} 
        onChangeText={(value) => handleChange('ModuleName', value)}
        style={styles.itemTextInput}
        />

      <Text style={styles.itemLabel}>Module image URL</Text>
      <TextInput 
        value={module.ModuleImage} 
        onChangeText={(value) => handleChange('ModuleImage', value)}
        style={styles.itemTextInput}
        />
        
      <ButtonTray>
        <Button label={submitLabel } icon={submitIcon} onClick={handleSubmit}/>
        <Button label='Cancel' onClick={onCancel}/>
      </ButtonTray>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
      
    },
    itemLabel: {
      color: 'grey',
      fontSize: 16,
      marginBottom: 5,
    },
    itemTextInput: {
      height: 50,
      paddingLeft: 10,
      fontSize: 16,
      backgroundColor: 'white',
      borderRadius: 7,
      borderWidth: 1,
      borderColor: 'lightgray',
    },
    formContainer: {

    },
  });

export default ModuleForm