import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ErrorOutline } from "@mui/icons-material";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <ErrorOutline
          sx={{
            fontSize: 100,
            color: "error.main",
            mb: 2,
          }}
        />
        <Typography variant="h1" sx={{ fontSize: "4rem", fontWeight: "bold" }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ mb: 2, color: "textSecondary" }}>
          Página No Encontrada
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "textSecondary" }}>
          Lo sentimos, la página que buscas no existe o ha sido eliminada.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => navigate("/dashboard")}
          >
            Ir al Dashboard
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/")}
          >
            Ir al Inicio
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
