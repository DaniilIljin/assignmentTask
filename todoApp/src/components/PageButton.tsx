import { StyleSheet } from "react-native";
import { Button, useTheme } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const PageButton = () => {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <Button
      icon="plus"
      mode="contained"
      contentStyle={{backgroundColor: theme.colors.secondary}}
      labelStyle={{color: theme.colors.primary}}
      onPress={() => {
        navigation.navigate("CreateTask");
      }}
    />
  );
};

export default PageButton;

const styles = StyleSheet.create({
    
});
