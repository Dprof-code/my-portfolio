import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import TechStacks from "./components/TechStacks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Counters from "./components/Counters";
import ParticlesBackground from "./components/ParticlesBackground";

//Framer motion

// // React
// import { motion } from "framer-motion";

// // React Server Components
// import * as motion from "framer-motion/client";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <ParticlesBackground />
      <main>
        <Home />
        <AboutMe />
        <Counters />
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
