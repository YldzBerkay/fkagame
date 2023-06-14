import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

import alertify from "alertifyjs";

// npm i @emailjs/browser

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aika6pg",
        "template_acdtodk",
        form.current,
        "nqoyFEkK1wq-mCCjl"
      )
      .then(
        (result) => {
          alertify.success("Message sent", 2);
          form.current.reset();
        },
        (error) => {
          alertify.error("Message sent", 2);
        }
      );
  };

  return (
    <div className="container">
      <div className="contact">
      <div className="contact-h1">
        <h1>Contact In Us</h1>
      </div>
      <div className="contact-p">
        <p>
          To reach us, you can submit your inquiries, suggestions, complaints,
          or requests through the following contact channels. We promise to
          respond to you as soon as possible.
        </p>
      </div>
      <div className="contact-information">
        <div className="form">
          <div className="form-h3">
            <h3>Leave Us A Message</h3>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name*" required />
            <input
              type="email"
              name="user_email"
              placeholder="Email*"
              required
            />
            <textarea name="message" placeholder="Message*" required />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Contact;
