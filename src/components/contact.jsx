import { useEffect, useRef, useState } from "react";
import "../scss/contact.scss";
import Loader from "react-loaders";
import AnimatedLetters from "./animatedLetters";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(refForm.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    emailjs
      .send(
        "gmail",
        "template_portfolioemail",
        data, // Pass the serialized form data
        "gEFd2Pgoey6S2zOri"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message. Try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>

          <p>
            Im interested in freelance opportunities- If you're interested or
            have any requests dont hesitate to contact me
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                required></textarea>

              <input type="submit" value="SEND" className="flat-button" />
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};
export default Contact;
