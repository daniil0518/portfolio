import { typing } from "@/utility/typing";
import { useEffect } from "react";
import { myInfo } from "@/utility/data";

const SideBar = () => {
  useEffect(() => {
    typing();
  }, []);

  return (
    <div className="col-lg-4">
      <div className="trm-main-card-frame trm-sidebar">
        <div
          className="trm-main-card"
          data-scroll=""
          data-scroll-repeat=""
          data-scroll-sticky=""
          data-scroll-target="#content"
          data-scroll-offset={60}
        >
          <div className="trm-mc-header">
            <div className="trm-avatar-frame trm-mb-20">
              <img className="trm-avatar" src="/img/avatar.png" alt="Avatar" />
              <div className="trm-dot" />
            </div>
            <h5 className="trm-name trm-mb-15">Daniil Svechenovskyi</h5>
            <div className="trm-label">
              I`m{" "}
              <span className="trm-typed-text">
              </span>
            </div>
          </div>
          <div className="trm-divider trm-mb-20 trm-mt-20" />
          <div className="trm-social">
            {
              myInfo.contact.map((ele, idx) => 
                <a href={ele.link} target="_blank" key={idx}>
                  <i className={`fab ${ele.icon}`} />
                </a>
              )
            }
          </div>

          <div className="trm-divider trm-mb-20 trm-mt-20" />
          <ul className="trm-table">
            <li>
              <div className="trm-label">Residence:</div>
              <div className="trm-label trm-label-light">Ukraine</div>
            </li>
            <li>
              <div className="trm-label">City:</div>
              <div className="trm-label trm-label-light">Merefa</div>
            </li>
            <li>
              <div className="trm-label">Age:</div>
              <div className="trm-label trm-label-light">20</div>
            </li>
          </ul>
          <div className="trm-divider trm-mb-20 trm-mt-20" />
          <div className="text-center">
            <a data-fancybox="" href="#trm-order" className="trm-btn">
              Contact me <i className="far fa-envelope" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
