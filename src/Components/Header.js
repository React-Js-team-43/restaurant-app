import { NavLink } from "react-router-dom"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import ProductsPage from "./ProductsPage"

const Header = () => (
  <header>
    <h1>Zuri's Shop </h1>
    <nav>
      <NavLink
        to="/"
        element={<HomePage />}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        element={<AboutPage />}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        About Us
      </NavLink>
      <NavLink
        to="/products"
        element={<ProductsPage />}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Products
      </NavLink>

      <NavLink
        to="/contact"
        element={<ContactPage />}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Contact
      </NavLink>
    </nav>
  </header>
)

export default Header
