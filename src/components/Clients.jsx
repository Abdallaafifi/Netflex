import React from "react";
import { quotes } from "../assets";
import { feedback } from "../constans";
import FeedbackCard from "./FeedbackCard";
const Clients = () => {
  return (
    <div className="flex items-start justify-start flex-col">
      <div className="sm:flex-row flex-col flex w-full  justify-between sm:items-center items-start">
        <h1 className="font-poppins sm:text-[42px] text-[32px]  w-[400px] leading-[45px] font-semibold sm:leading-[55px] text-white mb-4">
          What people are saying about us
        </h1>
        <p className="text-dimWhite  max-w-[400px]  font-poppins font-normal text-[16px] leading-[28px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
        <div className="ss:block hidden"></div>
      </div>
      <div className="flex flex-row pt-8 flex-wrap sm:gap-8 gap-3 justify-between feedback-container">
        {feedback.map((e) => (
          <FeedbackCard {...e} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
