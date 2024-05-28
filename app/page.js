"use client";
import Counter from "@/components/Counter";
import Price from "@/components/Price";
import Publications from "@/components/Publications";
import Services from "@/components/Services";
import Story from "@/components/Story";
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
    <DefaultLayOut>
      <Counter />
      <Story />
      <Services />
      <Price />
      <Publications />
    </DefaultLayOut>
  );
};
export default Index;
