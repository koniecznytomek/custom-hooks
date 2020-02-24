import { useState } from "react";

const useSlider = n => {
  const [slide, setSlide] = useState(0);

  const sliderLength = n - 1;

  const nextSlide = () => {
    slide < sliderLength ? setSlide(slide + 1) : setSlide(0);
  };
  const prevSlide = () => {
    slide > 0 ? setSlide(slide - 1) : setSlide(sliderLength);
  };

  return {
    slide,
    nextSlide,
    prevSlide
  };
};

export default useSlider;
