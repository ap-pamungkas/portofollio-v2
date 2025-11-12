import React from "react";
import Home from "./pages/Home.jsx";
import Header from "./components/Headers/Header.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <>
      <Header />

      <Home />

      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
