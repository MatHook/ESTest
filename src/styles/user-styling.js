import styled from "styled-components";

export const UserItemStyled = styled.div`
  display: block;
  position: relative;
  min-width: 180px;
  margin: 20px;
  padding: 20px;
  background-color: #282c34;
  color: #fff;
  cursor: pointer;
  transition: all ease 0.25s;
  &::hover {
    background-color: #282c34;
    transform: translateY(-7%);
  }
  &::focus,
  &::active,
  &.active {
    background-color: #282c34;
    transform: translateY(-3%);
  }
  & > div::first-of-type {
    font-weight: 700;
    font-size: 1.1rem;
  }
`;
