import "./FooterStyle.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#F8D90F", marginRight: "2rem" }}
              />
              Warrenville SC 29851
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#F8D90F", marginRight: "2rem" }}
              />
              +1 803-292-1649
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#F8D90F", marginRight: "2rem" }}
              />
              norbertolainez87@icloud.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            Serving Augusta and surrounding areas with tree pruning and removal
            services. Low footprint cleanups and fully insured. Call now to
            schedule a free consultation
          </p>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100090961023946&mibextid=LQQJ4d">
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://youtube.com/@norbertolainez3256?si=Ml2FikySg-tz3kvE">
              <FaYoutube
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
