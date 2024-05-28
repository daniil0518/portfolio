"use client";
import { context } from "@/context/context";
import DefaultLayOut from "@/layout/DefaultLayOut";
import { useContext, useEffect } from "react";
import { myInfo } from "@/utility/data";

const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    page_info_function("Recent work<br>performed", "portfolio", "portfolio");
  }, []);
  return (
    <DefaultLayOut>
      <div className="row">
        {myInfo.portfolio.map((item) => (
          <div className="col-lg-6" key={item.id}>
            <a
              data-fancybox="portfolio"
              href={item.img}
              className="trm-portfolio-item trm-scroll-animation"
              data-scroll
              data-scroll-offset={40}
              data-cat="icon"
            >
              <div className="trm-cover-frame">
                <img className="trm-cover" src={item.img} alt="item" />
              </div>
              <div className="trm-item-description">
                <h6>{item.title}</h6>
                <div className="trm-zoom-icon">
                  <i className="fas fa-search-plus" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </DefaultLayOut>
  );
};
export default Index;
