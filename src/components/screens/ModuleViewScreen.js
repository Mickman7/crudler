import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ModuleView from '../../modules/ModuleList';

const ModuleViewScreen = ({navigate, route}) => {

  const { module, onDelete } = route.params;

  return (
    <Screen>
      <ModuleView module={module} onDelete={onDelete}/>
    </Screen>
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