import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    IconButton,
    Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCartContext();

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div className="container">
            <Paper elevation={3}>
                <Typography variant="h6" component="div" align="center" sx={{ p: 2 }}>
                    Cart
                </Typography>
                {cart.items.length === 0 ? (
                    <Typography variant="body2" align="center" sx={{ p: 2 }}>
                        Carrito vacío
                    </Typography>
                ) : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Imagen</TableCell>
                                    <TableCell>Producto</TableCell>
                                    <TableCell>Precio</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.items.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <img
                                                style={{ width: "10%", height: "10%" }}
                                                src={item.image}
                                                alt={item.title}
                                            />
                                        </TableCell>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>${item.price}</TableCell>
                                        <TableCell>${item.price * item.quantity}</TableCell>
                                        <TableCell>
                                            <IconButton
                                                color="secondary"
                                                aria-label="Eliminar"
                                                onClick={() => handleRemoveFromCart(item.id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell colSpan={4}>Total:</TableCell>
                                    <TableCell>${cart.total.toFixed(2)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={5} align="right">
                                        <Button variant="outlined" color="secondary" onClick={clearCart}>
                                            Vaciar Carrito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={5} align="right">
                                        <Link to="/checkout" style={{ textDecoration: 'none' }}>
                                            <Button variant="contained" color="primary" style={{ marginLeft: '10px' }}>
                                                Proceder al Checkout
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Paper>
        </div>
    );
};

export default Cart;
