import React from "react";
import { GlobalStyle } from "./global-stayles";
import { FooterContainer } from "./containers/footer";
import { HeaderContainer } from "./containers/header";
import { MainContainer } from "./containers/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </>
  );
}

export default App;
