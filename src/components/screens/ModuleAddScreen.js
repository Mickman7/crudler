import { StyleSheet } from 'react-native';
import Screen from '../layouts/Screen';
import ModuleForm from '../../modules/ModuleForm';


const defaultModule = {
  ModuleID: null,
  ModuleName: null,
  ModuleCode: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage:'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg',
};




export default function ModuleAddScreen({navigation, route}) {

  const { onAdd } = route.params;

 


  const handleCancel = navigation.goBack;

  return (
    <Screen>
      <ModuleForm onSubmit={onAdd} onCancel={handleCancel}/>
    </Screen>
  );
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
  }
});