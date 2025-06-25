import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("Umar Afridi");
  const [email, setEmail] = useState("umarafarooqafridi06@gmail.com");
  const [text, setText] = useState("Well Done For your'e amazing job ");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(EventTarget.target[2].value);
  };
  return (
    <form className="form" action={onSubmit}>
      <h1>Contact Us</h1>
      <div className="controler">
        <input type="text" name="name" placeholder="Enter your name" required />
      </div>
      <div className="controler">
        <input
          type="text"
          name="email"
          placeholder="Enter your mail"
          required
        />
      </div>
      <div className="controler">
        <textarea
          type="text"
          name="text"
          rows="6"
          placeholder="Please Tell us you're thoughts"
          required
        />
      </div>
      <button onClick={onSubmit} className="submit">
        Submit
      </button>
      <div>
        <h4>{"Thanks for you're review" + " " + name + "."}</h4>
      </div>
    </form>
  );
};

export default Form;
