import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome, { assets as WelcomeAssets } from "./Welcome";
import { AuthenticationRoutes } from "../components/Navigation";
import Onboarding from "./Onboarding";
import Login from './Login';

export const assets = [...WelcomeAssets]

const AuthenticationStack = createNativeStackNavigator<AuthenticationRoutes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
      <AuthenticationStack.Screen name='Welcome' component={Welcome} />
      <AuthenticationStack.Screen name='Login' component={Login} />
    </AuthenticationStack.Navigator>
  );
};

