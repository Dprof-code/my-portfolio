import "./Home.css";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="text-contents">
        <h1 className="home-title">
          <span className="greeting">Hi,</span>
          <br />
          <span className="intro-text">I&apos;m a</span> <br />
          <ReactTyped
            backSpeed={50}
            loop={true}
            className="fancy-text"
            onBegin={function noRefCheck() {}}
            onComplete={function noRefCheck() {}}
            onDestroy={function noRefCheck() {}}
            onLastStringBackspaced={function noRefCheck() {}}
            onReset={function noRefCheck() {}}
            onStart={function noRefCheck() {}}
            onStop={function noRefCheck() {}}
            onStringTyped={function noRefCheck() {}}
            onTypingPaused={function noRefCheck() {}}
            onTypingResumed={function noRefCheck() {}}
            strings={[
              '<span className="fancy-text">Fullstack</span><br /><span className="fancy-text">Software</span><br /><span className="fancy-text">Developer<span className="dot">.</span></span>',

              '<span className="fancy-text">Frontend</span><br /><span className="fancy-text">Web</span><br /><span className="fancy-text">Developer<span className="dot">.</span></span>',

              '<span className="fancy-text">Backend</span><br /><span className="fancy-text">Web</span><br /><span className="fancy-text">Developer<span className="dot">.</span></span>',

              '<span className="fancy-text">Wordpress</span><br /><span className="fancy-text">Developer<span className="dot">.</span></span>',

              '<span className="fancy-text">Shopify</span><br /><span className="fancy-text">Expert<span className="dot">.</span></span>',
            ]}
            typeSpeed={50}
            typedRef={function noRefCheck() {}}
          />
          {/* <span className="fancy-text">Fullstack</span>
          <br /> <span className="fancy-text">Software</span>
          <br />{" "}
          <span className="fancy-text">
            Developer<span className="dot">.</span>
          </span> */}
        </h1>
        <div className="catch-texts">
          <p className="headline">Your Digital Transformation Partner:</p>
          <p className="tagline">
            Providing Optimized Business Solutions,
            <br /> One Line of {"<Code/>"} at a Time...
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
