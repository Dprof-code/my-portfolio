import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import TechStacks from "./components/TechStacks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
        <AboutMe />
        <Portfolio />
        <Services />
        <TechStacks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
