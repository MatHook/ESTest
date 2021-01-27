import { useEffect, useRef } from "react";
import { SliderStyled, SliderWrapper } from "../styles/slider-styling";

const Slider = (props) => {
  const slider = useRef(null);

  useEffect(() => {
    const currentSlider = slider.current;
    currentSlider.style.transform = "translateX(0)";
    currentSlider.onpointerdown = (event) => {
      let prevPosSlider = parseInt(
        currentSlider.style.transform.match(/-*\d+/g)
      );
      let prevPosCursos = event.pageX;
      let movePosCursor, lengthWay, posSlides, widthSlider, endPosSlider;

      currentSlider.onpointermove = (event) => {
        movePosCursor = event.pageX;
        lengthWay = prevPosCursos - movePosCursor;
        posSlides = prevPosSlider - lengthWay;
        currentSlider.style.transform = `translateX(${posSlides}px)`;
        widthSlider = currentSlider.offsetWidth;
        endPosSlider = widthSlider - currentSlider.offsetParent.clientWidth;
      };

      currentSlider.onpointerup = () => {
        let smoothWay = +(prevPosCursos - movePosCursor) * 3;
        let smooth = 450;
        let smoothPosSlide = posSlides - smoothWay;
        if (posSlides - smoothWay > 0) smoothPosSlide = 0;
        if (-posSlides + smoothWay > endPosSlider)
          smoothPosSlide = -endPosSlider;
        currentSlider.style.transform = `translateX(${smoothPosSlide}px)`;
        currentSlider.style.transition = `all ease-out ${smooth}ms`;
        setTimeout(() => {
          currentSlider.style.transition = ``;
        }, smooth);
        currentSlider.onpointermove = null;
        currentSlider.onpointerup = null;
      };
      currentSlider.ondragstart = () => false;
    };
  }, []);

  return (
    <SliderWrapper>
      <SliderStyled ref={slider}>{props.children}</SliderStyled>
    </SliderWrapper>
  );
};

export default Slider;
