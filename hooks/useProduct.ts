import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  // ... otras propiedades del producto si las hay
}

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

const useProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError("Error al cargar los productos");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error };
};

export default useProducts;
