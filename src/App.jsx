import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import "./css/style.css"
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./common/Header";
import Footer from "./common/Footer";

function App() {


  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/shop" element={ <ShopPage /> } />
          <Route path="/cart" element={ <CartPage /> } />
          <Route path="/*" element={ <NotFoundPage /> } />

        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App
