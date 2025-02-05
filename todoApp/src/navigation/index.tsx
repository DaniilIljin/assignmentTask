import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import Home from "src/screens/home";
import CreateTask from "src/screens/create-task";
import { useTheme } from "react-native-paper";
import TaskList from "src/screens/task-list";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateTask" component={CreateTask} />
      <Stack.Screen name="TaskList" component={TaskList} />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
