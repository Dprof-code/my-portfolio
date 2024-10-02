import "./Services.css";

const Card = ({ title, description, icon }) => {
  return (
    <div className="service-box">
      <div className="service-header">
        <div className="service-icon">{icon}</div>
        <h3 className="service-title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default Card;
