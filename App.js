import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton, Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import NameScreen from './screens/NameScreen';
import TitleScreen from './screens/TitleScreen';
import BackScreen from './screens/BackScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{
            headerRight: () => (
              <IconButton icon="alert-outline" onPress={() => alert('You\'re awesome!')} color={DefaultTheme.colors.notification} />
            )
          }} />
          <Stack.Screen name="Book" component={BookScreen} />
          <Stack.Screen name="Back" component={BackScreen} />
          <Stack.Screen name="Name" component={NameScreen} />
          <Stack.Screen name="Title" component={TitleScreen} options={({route}) => ({title: route.params.title})} />
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
