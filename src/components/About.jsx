import "./AboutStyles.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="title" id="about">
        <h1 style={{ color: "#F8D90F", fontSize: "2.4rem" }}>About us</h1>
      </div>
      <div className="about">
        <div className="left">
          <h1>Who we are?</h1>
          <p>
            We are a family-owned and operated tree and garden company that has
            been serving the Augusta area since 2020. We are passionate about
            creating and maintaining beautiful and healthy outdoor spaces for
            our clients. Whether you need tree removal, pruning, planting, or
            treatment, or lawn care, shrub pruning, or landscaping, we have the
            skills, experience, and equipment to handle any project. We are
            licensed, insured, and certified. We look forward to working with
            you and making your outdoor dreams come true.
          </p>
          <a href="#contact">
            <motion.button
              className="btn"
              initial={{ x: -250 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.button>
          </a>
        </div>
        <div className="right">
          <motion.div
            className="img-container"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="img-stack top">
              <img src={img1} className="img" alt="Img1" />
            </div>
            <div className="img-stack bottom">
              <img src={img2} className="img" alt="Img2" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;