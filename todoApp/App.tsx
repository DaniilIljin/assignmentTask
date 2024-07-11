import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import Navigation from "src/navigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2042fb',
    secondary: 'white'
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
