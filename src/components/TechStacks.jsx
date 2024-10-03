import TechStack from "./TechStack";
import "./TechStacks.css";

const techStacks = [
  { title: "React", image: "/tech-stacks/react.png" },
  { title: "Node.js", image: "/tech-stacks/nodejs.png" },
  { title: "JavaScript", image: "/tech-stacks/javascript.png" },
  { title: "CSS", image: "/tech-stacks/css.png" },
  { title: "HTML", image: "/tech-stacks/html.png" },
  { title: "Python", image: "/tech-stacks/python.png" },
  { title: "jQuery", image: "/tech-stacks/jquery.png" },
];

const TechStacks = () => {
  return (
    <section className="tech-stacks">
      <h2 className="tech-stacks-header">Experience</h2>
      <div className="tech-stacks-container">
        {techStacks.map((tech, index) => (
          <TechStack key={index} title={tech.title} image={tech.image} />
        ))}
      </div>
    </section>
  );
};

export default TechStacks;
