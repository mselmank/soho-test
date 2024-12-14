import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.category}>Categoría: {product.category}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "gray",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    color: "gray",
  },
  backButton: {
    // Estilos para el botón "Volver"
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: {
    // Estilos para el texto del botón "Volver"
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProductDetails;
