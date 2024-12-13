import ProductCard from "@/components/ProductCard";
import useLogin from "@/hooks/useLogin";
import useProducts from "@/hooks/useProduct";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductScreen: React.FC = () => {
  const { products, isLoading, error } = useProducts();

  const errorTitle = "Ops! Algo a pasado al traer tus productos ...";
  const Loading = "Cargando ...";
  if (error) {
    <SafeAreaView>
      <Text>{errorTitle}</Text>
    </SafeAreaView>;
  }
  if (isLoading) {
    <SafeAreaView>
      <Text>{Loading}</Text>
    </SafeAreaView>;
  }

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
      />
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
