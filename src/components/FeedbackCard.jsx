import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ id, content, title, img, name }) => {
  return (
    <div
      className={` 
         
       flex flex-col  justify-between sm:py-12 py-8 max-w-[380px] feature-card rounded-[25px]  sm:px-8 px-6`}
      key={id}
    >
      <img src={quotes} alt="quotes" width={40} height={35} />
      <div className="">
        <p className="text-dimWhite max-w-[300px] text-[18px] leading-[28px] my-10">
          {content}
        </p>
      </div>
      <div className="flex flex-row items-center  ">
        <img
          src={img}
          alt="img"
          width={60}
          height={60}
          className={"rounded-full"}
        />

        <div className="flex flex-col items-start ml-6">
          <p className="sm:text-[17px] text-[14px] leading-[31px] text-white ">
            {name}
          </p>
          <p className="sm:text-[17px] text-[14px] leading-[31px] text-[#777] ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
