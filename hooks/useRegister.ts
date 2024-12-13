import { useState } from "react";
import { fetch } from "expo/fetch";
import SessionStorage from "react-native-session-storage";

interface RegisterData {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

interface RegisterResponse extends RegisterData {
  token: number;
}

interface UseRegisterResult {
  register: (userData: RegisterData) => Promise<void>;
  isLoadingRegister: boolean;
  errorRegister: string | null;
  user: RegisterResponse | null;
}

const useRegister = (): UseRegisterResult => {
  const [isLoadingRegister, setIsLoadingRegister] = useState(false);
  const [errorRegister, setErrorRegister] = useState<string | null>(null);
  const [user, setUser] = useState<RegisterResponse | null>(null);

  const register = async (userData: RegisterData) => {
    setIsLoadingRegister(true);
    setErrorRegister(null);

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(
          `Error en la solicitud: ${response.status} ${response.statusText}`
        );
      }

      const data = (await response.json()) as RegisterResponse;
      setUser(data);
      if (data.token) {
        SessionStorage.setItem("@userToken", data.token);
      }
    } catch (error: unknown) {
      console.error("Error al registrar usuario:", error);
      if (error instanceof Error) {
        setErrorRegister(error.message);
      } else {
        setErrorRegister("An unexpected error occurred");
      }
    } finally {
      setIsLoadingRegister(false);
    }
  };

  return { register, isLoadingRegister, errorRegister, user };
};

export default useRegister;
