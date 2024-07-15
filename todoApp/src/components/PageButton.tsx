import { StyleSheet, ViewStyle } from "react-native";
import { Button, useTheme, ButtonProps } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PageButton: React.FC<ButtonProps> = ({icon, ...props }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Button
      icon={icon}
      mode="contained"
      onPress={() => {
        navigation.navigate("CreateTask");
      }}
    >
      {props.children}
    </Button>
  );
};

export default PageButton;

const styles = StyleSheet.create({});
