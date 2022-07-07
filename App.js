import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Text from "./src/Components/Text/Text";
import Home from "./src/Screens/Home";
import { colors } from "./src/Theme/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Graphik-Black": require("./assets/fonts/GraphikBlack.otf"),
    "Graphik-Bold": require("./assets/fonts/GraphikBold.otf"),
    "Graphik-Medium": require("./assets/fonts/GraphikMedium.otf"),
    "Graphik-Light": require("./assets/fonts/GraphikLight.otf"),
  });

  if (!loaded) {
    return <Text>Font is Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightSkyBlue,
    alignItems: "center",
    justifyContent: "center",
  },
});
