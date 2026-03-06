import { useState } from "react";
import Login from "./components/Login/Login";
import OrderList from "./components/Orders/OrderList";
import OrderForm from "./components/Orders/OrderForm";
import { Box, Button, AppBar, Toolbar, Typography } from "@mui/material";

function App() {
  const [view, setView] = useState<"login" | "list" | "form">("login");

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {view !== "login" && (
        <AppBar position="static" color="transparent" elevation={0} className="glass-card" sx={{ borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0 }}>
          <Toolbar>
            <Typography variant="h6" className="gradient-text" sx={{ flexGrow: 1 }}>
              Dulce Tentación Admin
            </Typography>
            <Button color="inherit" onClick={() => setView("list")}>Lista</Button>
            <Button color="inherit" onClick={() => setView("form")}>Nuevo</Button>
            <Button color="primary" variant="outlined" sx={{ ml: 2 }} onClick={() => setView("login")}>Salir</Button>
          </Toolbar>
        </AppBar>
      )}

      <Box sx={{ py: view === "login" ? 0 : 4 }}>
        {view === "login" && (
          <Box onClick={() => setView("list")} sx={{ cursor: "pointer" }}>
            <Login />
          </Box>
        )}
        {view === "list" && <OrderList />}
        {view === "form" && <OrderForm />}
      </Box>
    </Box>
  );
}

export default App;
