import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

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
      </main>
    </>
  );
}

export default App;
