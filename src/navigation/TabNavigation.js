import React,{useRef} from "react";
import {
  StyleSheet,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MainStackNavigator,
  NewsStackNavigator,
  ExchangeStackNavigator
} from "./StackNavigation";

// import Ionicons from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Entypo";

import * as Animatable from "react-native-animatable";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const viewRef = useRef(null);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Exchange") {
            iconName = focused ? "colours" : "colours";
          } else if (route.name === "News") {
            iconName = focused ? "news" : "news";
          } 
          return (
        
              <Animatable.View
              animation="zoomIn"
                ref={viewRef}
                duration={1000}
                style={styles.container}
              >
                <Ionicons name={iconName} size={18} color={color} />
              </Animatable.View>
       
          );
        },
        tabBarActiveTintColor: "#5e69ee",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Exchange"
        component={ExchangeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="News"
        component={NewsStackNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})