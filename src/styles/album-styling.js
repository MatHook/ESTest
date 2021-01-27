import styled from "styled-components";

export const AlbumItemStyled = styled.div`
  display: flex;
  flex: 0 1 10%;
  min-width: 250px;
  height: 250px;
  overflow: hidden;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  background-color: #fff49e;
  background-image: url("${(props) => props.bg}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: solid 2px #ffe96f;
  border-top: none;
  cursor: pointer;
  transition: all ease 0.25s;
  opacity: 0.6;
  &:hover {
    background-color: #d7d7d7;
    opacity: 1;
  }
  &::focus,
  &::active,
  &.active {
    background-color: #92ff8f;
    opacity: 1;
  }
  & > div:first-of-type {
    font-weight: 700;
    font-size: 1.1rem;
  }
`;
