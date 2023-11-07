import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const productId = new URLSearchParams(location.search).get('productId');
    const [productDetails, setProductDetails] = useState(null);

    // Simula la obtención de detalles del producto basado en el productId.
    // Puedes realizar una solicitud a tu API para obtener los detalles reales del producto.
    useEffect(() => {

        const simulatedProductDetails = {
            id: productId,
            name: 'Producto de ejemplo',
            price: 50.99,
            description: 'Descripción del producto de ejemplo.',
            // Agrega más propiedades según los detalles de tu producto
        };

        setProductDetails(simulatedProductDetails);
    }, [productId]);

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        // Agrega más campos del formulario según tus necesidades
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para generar la orden de compra con formData y productId
        console.log('Orden de compra generada:', {
            ...formData,
            productId: productId,
        });
        // Puedes enviar los datos del formulario a tu backend para procesar la orden
    };

    return (
        <div className="checkout-form">
            <h2>Checkout</h2>
            {productDetails && (
                <div className="product-details">
                    <h3>Detalles del Producto:</h3>
                    <p>Nombre: {productDetails.name}</p>
                    <p>Precio: ${productDetails.price}</p>
                    {/* Mostrar más detalles del producto según tus necesidades */}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Dirección:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                </div>
                {/* Agrega más campos del formulario según tus necesidades */}
                <button type="submit">Generar Orden de Compra</button>
            </form>
        </div>
    );
};

export default Checkout;
