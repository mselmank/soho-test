import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import SessionStorage from "react-native-session-storage";
import { SafeAreaView, Text, View } from "react-native";
import HomeScreen from "./(login)";
import LoginScreen from "./(login)";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getToken = async () => {
    const token = await SessionStorage.getItem("@userToken");
    if (token) {
      console.log("Token encontrado:", token);
    } else {
      console.log("Token no encontrado");
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    const checkToken = async () => {
      const token = await SessionStorage.getItem("@userToken");
      setIsLoggedIn(!!token);
    };
    checkToken();
  }, []);

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaView>
        <Stack.Screen
          name="(login)"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}
