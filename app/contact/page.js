"use client";
import { context } from "@/context/context";
import DefaultLayOut from "@/layout/DefaultLayOut";
import emailjs from 'emailjs-com';
import { useContext, useEffect, useRef, useState } from "react";
const Index = () => {
  const currentForm = useRef();
  const { banner_image_function, page_info_function } = useContext(context);
  useEffect(() => {
    page_info_function(
      "Have a question?    <br>Let's Get in Touch    ",
      "contact",
      "contact"
    );
  }, []);

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
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      }
    ).then((response) => {
      alert('Message sent successfully!');
    }).catch((err) => {
      alert('Failed to send message.');
    });
  };

  return (
    <DefaultLayOut>
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            Get in touch <span data-number={2} />
          </h5>
        </div>
        <div className="col-lg-12">
          <div className="trm-contact-card">
            <form id="form2" onSubmit={handleSubmit} ref={currentForm}>
              <input name="name" type="text" placeholder="Name" onChange={handleChange} />
              <input name="email" type="email" placeholder="Email" onChange={handleChange} />
              <textarea
                name="message"
                rows={6}
                placeholder="Message"
                defaultValue={""}
                onChange={handleChange}
              />
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
      {/* contact form end */}
    </DefaultLayOut>
  );
};
export default Index;
