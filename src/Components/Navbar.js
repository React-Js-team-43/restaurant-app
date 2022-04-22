import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const restaurantName = "Restaurant 43";

  const collapsedButton = {
    appearance: "linear",
    button: (
      <div>
        <div
          style={{
            height: "5px",
            marginTop: "5px",
            backgroundColor: "grey",
            transitionDuration: "1s",
          }}
        ></div>
        <div
          style={{
            height: "5px",
            marginTop: "5px",
            backgroundColor: "grey",
          }}
        ></div>
        <div
          style={{
            height: "5px",
            marginTop: "5px",
            backgroundColor: "grey",
            marginBottom: "5px",
            transitionDuration: "1s",
          }}
        ></div>
      </div>
    ),
  };
  const openedButton = {
    appearance: "cross",
    button: (
      <div>
        <div
          style={{
            height: "5px",
            marginTop: "5px",
            backgroundColor: "grey",
            transform: "rotate(45deg)",
            transitionDuration: "1s",
          }}
        ></div>
        <div
          style={{
            height: "5px",
            marginTop: "5px",
            display: "none",
          }}
        ></div>
        <div
          style={{
            height: "5px",
            marginTop: "5px",
            backgroundColor: "grey",
            transform: "rotate(-45deg)",
            transitionDuration: "1s",
          }}
        ></div>
      </div>
    ),
  };
  const [menuButton, setMenuButton] = useState(collapsedButton);

  const controlMobileNavbar = (e) => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
    setMenuButton((prev) =>
      prev.appearance === "linear" ? openedButton : collapsedButton
    );
  };

  const collapseMobileNavbar = (e) => {
    e.target.parentNode.parentNode.parentNode.classList.add("hidden");
    setMenuButton(collapsedButton);
  };

  return (
    <>
      <nav id="lg-menu">
        <ul>
          <li>
            <NavLink
              to="about"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#bd8a16" : "",
                };
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#bd8a16" : "",
                };
              }}
            >
              Contact
            </NavLink>
          </li>
          <li className="li-logo">
            <NavLink to="/" className="logo">
              {restaurantName}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#bd8a16" : "",
                };
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="services"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#bd8a16" : "",
                };
              }}
            >
              Services
            </NavLink>
          </li>
        </ul>
        {/*mobile navigator*/}
        <div className="mobile-menu-group">
          <Link to="/" className="logo">
            {restaurantName}
          </Link>
          <span
            role="button"
            onClick={controlMobileNavbar}
            className="mobile-menu-button"
          >
            {menuButton.button}
          </span>
        </div>
      </nav>

      {/*mobile navigator*/}
      <nav id="mobileMenu" className="hidden">
        <ul>
          <li>
            <NavLink
              to="products"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#bd8a16" : "",
                };
              }}
              onClick={collapseMobileNavbar}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="services"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#bd8a16" : "",
                };
              }}
              onClick={collapseMobileNavbar}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#bd8a16" : "",
                };
              }}
              onClick={collapseMobileNavbar}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#bd8a16" : "",
                };
              }}
              onClick={collapseMobileNavbar}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
