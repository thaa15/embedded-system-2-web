import "./App.css";
import React from "react";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="page-container">
          <div className="content-wrap">
            <Navbar />
            <GlobalStyles />
            <Routes>
              <Route
                path="/"
                element={<Home />}
                exact
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
