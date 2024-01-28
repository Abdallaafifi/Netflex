import React from "react";
import { arrowUp } from "../assets";
import styles from "../src/style";
const GetStarted = () => {
  return (
    <div
      className={` w-[130px] h-[130px] rounded-full p-[1.8px] mr-5 bg-blue-gradient ${styles.flexCenter} `}
    >
      <div className="flex text-blue-gradient justify-center items-center flex-col   w-[100%] h-[100%] bg-black rounded-full">
        <div className="flex items-center justify-center flex-row">
          <p className="font-poppins font-medium text-[18px] text-gradient mr-2 ">
            <span>get</span>
          </p>
          <img src={arrowUp} width={20} height={20} alt="arrow" />
        </div>
        <p className="font-poppins font-medium text-[18px]  text-gradient  ">
          <span>started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
