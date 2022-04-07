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
  dsn: 'https://ffc139edf2344fa88803bba57e47d561@o87286.ingest.sentry.io/6316851', 
  enableInExpoDevelopment: true,
  enableNative: false,
  debug: true,
  tracesSampleRate: 1.0,
  enableAutoSessionTracking: true,
  integrations: [
    new Sentry.ReactNativeTracing({
      // tracingOrigins: ["localhost", "my-site-url.com", /^\//],
      // ... other options
      routingInstrumentation,
    }),
  ],
});


const Stack = createNativeStackNavigator()

const App = () => {
  const navigation = React.useRef();
  return (
    <PaperProvider>
      <NavigationContainer
        ref={navigation}
        onReady={() => {
          routingInstrumentation.registerNavigationContainer(navigation);
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