import { Fragment } from "react";
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
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea rows={6} placeholder="Message" defaultValue={""} />
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
