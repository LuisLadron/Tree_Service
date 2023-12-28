import Form from "./Form";
import "./FormStyles.css";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>NLB Tree Service and Gardening LLC</title>
        <meta name="description" content="NLB tree service contact" />
        <link rel="canonical" href="nlbtreeserviceandgardering.com" />
      </Helmet>
      <div id="contact">
        <h1 className="title">Contact us</h1>
        <Form />
      </div>
    </>
  );
};

export default Contact;
