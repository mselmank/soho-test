import { useState } from "react";
import { fetch } from "expo/fetch";

interface LoginResponse {
  token: string;
}

interface UseLoginResult {
  login: (username: string, password: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  token: string | null;
}

const useLogin = (): UseLoginResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Error en la solicitud: ${response.status} ${response.statusText}`
        );
      }

      const data = (await response.json()) as LoginResponse;
      setToken(data.token);
    } catch (error: unknown) {
      console.error("Error al iniciar sesión:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, token };
};

export default useLogin;
