import "./App.css";
import React, { useState } from "react";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./Pages";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="page-container">
          <div className="content-wrap">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Home />} exact />
            </Routes>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
