import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="text-contents">
        <h1 className="home-title">
          <span className="greeting">Hi,</span>
          <br />
          <span className="intro-text">I&apos;m a</span> <br />
          <span className="fancy-text">Fullstack</span>
          <br /> <span className="fancy-text">Software</span>
          <br /> <span className="fancy-text">Developer.</span>
        </h1>
        <div className="catch-texts">
          <p className="headline">Your Digital Transformation Partner:</p>
          <p className="tagline">
            Providing Optimized Business Solutions,
            <br /> One Line of Code at a Time...
          </p>
        </div>
        <a href="#portfolio" className="home-button">
          Previous Projects
        </a>
      </div>
      <div className="hero-img-container">
        <img className="hero-img" src="/hero-1-nobg.png" alt="Hero Image" />
      </div>
    </section>
  );
};

export default Home;
