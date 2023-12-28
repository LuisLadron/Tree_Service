import "./HomeImgStyles.css";
import IntroImg from "../assets/IntroImg.jpg";
import { motion } from "framer-motion";

const HomeImg = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <motion.div className="content">
        <h1 style={{ color: "#F8D90F" }}>Welcome</h1>
        <p>
          We are the experts in tree and garden care. We offer a range of
          services from pruning to landscaping to make your outdoor space
          beautiful and healthy
        </p>
        <p>
          <br />
          Call: (803) 292-1649
        </p>
        <div>
          <a href="#about">
            <motion.button
              className="btn"
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              Learn More
            </motion.button>
          </a>
          <a href="#contact">
            <motion.button
              className="btn btn-light"
              initial={{ x: 250 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              Contact Us
            </motion.button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeImg;
