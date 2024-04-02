import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export type RootStackParamsList = {
  Home: undefined;
  Character: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const themeStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: themeStyle.color,
          headerStyle: { backgroundColor: themeStyle.backgroundColor },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Personagens' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
