import styleUtils from "./SubscribeForm.module.css";

const SubscribeForm = () => {
  return (
    <form className={styleUtils.form}>
      <div className={styleUtils["text-field-container"]}>
        <input
          className={styleUtils["text-field"]}
          placeholder="Your email address..."
        />

        {/* <p className={styleUtils["error-message"]}>
          Please provide a valid email address
        </p>
        <p className={styleUtils["error-message"]}>
          Whoops! It looks like you forgot to add your email
        </p> */}
      </div>

      <button className={styleUtils["notify-btn"]}>Notify Me</button>
    </form>
  );
};

export default SubscribeForm;
