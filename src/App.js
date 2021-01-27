import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { AppStyled, AppLogo, Header, Main } from "./styles/app-styling";
import Footer from "./components/Footer";
import Users from "./components/Users/Users";
import Gallery from "./components/Gallery";
import PopUp from "./components/PopUp";

function App() {
  const pointRef = useRef(null);

  const scrollFromMain = () => {
    pointRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <AppStyled>
      <Header>
        <AppLogo src={logo} alt="appLogo" />
        <h1>Elfsight practice task</h1>
        <button onClick={scrollFromMain}>↓</button>
      </Header>
      <Main ref={pointRef}>
        <Users />
        <Gallery />
      </Main>
      <PopUp />
      <Footer />
    </AppStyled>
  );
}

export default App;
