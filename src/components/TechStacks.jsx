import TechStack from "./TechStack";
import "./TechStacks.css";

const techStacks = [
  { title: "WordPress", image: "/tech-stacks/wordpress.png" },
  { title: "Shopify", image: "/tech-stacks/shopify.png" },
  { title: "React", image: "/tech-stacks/react.png" },
  { title: "Node.js", image: "/tech-stacks/nodejs.png" },
  { title: "JavaScript", image: "/tech-stacks/javascript.png" },
  { title: "CSS", image: "/tech-stacks/css.png" },
  { title: "HTML", image: "/tech-stacks/html.png" },
  { title: "Python", image: "/tech-stacks/python.png" },
  { title: "jQuery", image: "/tech-stacks/jquery.png" },
  { title: "Bootstrap", image: "/tech-stacks/bootstrap.png" },
  { title: "C", image: "/tech-stacks/c.png" },
  { title: "Figma", image: "/tech-stacks/figma.png" },
  { title: "Git", image: "/tech-stacks/git.png" },
  { title: "GitHub", image: "/tech-stacks/github.png" },
  { title: "MySQL", image: "/tech-stacks/mysql.png" },
  { title: "PHP", image: "/tech-stacks/php.png" },
  { title: "Software Development", image: "/tech-stacks/software.png" },
  { title: "TypeScript", image: "/tech-stacks/typescript.png" },
];

const TechStacks = () => {
  return (
    <section id="experience" className="tech-stacks">
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
