import AuthForm from "@/components/AuthForm";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen: React.FC = () => {
  const handleLogin = (values: { username: string; password: string }) => {
    console.log("Username:", values.username);
    console.log("Password:", values.password);
    // Aquí iría la lógica para iniciar sesión
  };

  const handleRegister = (values: { username: string; password: string }) => {
    console.log("Username:", values.username);
    console.log("Password:", values.password);
    // Aquí iría la lógica para registrarse
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

export default HomeScreen;
