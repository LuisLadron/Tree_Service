import "./FormStyles.css";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.message) {
        errors.message = "Required";
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      window.location.href = `mailto:norbertolainez87@icloud.com?subject=Quick_contact&body= It comes from: ${values.name}. Message: ${values.message}. Email: (${values.email})`;
      resetForm({ values: "" });
    },
  });

  return (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
        <label>Your name</label>
        <input type="text" {...formik.getFieldProps("name")} />
        <span className="error-message">
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </span>
        <label>Email</label>
        <input type="email" {...formik.getFieldProps("email")} />
        <span className="error-message">
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </span>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message"
          {...formik.getFieldProps("message")}
        ></textarea>
        <span className="error-message">
          {formik.touched.message && formik.errors.message ? (
            <div>{formik.errors.message}</div>
          ) : null}
        </span>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
