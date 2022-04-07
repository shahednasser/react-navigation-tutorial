import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton, Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import NameScreen from './screens/NameScreen';
import TitleScreen from './screens/TitleScreen';
import BackScreen from './screens/BackScreen';

import * as Sentry from '@sentry/react-native';

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
    dsn: DSN, 
    sampleRate: 1,
    tracesSampleRate: 1.0,
    enableAutoSessionTracking: true,
    integrations: [
        new Sentry.ReactNativeTracing({
            // Pass instrumentation to be used as `routingInstrumentation`
            routingInstrumentation,
        }),
    ],
    enableNative: false, // doing this due to some local environment issues -- you should not expect to enable this.
});


const Stack = createNativeStackNavigator()

function App() {
  const navigation = React.useRef();
  return (
    <PaperProvider>
      <NavigationContainer
        ref={navigation}
        onReady={() => {
            // Register the navigation container instrumentation
            routingInstrumentation.registerNavigationContainer(
                navigation
            );
        }}
      >
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

export default Sentry.wrap(App);