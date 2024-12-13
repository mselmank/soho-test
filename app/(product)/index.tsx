import AuthForm from "@/components/AuthForm";
import useLogin from "@/hooks/useLogin";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductScreen: React.FC = () => {
  const { login, isLoading, error } = useLogin();
  const errorTitle = "Username o Password son incorrectos";

  if (error) {
    <SafeAreaView>
      <Text>{errorTitle}</Text>
    </SafeAreaView>;
  }
  if (isLoading) {
    <View>
      <Text>Cargando...</Text>
    </View>;
  }

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
      <View style={styles.container}></View>
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

export default ProductScreen;
