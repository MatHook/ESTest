import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  position: relative;
`;

export const SliderStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  height: 100%;
  position: relative;
  cursor: grab;
  touch-action: none;
  &::active {
    cursor: grabbing;
  }
`;
