import "./Experience.css";

const experiences = [
  { title: "React", image: "path/to/react-logo.png" },
  { title: "Node.js", image: "path/to/nodejs-logo.png" },
  { title: "JavaScript", image: "path/to/javascript-logo.png" },
  { title: "CSS", image: "path/to/css-logo.png" },
  { title: "HTML", image: "path/to/html-logo.png" },
  { title: "Python", image: "path/to/python-logo.png" },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience-header">Experience</h2>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div className="experience-item" key={index}>
            <img
              src={experience.image}
              alt={experience.title}
              className="experience-image"
            />
            <h3 className="experience-title">{experience.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
