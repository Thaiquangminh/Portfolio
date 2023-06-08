import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isValid, setIsValid] = useState(true);
  const handleFocusInput = () => {
    setIsValid(true);
  };
  const handleSetFormValue = (e, field) => {
    setFormValue({ ...formValue, [field]: e.target.value });
  };
  const handleValidateForm = () => {
    if (
      formValue.name === '' ||
      formValue.email === '' ||
      formValue.message === ''
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  const showToastMessage = () => {
    toast.success('Send message succesfully !', {
      position: toast.POSITION.TOP_RIGHT,
      pauseOnFocusLoss: true,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    handleValidateForm();
    console.log(isValid);
    if (isValid === true) {
      emailjs
        .sendForm(
          'service_ukpn3sp',
          'template_icq9q8t',
          form.current,
          'ulDqIOl2SBeeLnbRW'
        )
        .then(
          (result) => {
            console.log(result.text);
            if (result.text === 'OK') {
              showToastMessage();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
      document.getElementById('form-contact').reset();
      setIsValid(false);
    } else {
      return;
    }
  };
  return (
    <>
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
              <h5>Thái Quang Minh</h5>
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
          <form ref={form} id="form-contact">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              onChange={(e) => handleSetFormValue(e, 'name')}
              onBlur={handleValidateForm}
              onFocus={handleFocusInput}
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              onChange={(e) => handleSetFormValue(e, 'email')}
              onBlur={handleValidateForm}
              onFocus={handleFocusInput}
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              onChange={(e) => handleSetFormValue(e, 'message')}
              onBlur={handleValidateForm}
              onFocus={handleFocusInput}
              required></textarea>
            {!isValid && (
              <p className="form-contact-healpertext">Please fill your form</p>
            )}
            <button
              type="button"
              className="btn btn-primary"
              onClick={sendEmail}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
