import './style.css'
import Categories from './components/categories/Categories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/products/ProductList'
import CategoriesProductList from './components/categories/CategoriesProductList'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout' // Importa el componente Checkout
import CartProvider from './context/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Categories />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} /> {/* Agrega la ruta para el formulario de checkout */}
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
