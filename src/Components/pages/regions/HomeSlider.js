import React, { useState } from "react";
import slide1 from "../../../images/slides/slide1.jpg";
import slide2 from "../../../images/slides/slide2.jpg";
import slide3 from "../../../images/slides/slide3.jpg";
import slide4 from "../../../images/slides/slide4.jpg";

export const HomeSlider = () => {
  const slides = {
    1: slide1,
    2: slide2,
    3: slide3,
    4: slide4,
  };
  const [currentSlide, setCurrentSlide] = useState(1);

  const slider = (direction) => (e) => {
    e.preventDefault();
    setCurrentSlide((prev) =>
      prev < 4 && direction === "right"
        ? prev + 1
        : prev > 1 && direction === "left"
        ? prev - 1
        : direction === "left"
        ? 4
        : 1
    );
  };
  return (
    <div className="homeslider">
      <img src={slides[currentSlide]} alt="images" />
      <div className="homeslidernav">
        <input value="Previous" type="submit" onClick={slider("left")} />
        <input value="Next" type="submit" onClick={slider("right")} />
      </div>
    </div>
  );
};
