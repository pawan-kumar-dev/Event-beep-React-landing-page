import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Sections/Header";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Sections/Footer";
import Loader from "react-loader-spinner";
function App() {
  const [state, setState] = useState(false);
  setTimeout(() => {
    setState(true);
  }, 4000);
  return state ? (
    <div className="app">
      <Header />
      <MainSection />
      <Footer />
    </div>
  ) : (
    <div className="loading">
      <Loader
        type="Circles"
        color="#00BFFF"
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default App;
