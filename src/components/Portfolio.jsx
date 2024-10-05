import "./Portfolio.css";
import { useState } from "react";
import Reveal from "./Reveal"; // Import the Reveal component

const projects = [
  {
    title: "Hybrid Meme Crypto Website",
    description: "A fun and engaging website built for a meme-based cryptocurrency project, featuring real-time price tracking and community-driven content.",
    technologies: ["React", "Node.js", "CSS"],
    codeLink: "#",
    liveLink: "#",
    image: "/projects/project-1.png",
  },
  {
    title: "Car Rentals Website",
    description: "A fully functional car rental platform, allowing users to browse available cars, make bookings, and manage reservations online.",
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
            <Reveal side={index % 2 === 0 ? "left" : "right"}>
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
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-url"
                >
                  Live Preview
                </a>
              </div>
            </Reveal>
            <Reveal side={index % 2 === 0 ? "right" : "left"}>
              <div className="project-image-frame">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
            </Reveal>
          </div>
        ))}
      <button className="view-all-button" onClick={handleToggle}>
        {showAll ? "Show Less" : "View All"}
      </button>
    </section>
  );
};

export default Portfolio;
