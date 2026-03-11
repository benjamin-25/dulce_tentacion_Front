import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth/useAuth";

export default function MenuBar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className="glass-card"
        sx={{ borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            className="gradient-text"
            sx={{ flexGrow: 1 }}
          >
            Dulce Tentación Admin
          </Typography>
          <Button color="inherit" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate("/nuevo_pedido")}>
            Nuevo
          </Button>
          <Button
            color="primary"
            variant="outlined"
            sx={{ ml: 2 }}
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Salir
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
