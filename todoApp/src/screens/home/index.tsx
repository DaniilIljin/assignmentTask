import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, useTheme } from "react-native-paper";
import PageButton from "src/components/PageButton";

const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.container, backgroundColor: theme.colors.primary }}>
      <Text style={styles.topLeft}>To-Do.</Text>
      <Text style={styles.topRight}>2024-06-28</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Games Global</Text>
      </View>
      <Button
        icon="menu"
        buttonColor={theme.colors.secondary}
        textColor={theme.colors.primary}
        style={styles.bottomLeft}
        onPress={()=>navigation.navigate("TaskList")}
      >
        menu
      </Button>
      <Button
        icon="plus"
        buttonColor={theme.colors.secondary}
        textColor={theme.colors.primary}
        style={styles.bottomRight}
        onPress={()=>navigation.navigate("CreateTask")}
      >
        add
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topLeft: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  topRight: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 200,
  },
  logo: {
    fontSize: 20,
  },
  bottomLeft: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  bottomRight: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
