import { useRef, useState } from "react";
import styleUtils from "./SubscribeForm.module.css";

const SubscribeForm = () => {
  /**
   * I used useState for handling 4 situation
   * that accure in this component for email input:
   * Default, EmailIsEmpty, InvalidEmail, and Success
   */
  const DEFAULT = "Default",
    EmailIsEmpty = "EmailIsEmpty",
    InvalidEmail = "InvalidEmail",
    Success = "Success";
  const [state, setState] = useState(DEFAULT);

  const emailInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const emailValue = emailInput.current.value.trim();

    if (!emailValue) {
      setState(EmailIsEmpty);
      return;
    }

    if (!validateEmail(emailValue)) {
      setState(InvalidEmail);
      return;
    }

    setState(Success);
  };

  // Validate email address by regular expression
  // https://stackoverflow.com/a/9204568/3925013
  const validateEmail = (emailValue) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailValue);
  };

  // Handle email style in different states
  const emailInputClass =
    state === EmailIsEmpty || state === InvalidEmail
      ? `${styleUtils["text-field"]} ${styleUtils["border-error"]}`
      : styleUtils["text-field"];

  // Handle messages
  let messages = "";

  if (state === EmailIsEmpty) {
    messages = (
      <p className={styleUtils["error-message"]}>
        Whoops! It looks like you forgot to add your email
      </p>
    );
  }

  if (state === InvalidEmail) {
    messages = (
      <p className={styleUtils["error-message"]}>
        Please provide a valid email address
      </p>
    );
  }

  return (
    <form onSubmit={submitHandler} className={styleUtils.form}>
      <div className={styleUtils["text-field-container"]}>
        <input
          ref={emailInput}
          className={emailInputClass}
          placeholder="Your email address..."
        />
        {messages}
      </div>

      <button
        type="submit"
        aria-label="submit"
        className={styleUtils["notify-btn"]}
      >
        Notify Me
      </button>
    </form>
  );
};

export default SubscribeForm;
