import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <h1 className="home-title">
        <span className="intro-text">I&apos;m a</span> <br />
        <span className="fancy-text">Fullstack</span>
        <br /> <span className="fancy-text">Software</span>
        <br /> <span className="fancy-text">Developer.</span>
      </h1>
      <a href="#portfolio" className="home-button">
        Previous Projects
      </a>
    </section>
  );
};

export default Home;
