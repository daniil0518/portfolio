import { context } from "@/context/context";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const { banner_image } = useContext(context);

  return <Image banner_image={banner_image} />;
};
export default Banner;

const Image = ({ banner_image }) => {
  return (
    <div
      className="trm-banner"
      data-scroll=""
      data-scroll-direction="vertical"
      data-scroll-speed={-1}
    >
      {/* banner cover */}
      <img
        src={banner_image}
        alt="banner"
        className="trm-banner-cover"
        data-scroll=""
        data-scroll-direction="vertical"
        data-scroll-speed={-4}
      />
      {/* banner cover end */}

      {/* banner content */}
      <div className="trm-banner-content trm-overlay">
        <div
          className="container"
          data-scroll=""
          data-scroll-direction="vertical"
          data-scroll-speed={1}
        >
          <div className="row">
            <div className="col-lg-4" />
            <div className="col-lg-8">
              {/* banner title */}
              <div className="trm-banner-text">
                <div className="trm-label trm-mb-20">Hi my new friend!</div>
                <h1 className="trm-mb-30">
                  Discover my
                  <br />
                  Workspace!
                </h1>
              </div>
              {/* banner title end */}
              {/* scroll hint */}
              <a
                href="#about-triger"
                data-scroll-to="#about-triger"
                data-scroll-offset={-130}
                className="trm-scroll-hint-frame"
              >
                <div className="trm-scroll-hint" />
                <span className="trm-label">Scroll down</span>
              </a>
              {/* scroll hint end */}
            </div>
          </div>
        </div>
      </div>
      {/* banner content end */}
    </div>
  );
};