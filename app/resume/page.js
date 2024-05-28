"use client";
import { context } from "@/context/context";
import DefaultLayOut from "@/layout/DefaultLayOut";
import { useContext, useEffect } from "react";
import { myInfo } from "@/utility/data";

const SkillComponent = ({ data }) => {
  return (
    <div className="trm-mb-20 col-lg-6">
      <div className="trm-skill-header">
        <h6 className="trm-mb-15">{data.title}</h6>
        <span className="trm-label trm-label-light">{data.mount === 100 ? "Native" : data.mount}</span>
      </div>
      <div className="trm-progressbar-frame">
        <div className={`trm-progressbar p${data.mount}`} />
      </div>
    </div>
  )
}

const CareerComponent = ({ data }) => {
  return (
    <div
      className="trm-timeline-item trm-scroll-animation trm-active-el"
      data-scroll
      data-scroll-offset={40}
    >
      <div className="trm-timeline-mark-light" />
      <div className="trm-timeline-mark" />
      <div className="trm-a trm-timeline-content">
        <div className="trm-card-header">
          <div className="trm-left-side">
            <h6 className="trm-mb-15">{data.title}</h6>
            <div className="trm-text-sm trm-accent-color trm-mb-15">
              <i>{data.period}</i>
            </div>
          </div>
        </div>
        <div className="trm-mb-20">
          {data.position}
        </div>
      </div>
    </div>
  )
}

const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    page_info_function("My Skills<br>and History", "resume", "resume");
  }, []);
  return (
    <DefaultLayOut>
      {
        Object.keys(myInfo.skills).map((ele, idx) =>
          <div className="row" key={idx}>
            <div className="col-lg-12">
              <div
                className="trm-skill-card trm-scroll-animation trm-active-el row"
                data-scroll
                data-scroll-offset={40}
              >
                <h2 className="col-lg-12 trm-mb-20 text-center text-uppercase">{ele}</h2>
                {
                  myInfo.skills[ele].map((cell, jdx) =>
                    <SkillComponent key={jdx} data={cell} />
                  )
                }
              </div>
            </div>
          </div>
        )
      }
      <div className="row">
        <div className="col-lg-12">
          <h5 className="trm-mb-40 trm-title-with-divider">
            Employment History <span data-number={3} />
          </h5>
        </div>
        {
          Object.keys(myInfo.history).map((ele, idx) =>
            <div className="col-lg-6" key={idx}>
              <div className="trm-timeline">
                {
                  myInfo.history[ele].map((cell, jdx) => 
                    <CareerComponent key={jdx} data={cell} />
                  )
                }
              </div>
            </div>
          )
        }
      </div>
    </DefaultLayOut>
  );
};
export default Index;
