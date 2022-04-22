import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../Components/Header"
import HomePage from "../Components/HomePage"
import AboutPage from "../Components/AboutPage"
import ProductsPage from "../Components/ProductsPage"
import ContactPage from "../Components/ContactPage"

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
