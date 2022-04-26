import React from "react";
import { HomeSlider } from "./regions/HomeSlider";

function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="home-header"
        style={{ position: "absolute", zIndex: "99" }}
      >
        <h1>Welcome</h1>
        <h2>Restaurant 43</h2>
        <button>Book a Table</button>
      </div>
      <HomeSlider />
      <div
        style={{
          padding: "30px",
          textAlign: "center",
          maxWidth: "480px",
          margin: "auto",
        }}
      >
        <h3>Dine with style and classic</h3>
        <p style={{ marginTop: "20px" }}>
          Welcome to Restaurant 43, where we offer a one of a kind fine dining
          experience with the unique taste of Southwestern Cuisine. Whether you
          are here for a business lunch or dinner, celebrating a special
          occasion, or looking for a romantic setting for a date, our menu
          offers something for everyone.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
