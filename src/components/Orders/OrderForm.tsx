import {
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Grid,
    MenuItem,
    InputAdornment
} from '@mui/material';
import { Save, Person, PriceCheck, NoteAlt } from '@mui/icons-material';
import './Orders.css';

const OrderForm = () => {
    return (
        <Box className="orders-container">
            <Typography variant="h4" className="gradient-text" sx={{ mb: 4 }}>
                Crear Nuevo Pedido
            </Typography>

            <Card className="glass-card">
                <CardContent sx={{ p: 4 }}>
                    <form>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Cliente"
                                    placeholder="Nombre del cliente"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Person color="primary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Estado del Pedido"
                                    defaultValue="Pendiente"
                                >
                                    <MenuItem value="Pendiente">Pendiente</MenuItem>
                                    <MenuItem value="En Proceso">En Proceso</MenuItem>
                                    <MenuItem value="Completado">Completado</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Detalles del Pedido"
                                    multiline
                                    rows={4}
                                    placeholder="Ej: 2 Arroz con leche con toppings de chocolate..."
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                                                <NoteAlt color="primary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Total"
                                    type="number"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PriceCheck color="primary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                <Button
                                    variant="outlined"
                                    sx={{ mr: 2, borderRadius: 50 }}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant="contained"
                                    startIcon={<Save />}
                                    className="primary-button"
                                >
                                    Guardar Pedido
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default OrderForm;
