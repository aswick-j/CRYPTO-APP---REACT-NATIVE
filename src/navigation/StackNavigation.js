import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from "../screens/Home";

import Exchange from "../screens/Exchange";
import News from "../screens/News";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const NewsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsFeed"
        component={News}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const ExchangeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LiveNews"
        component={Exchange}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  ExchangeStackNavigator,
  NewsStackNavigator,
 
};
