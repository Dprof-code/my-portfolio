import "./Services.css";
import Card from "./Card";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaServer,
  FaCogs,
  FaRocket,
  FaTools,
  FaHome,
  FaBuilding,
  FaBitcoin,
  FaBolt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { useState } from "react";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Building responsive and modern web applications.",
  },
  {
    icon: <FaCogs />,
    title: "CMS Development",
    description:
      "Developing content management systems for easy content updates.",
  },
  {
    icon: <FaCogs />,
    title: "Software Development",
    description: "Creating software solutions tailored to your business needs.",
  },
  {
    icon: <FaRocket />,
    title: "Website Deployment",
    description: "Deploying your website to live servers with best practices.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Front-End Web Development",
    description: "Designing user-friendly and visually appealing interfaces.",
  },
  {
    icon: <FaServer />,
    title: "Back-End Web Development",
    description: "Building robust server-side applications and APIs.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Blockchain Development",
    description:
      "Developing decentralized applications on blockchain platforms.",
  },
  {
    icon: <FaTools />,
    title: "Website Management",
    description:
      "Managing and maintaining your website for optimal performance.",
  },
  {
    icon: <FaTools />,
    title: "Website Maintenance",
    description: "Providing ongoing support and updates for your website.",
  },
  {
    icon: <FaHome />,
    title: "Vacation Rentals Website Development",
    description:
      "Creating websites for vacation rentals and property management.",
  },
  {
    icon: <FaBuilding />,
    title: "Cleaning Website",
    description: "Developing websites for cleaning services and businesses.",
  },
  {
    icon: <FaBuilding />,
    title: "Real-Estate and AirBNB Website Development",
    description: "Building websites for real estate and AirBNB listings.",
  },
  {
    icon: <FaBitcoin />,
    title: "Crypto and Web3 Website",
    description: "Creating websites for cryptocurrency and Web3 projects.",
  },
  {
    icon: <FaBolt />,
    title: "Zapier Integration",
    description: "Integrating Zapier to automate workflows and tasks.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Programming Tutor",
    description: "Providing tutoring services for programming and development.",
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="services" className="services">
      <h2 className="services-header">Services</h2>
      <div className="service-grid">
        {services
          .slice(0, showAll ? services.length : 4)
          .map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
      </div>
      <button className="view-all-button" onClick={handleToggle}>
        {showAll ? "Show Less" : "View All"}
      </button>
    </section>
  );
};

export default Services;
