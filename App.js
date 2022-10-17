import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./src/navigation/TabNavigation";

export default function App() {

  return (
    <NavigationContainer>
   <BottomTabNavigator/>
    </NavigationContainer>
  );
}
