"use client"
import { Fragment, useRef, useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  return (
    <Fragment>
      <ContactInfo />
      <ContactForm />
    </Fragment>
  );
};
export default Contact;

const ContactInfo = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Contact <span data-number={10} />
        </h5>
      </div>
    </div>
  );
};
const ContactForm = () => {
  const currentForm = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("NEXT_PUBLIC_EMAILJS_USER_ID", process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
    console.log("NEXT_PUBLIC_EMAILJS_SERVICE_ID", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
    console.log("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
    
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      currentForm.current,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message.');
    });
  };
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Get in touch <span data-number={11} />
        </h5>
      </div>
      <div className="col-lg-12">
        <div className="trm-contact-card">
          <form onSubmit={handleSubmit} ref={currentForm}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <textarea rows={6}  name="message" placeholder="Message" defaultValue={""} onChange={handleChange} />
            <div className="trm-form-bottom">
              <button type="submit" className="trm-btn">
                Send <i className="fas fa-arrow-right" />
              </button>
              <div className="trm-text-sm">
                * I promise the confidentiality of your personal information
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
