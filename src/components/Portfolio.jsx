import "./Portfolio.css";
import { useState } from "react";

const projects = [
  {
    title: "Project One",
    description: "Description of project one.",
    technologies: ["React", "Node.js", "CSS"],
    codeLink: "#",
    liveLink: "#",
    image: "/projects/project-1.png",
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    technologies: ["Angular", "Express", "Sass"],
    codeLink: "#",
    liveLink: "#",
    image: "/projects/project-2.png",
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-header">Portfolio</h2>
      {projects
        .slice(0, showAll ? projects.length : 2)
        .map((project, index) => (
          <div
            className={`project ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span className="tech-icon" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="view-url"
              >
                Live Preview
              </a>
              {/* <div className="project-buttons">
              <button className="project-button code-button">Code</button>
              <button className="project-button live-button">
                Live Preview
              </button>
            </div> */}
            </div>
            <div className="project-image-frame">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
          </div>
        ))}
      <button className="view-all-button" onClick={handleToggle}>
        {showAll ? "Show Less" : "View All"}
      </button>
    </section>
  );
};

export default Portfolio;
