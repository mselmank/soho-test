import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface BackToProductsButtonProps {
  color?: string;
}

export const BackToProductsButton: React.FC<BackToProductsButtonProps> = ({
  color = "#007AFF",
}) => {
  return (
    <View style={styles.container}>
      <Link href={"./(products)"} style={[styles.link, { color }]}>
        <Text>← Volver a Productos</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  link: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
