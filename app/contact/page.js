"use client";
import { context } from "@/context/context";
import DefaultLayOut from "@/layout/DefaultLayOut";
import Link from "next/link";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  useEffect(() => {
    page_info_function(
      "Have a question?    <br>Let's Get in Touch    ",
      "contact",
      "contact"
    );
  }, []);
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
            <form id="form2">
              <input name="name" type="text" placeholder="Name" />
              <input name="email" type="email" placeholder="Email" />
              <textarea
                name="text"
                rows={6}
                placeholder="Message"
                defaultValue={""}
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
            <div className="trm-success-banner">
              <img src="img/success.png" alt="success" className="trm-mb-15" />
              <h4 className="trm-mb-15">Success</h4>
              <div className="trm-text trm-mb-20">
                Your message has been sent successfully
              </div>
              <Link legacyBehavior href="/">
                <a className="trm-btn">
                  <i className="fas fa-arrow-left" /> Back to homepage
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* contact form end */}
    </DefaultLayOut>
  );
};
export default Index;