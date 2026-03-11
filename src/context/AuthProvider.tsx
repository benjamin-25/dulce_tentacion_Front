import { useState, type ReactElement } from "react";
import type { User } from "../models/user.model";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Recuperar usuario del localStorage al cargar
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (
    username: string,
    password: string,
  ): Promise<boolean> => {
    try {
      // TODO: Reemplaza esto con tu API real
      // Ejemplo de validación local (cambiar por backend)
      if (username.trim() && password.trim()) {
        const newUser: User = {
          id: Date.now().toString(),
          username,
        };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error en login:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
