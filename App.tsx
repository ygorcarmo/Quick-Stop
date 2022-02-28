import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { assets as authenticationAssets, Onboarding, Welcome } from './src/Authentication';
import { LoadAssets, theme } from './src/components';
import { ThemeProvider } from '@shopify/restyle';
import { AppRoutes } from './src/components/Navigation';

const assets = [...authenticationAssets];
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

const AuthenticationStack = createNativeStackNavigator<AppRoutes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
      <AuthenticationStack.Screen name='Welcome' component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
