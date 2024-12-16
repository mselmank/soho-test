import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <SafeAreaView style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <SafeAreaView style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity style={styles.button}>
          <Link
            href={{
              pathname: "/(product)/[id]",
              params: { id: `${product.id}` },
            }}
          >
            <Text style={styles.buttonText}>Ver detalles</Text>
          </Link>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  info: {
    // alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProductCard;
