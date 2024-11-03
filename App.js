import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  ModuleListScreen  from '../crudler/src/components/screens/ModuleListScreen';
import ModuleAddScreen from '../crudler/src/components/screens/ModuleAddScreen';
import ModuleViewScreen from '../crudler/src/components/screens/ModuleViewScreen';
import ModuleModifyScreen from '../crudler/src/components/screens/ModuleModifyScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>

      <Stack.Navigator initialRouteName='ModuleListScreen' screenOptions={{
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: 'white',
      }}>
        <Stack.Screen name='ModuleListScreen' component={ModuleListScreen} options={{title: 'List Modules'}}>
        </Stack.Screen >

        <Stack.Screen
          name='ModuleAddScreen'
          component={ModuleAddScreen}
          options={{title: 'Add Modules'}}
        >

        </Stack.Screen>

        <Stack.Screen
          name='ModuleViewScreen'
          component={ModuleViewScreen}
          options={{title: 'View Modules'}}
        >

        </Stack.Screen>

        <Stack.Screen
          name='ModuleModifyScreen'
          component={ModuleModifyScreen}
          options={{title: ' Modules'}}
        >

        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

