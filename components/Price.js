import { DataContext } from "@/context/datacontext";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames"

const Price = () => {
  const {data} = useContext(DataContext)
  const [price, setPrice] = useState([])
  useEffect(() => {
    if("price" in data)
      setPrice(data["price"])
  }, [data])
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Price plans <span data-number={8} />
        </h5>
      </div>
      {
        price.map((ele, idx) => 
          <div className="col-lg-6" key={idx}>
            {/* price table */}
            <div
              className={classNames("trm-price trm-scroll-animation", { "trm-popular": ele.popular })}
              data-scroll=""
              data-scroll-offset={40}
            >
              {/* card header */}
              <div className="trm-price-header">
                <h6>{ele["title"]}</h6>
              </div>
              {/* card header end */}
              {/* price */}
              <div className="trm-price-number">
                <sup>$</sup>{ele["mount"]}<sup>/ {ele["unit"]}</sup>
              </div>
              {/* price end */}
              <div className="trm-divider trm-mb-40 trm-mt-40" />
              {/* price list */}
              <ul className="trm-price-list">
                {
                  ele["services"].map((cell, jdx) => 
                    <li key={jdx} className={classNames("trm-label", { "trm-label-light": !cell.available })}>{cell.title}</li>
                  )
                }
              </ul>
              {/* price list end */}
              <a data-fancybox="" href="#trm-order" className="trm-btn">
                Order now <i className="fas fa-arrow-right" />
              </a>
            </div>
            {/* price table */}
          </div>
        )
      }
    </div>
  );
};
export default Price;
