/* eslint-disable react/prop-types */
import "./ServicesStyles.css";
import { motion } from "framer-motion";

const WorkCard = (props) => {
  return (
    <motion.div
      className="service-card"
      initial={{ y: 250 }}
      whileInView={{ y: -10 }}
      transition={{ type: "spring", stiffness: 120 }}
      viewport={{ once: true }}
    >
      <h2 className="service-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
      <a className="pro-btn" href="#contact">
        <button className="btn">Book Now</button>
      </a>
    </motion.div>
  );
};

export default WorkCard;
