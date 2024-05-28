"use client";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import History from "@/components/History";
import Portfolio from "@/components/Portfolio";
import Price from "@/components/Price";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import VideoResume from "@/components/VideoResume";
import { context } from "@/context/context";
import DefaultLayOut from "@/layout/DefaultLayOut";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_image_function, banner_type_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    banner_type_function("image");
  }, []);
  return (
    <DefaultLayOut onePage={true}>
      <Counter />
      <Story />
      <VideoResume />
      <Services />
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="portfolio-triger"
      />
      <Portfolio />
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="resume-triger"
      />
      <Skills />
      <History />
      <Price />
      <Testimonials />
      <div
        data-scroll
        data-scroll-repeat
        data-scroll-offset={500}
        id="contact-triger"
      />

      <Contact />
    </DefaultLayOut>
  );
};
export default Index;
