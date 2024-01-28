import React from "react";
import styles from "../stykes";
import Button from "./Button";
import { features } from "../constans/index.js";
const GenerateFeature = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row items-start justify-start 
      ${index !== features.length - 1 ? "mb-6" : "mb-0"} 
   feature-card py-4  md:px-6 p[3 3 3 0] rounded-[25px] cursor-pointer `}
  >
    <div className="w-[65px] h-[65px] flex items-center justify-center">
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-col items-start ml-3">
      <h4 className="text-white font-medium mb-2 text-[18px] font-poppins leading-[25px]">
        {title}
      </h4>
      <p className="text-[#999999] font-normal text-[16px]">{content}</p>
    </div>
  </div>
);
const Billing = () => (
  <div className={`${styles.paddingY} flex  items-start md:flex-row flex-col`}>
    <div className={`${styles.flexStart} flex-1 flex-col`}>
      <h1 className="text-white font-poppins font-semibold leading-[55px] capitalize text-[35px] ">
        you do the business , <br className="ss:block hidden " />
        we'll handel the money.
      </h1>
      <p
        className={` text-[#999999] capitalize text-normal  text-[16px] leading-[26px]  font-poppins my-4 max-w-[500px]`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi
        dignissimos ipsum sapiente atque reprehenderit quaerat, laudantium
        facere corporis mollitia blanditiis reiciendis, odit iusto totam,
        tenetur dolore
      </p>
      <div className="">
        <Button styles={"my-5"} />
      </div>
    </div>
    <div className="flex flex-1 flex-col items-start">
      {features.map((i, index) => (
        <GenerateFeature key={i.id} {...i} {...index} />
      ))}
    </div>
  </div>
);

export default Billing;
