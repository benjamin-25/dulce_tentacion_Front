import React from 'react';
import {
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Container,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Person, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import './Login.css';
import logo from '../../assets/Logo dulce tentacion_Impresion.png';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <Box className="login-page">
            <Container maxWidth="sm">
                <Card className="glass-card login-card">
                    <CardContent sx={{ p: 4 }}>
                        <Box sx={{ textAlign: 'center', mb: 4 }}>
                            <img src={logo} alt="Dulce Tentación Logo" className="login-logo" />
                            <Typography variant="h4" className="gradient-text" sx={{ mt: 2 }}>
                                ¡Bienvenido!
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Inicia sesión para gestionar tus ventas
                            </Typography>
                        </Box>

                        <form>
                            <TextField
                                fullWidth
                                label="Usuario"
                                variant="outlined"
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Contraseña"
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock color="primary" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                className="primary-button"
                                sx={{ mt: 4, py: 1.5 }}
                            >
                                Ingresar
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default Login;
