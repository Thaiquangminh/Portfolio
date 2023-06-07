import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>minh.thaiquang153@gmail.com</h5>
            <a href="mailto:minh.thaiquang153@gmail.com" target="_">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>minh.thaiquang153@gmail.com</h5>
            <a href="https://m.me/mo.tequy/" target="_">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+84972954035</h5>
            <a href="tel:+84972954035" target="_">
              Contact me
            </a>
          </article>
        </div>

        {/* Contact form */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
