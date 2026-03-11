import Login from "./components/Login/Login";
import OrderList from "./components/Orders/OrderList";
import OrderForm from "./components/Orders/OrderForm";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { useAuth } from "./Hooks/useAuth/useAuth";
import MenuBar from "./components/Layouts/MenuBar/MenuBar.";

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {isAuthenticated && <MenuBar />}
      <Routes>
        <Route index element={<Login />} />

        <Route
          path="/nuevo_pedido"
          element={
            <ProtectedRoute>
              <OrderForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <OrderList />
            </ProtectedRoute>
          }
        />

        {/* Ruta catch-all para rutas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
