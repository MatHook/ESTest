import styled from "styled-components";

export const PhotoItemStyled = styled.div`
  display: inline-block;
  background-image: url("${props => props.bg}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  max-width: 1200px;
  min-width: 280px;
  height: 600px;
  max-height: 80vh;
  margin: 40px auto;
  cursor: pointer;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 60vh;
  }
  span {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px;
    font-size: 24px;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0.4;
    transition: all ease 0.25s;
  }
  &:hover span {
    opacity: 1;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
