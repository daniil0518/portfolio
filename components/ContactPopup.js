import { Fragment, useRef, useState } from "react";
import emailjs from 'emailjs-com';

const ContactPopup = () => {
  const currentForm = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(currentForm.current)
    
    const { NEXT_PUBLIC_EMAILJS_USER_ID, NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID } = process.env;
    
    emailjs.sendForm(
      NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      currentForm.current,
      {
        publicKey: NEXT_PUBLIC_EMAILJS_USER_ID,
      }
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message.');
    });
  };

  return (
    <Fragment>
      <div id="trm-order" className="trm-order">
        <div className="trm-popup-content">
          <img src="img/popup.jpg" alt="photo" />
          <div className="trm-popup-form-frame">
            <h5 className="trm-mb-40">Write me a message</h5>
            <form id="form1" ref={currentForm} onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Name" onChange={handleChange} />
              <input name="email" type="email" placeholder="Email" onChange={handleChange} />
              <textarea
                name="message"
                rows={6}
                placeholder="Message"
                defaultValue={""}
                onChange={handleChange}
              />
              <button type="submit" className="trm-btn">
                Send <i className="fas fa-arrow-right" />
              </button>
            </form>
            <div className="trm-text-sm trm-mt-20">
              * I promise the confidentiality of your personal information
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ContactPopup;
