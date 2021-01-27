import styled from "styled-components";

export const ThumbnailItemStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-image: url("${(props) => props.bg}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  flex: 0 1 20%;
  min-width: 150px;
  margin-right: 15px;
  cursor: pointer;
  transition: all ease 0.25s;
  opacity: 0.6;
  &:hover,
  &.active {
    transform: scale(0.95);
    box-shadow: 0 0 6px #ff8500;
    opacity: 1;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
