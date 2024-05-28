import { DataContext } from "@/context/datacontext";
import { useContext, useEffect, useState } from "react";

const Services = () => {
  const { data } = useContext(DataContext)
  const [services, setServices] = useState([])
  useEffect(() => {
    if("services" in data)
      setServices(data["services"])
  }, [data])
  return (
    <div className="row">
      <div className="col-lg-12">
        <h5 className="trm-mb-40 trm-mt-40 trm-title-with-divider">
          My Services <span data-number={3} />
        </h5>
      </div>
      {
        services.map((ele, idx) =>
          <div key={idx} className="col-lg-6">
            <div
              className="trm-service-icon-box trm-scroll-animation"
              data-scroll=""
              data-scroll-offset={40}
            >
              <div className="trm-service-content">
                <div className="trm-icon">
                  <img
                    src={ele["icon"]}
                    alt="icon"
                    className="trm-black-icon"
                  />
                  <img
                    src={ele["dicon"]}
                    alt="icon"
                    className="trm-white-icon"
                  />
                </div>
                <h6 className="trm-mb-20">{ele["title"]}</h6>
                <div className="trm-mb-20">
                  {ele["desc"]}
                </div>
                <a
                  data-fancybox=""
                  href="#trm-order"
                  className="trm-label trm-label-color"
                >
                  Order now <i className="fas fa-arrow-right"/>
                </a>
              </div>
            </div>
          </div>)
      }
    </div>
  );
};

export default Services;
