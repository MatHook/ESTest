import styled from "styled-components";

export const AppStyled = styled.div`
  max-width: 100%;
  position: relative;
  overflow: hidden;
  text-align: center;
  background-color: #282c34;
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  color: #fff;
  font-size: calc(10px + 2vmin);
  button {
    background: none;
    border: none;
    outline: none;
    color: #fff;
    font-size: 100px;
    cursor: pointer;
    animation: pulse 3s infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.6);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0, 7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
      transform: scale(0.6);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

export const Main = styled.main`
  background-color: #282c34;
  padding: 80px 40px;
  max-width: 1200px;
  margin: auto;
  @media screen and (max-width: 756px) {
    padding: 80px 0;
  }
`;

export const Section = styled.section`
  width: 100px;
  margin-bottom: 40px;
`;
