import React from "react";
import { View, Text } from "react-native";
import { useSegments } from "expo-router";
import useProductDetails from "@/hooks/useProductsDetails";
import ProductDetails from "@/components/ProductsDetails";

const ProductDetailsScreen = () => {
  const segments = useSegments();
  const id = Number(segments[1]);
  const { product, isLoading, error } = useProductDetails(id);

  if (isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View>
      {product ? (
        <ProductDetails
          product={{
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
          }}
        />
      ) : (
        <Text>Producto no encontrado</Text>
      )}
    </View>
  );
};

export default ProductDetailsScreen;
