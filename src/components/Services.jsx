import HeroImg2 from "./HeroImg2";
import "./ServicesStyles.css";
import WorkCard from "./ServiceCard";
import WorkCardData from "./ServiceCardData";

const Services = () => {
  return (
    <>
      <HeroImg2 />
      <div className="work-container">
        <div className="service-container">
          {WorkCardData.map((val, index) => {
            return <WorkCard key={index} title={val.title} text={val.text} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
