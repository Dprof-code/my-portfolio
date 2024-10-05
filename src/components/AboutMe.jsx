import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-me-left">
        <div className="image-frame">
          <img
            src="/Adedamola_Olawale_Abraham.jpg"
            alt="Adedamola Olawale"
            className="about-me-image"
          />
        </div>
      </div>
      <div className="about-me-right">
        <h2 className="about-me-header">About Me</h2>
        <p className="about-me-paragraph">
          My name is Abraham Adedamola Olawale. I am a Fullstack Software
          Developer with more than 5 years of experience in building web
          applications using modern technologies. I am passionate about coding
          and always eager to learn new things.
        </p>
        <div className="about-me-buttons">
          <a href="#contact" className="about-me-button hire-me">
            Hire Me
          </a>
          <a
            href="/resume/Adedamola Olawale - FullStack Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about-me-button resume"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
