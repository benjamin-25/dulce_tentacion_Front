import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";
import { useAuth } from "../Hooks/useAuth/useAuth";

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
