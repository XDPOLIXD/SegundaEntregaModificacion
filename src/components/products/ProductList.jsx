import React, { useState, useEffect } from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";
import ProductDetail from "./ProductDetail";
import productsData from "../../mocks/products.json";

const ProductList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Parsea el JSON si productsData es un string JSON
        const products = Array.isArray(productsData)
            ? productsData
            : JSON.parse(productsData);

        // Asegura que los elementos tengan claves únicas
        const uniqueProducts = products.map((product, index) => ({
            id: `${product.id}_${index}`,
            image: product.image,
            title: product.title,
            price: product.price,
            category: product.category,
            itHasDues: product.itHasDues,
            isAnOffer: product.isAnOffer,
            stock: product.stock
        }));
        setData(uniqueProducts);
        setLoading(false);
    }, []);

    if (loading) return <CircularProgress />;

    return (
        <div className="container">
            <Typography variant="h2" style={{ color: "#ffffff" }}>
                Productos
            </Typography>
            <Grid container spacing={3}>
                {data.map((product) => (
                    <ProductDetail key={product.id} product={product} />
                ))}
            </Grid>
        </div>
    );
};

export default ProductList;
