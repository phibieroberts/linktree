import React from "react";
import Footer from "./Footer";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-form">
        {" "}
        <h1>Contact me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form action="">
          <div className="names">
            <label htmlFor="firstname">
              First name
              <input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
              />
            </label>

            <label htmlFor="lastname">
              Last name
              <input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
              />
            </label>
          </div>
          <label htmlFor="email">
            Email
            <input type="email" placeholder="yourname@email.com" id="email" />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              name="message"
              placeholder='  Send me a message and I"ll reply you as soon as possible...'
              rows={5}
              cols={20}
              id="message"
            ></textarea>
          </label>

          <label htmlFor="checkbox">
            <input type="checkbox" /> You agree to providing your data to who
            may contact you.
          </label>
        </form>
        <button id="button__submit">Send Message</button>

      </div>

      <Footer />
    </div>
  );
}

export default Contact;
