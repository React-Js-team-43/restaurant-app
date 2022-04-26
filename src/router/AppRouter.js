import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import HomePage from "../Components/pages/HomePage";
import AboutPage from "../Components/pages/AboutPage";
import ProductsPage from "../Components/pages/ProductsPage";
import ContactPage from "../Components/pages/ContactPage";
import Footer from "../Components/Footer";
// import ServicesPage from "../Components/pages/ServicesPage";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
