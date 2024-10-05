import "./Counters.css";
import Count from "./Count";

const stats = [
  { title: "Years of Experience", count: 5 },
  { title: "Websites Built", count: 500 },
  { title: "Satisfied Clients", count: 500 },
  { title: "Technologies", count: 20 },
];

const Counters = () => {
  return (
    <section className="counter">
      <div className="counters-container">
        {stats.map((stat, index) => (
          <Count key={index} title={stat.title} count={stat.count} />
        ))}
      </div>
    </section>
  );
};

export default Counters;
