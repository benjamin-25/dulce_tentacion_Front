import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FF91C1', // Pink from logo
            dark: '#FF4081',
            contrastText: '#fff',
        },
        secondary: {
            main: '#79C8E7', // Blue from logo
            contrastText: '#fff',
        },
        warning: {
            main: '#FFF23E', // Yellow from logo
        },
        background: {
            default: '#fce4ec',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: "'Outfit', 'Inter', sans-serif",
        h1: {
            fontWeight: 800,
            color: '#FF4081',
        },
        h2: {
            fontWeight: 700,
            color: '#FF4081',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 12,
        },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                    padding: '10px 24px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(255, 64, 129, 0.2)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 24,
                    boxShadow: '0 8px 32px 0 rgba(255, 145, 193, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 16,
                    },
                },
            },
        },
    },
});
