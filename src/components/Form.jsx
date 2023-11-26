import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
