import AuthForm from "@/components/AuthForm";
import useLogin from "@/hooks/useLogin";
import useRegister from "@/hooks/useRegister";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

const LoginScreen: React.FC = () => {
  const { login, isLoading, error, token } = useLogin();
  const errorTitle = "Username o Password son incorrectos";

  // const { register, isLoadingRegister, errorRegister } = useRegister();

  if (error) {
    <SafeAreaView>
      <Text>{errorTitle}</Text>
    </SafeAreaView>;
  }
  if (isLoading) {
    <View>
      <Text>Cargando ...</Text>
    </View>;
  }
  const getValueFor = async (key: string) => {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      alert("No values stored under that key.");
    }
  };
  const handleLogin = async (values: {
    username: string;
    password: string;
  }) => {
    await login(values.username, values.password);
  };

  const handleRegister = async (values: {
    username: string;
    password: string;
  }) => {
    await login(values.username, values.password);
  };
  useEffect(() => {
    getValueFor("token");
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/carrito-super.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.container}>
        <AuthForm onSubmit={handleLogin} onRegister={handleRegister} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 50,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: 180,
    height: 180,
  },
});

export default LoginScreen;
