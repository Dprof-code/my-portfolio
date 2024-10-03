import "./Contact.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-header">Contact</h2>
      <div className="contact-container">
        <div className="contact-left">
          <h3 className="contact-title">Reach Me</h3>
          <p className="contact-description">
            I would love to hear from you. Whether you have a question or just
            want to say hi, feel free to drop a message.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FaPhone className="contact-icon" />
              <span>
                <a href="tel:+2348168082347">+2348168082347</a>
              </span>
            </div>
            <div className="contact-detail">
              <FaEnvelope className="contact-icon" />
              <span>
                <a href="mailto:olawaleade15@gmail.com">
                  olawaleade15@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-input"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="contact-input"
              required
            ></textarea>
            <button type="submit" className="contact-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
