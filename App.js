// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/Pages/SignIn";
import SignUp from "./src/Pages/SignUp";
import HomeScreen from "./src/Pages/Home";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Home' component={HomeScreen} />

        {/* Add the SignUp screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
