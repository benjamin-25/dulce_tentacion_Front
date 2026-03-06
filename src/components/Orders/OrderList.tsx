import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    Chip,
    IconButton,
    Button,
    Avatar
} from '@mui/material';
import { Add, ShoppingBag, MoreVert } from '@mui/icons-material';
import './Orders.css';

const mockOrders = [
    { id: '101', customer: 'Benjamin P.', total: '$25.00', status: 'Pendiente', date: 'hoy' },
    { id: '102', customer: 'Maria G.', total: '$18.50', status: 'Completado', date: 'ayer' },
    { id: '103', customer: 'Carlos R.', total: '$42.00', status: 'En Proceso', date: 'hace 2h' },
];

const OrderList = () => {
    return (
        <Box className="orders-container">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" className="gradient-text">
                    Pedidos Recientes
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    className="primary-button"
                >
                    Nuevo Pedido
                </Button>
            </Box>

            <Grid container spacing={3}>
                {mockOrders.map((order) => (
                    <Grid size={{ xs: 12, md: 4 }} key={order.id}>
                        <Card className="glass-card order-card">
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                                        <ShoppingBag />
                                    </Avatar>
                                    <IconButton size="small">
                                        <MoreVert />
                                    </IconButton>
                                </Box>

                                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                    {order.customer}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                    Pedido #{order.id} • {order.date}
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
                                        {order.total}
                                    </Typography>
                                    <Chip
                                        label={order.status}
                                        size="small"
                                        sx={{
                                            bgcolor: order.status === 'Completado' ? '#e8f5e9' : '#fff9c4',
                                            color: order.status === 'Completado' ? '#2e7d32' : '#fbc02d',
                                            fontWeight: 600
                                        }}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OrderList;
