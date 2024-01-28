import React from "react";

const Button = ({ styles }) => (
  <button
    className={` ${styles} font-poppins font-MEDIUM md:text-[17px] text-[15px]  text-primary capitalize md:py-3.5 py-2  md:px-5  px-4 rounded-[10px] bg-blue-gradient `}
  >
    get started
  </button>
);

export default Button;
