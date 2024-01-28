import React from "react";

import Button from "./Button";

const Footer = () => {
  return (
    <div className="md:py-[3rem] md:px-[4.5rem] py-[2.8rem] px-[3rem] rounded-[20px] flex sm:flex-row flex-col justify-between items-center bg-black-gradient-2">
      <div className="flex flex-col items-start gap-5">
        <h1
          className={
            "text-[30px] font-poppins sm:text-[40px] text-white sm:leading-[52px] leading-[35px] font-semibold"
          }
        >
          Let’s try our service now!
        </h1>
        <p className="max-w-[550px] font-poppins text-dimWhite leading-[30px] sm:text-[18px] text-[16px] ">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button styles={"sm:mt-0 mt-10"} />
    </div>
  );
};

export default Footer;
