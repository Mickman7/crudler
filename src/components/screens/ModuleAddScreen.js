import { StyleSheet, Text, View } from 'react-native';
import Icons from '../UI/Icons';
import {Button, ButtonTray} from '../UI/Button';


const defaultModule = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleName: 'Mobile Application Development',
  ModuleCode: 'CI6330',
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: 'Graeme JONES',
  ModuleImage:'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg',
};

export default function ModuleAddScreen({navigation, route}) {

  const { onAdd } = route.params;

  const handleAdd = () => {
    onAdd(defaultModule);

  }
  const handleCancel = navigation.goBack;

  return (
    <View style={styles.container}>
      <Text>Add</Text>
      <ButtonTray>
        <Button label='Add' onClick={handleAdd}/>
        <Button label='Cancel' onClick={handleCancel}/>
      </ButtonTray>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});