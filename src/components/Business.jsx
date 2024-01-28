import React from "react";
import Button from "./Button";
import { card } from "../assets";

const Business = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-start gap-6 md:py-16 py-6 ">
      <div className="flex flex-1 flex-col items-start">
        <h1 className="font-poppins sm:text-[42px] text-[32px] leading-[45px] font-semibold sm:leading-[55px] text-white mb-4">
          Find a better card deal in few easy steps.
        </h1>
        <p className="text-dimWhite max-w-[480px] text-[18px] leading-[28px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className="flex-1 flex items-center justify-center sm:my-0 my-6">
        <img src={card} alt="card" className="w-[90%] h-[90%] object-contain" />
      </div>
    </div>
  );
};

export default Business;
