import HeroImg2 from "./HeroImg2";
import "./ServicesStyles.css";
import WorkCard from "./ServiceCard";
import WorkCardData from "./ServiceCardData";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>NLB Tree Service and Gardening LLC</title>
        <meta name="description" content="NLB tree services" />
        <link rel="canonical" href="nlbtreeserviceandgardering.com" />
      </Helmet>
      <HeroImg2 />
      <div className="work-container">
        <div className="service-container">
          {WorkCardData.map((val, index) => {
            return (
              <WorkCard
                key={index}
                title={val.title}
                text={val.text}
                img={val.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
