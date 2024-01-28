import React from "react";
import { discount } from "../assets";
import styles from "../src/style";
import GetStarted from "./GetStarted";
import { robot } from "../assets";
const Hero = () => (
  <div
    className={`flex md:flex-row  flex-col items-start   ${styles.paddingY}`}
  >
    <div
      className={`flex-1  flex-col  ${styles.flexStart} ${styles.paddingX}  `}
    >
      <div className="py-[5px] px-[8px] flex flex-row rounded-[8px]  mb-5 items-center bg-discount-gradient">
        <img src={discount} className={"w-[35px] h-[35px]"} alt="discount" />
        <p
          className={`text-[#777676] uppercase font-normal ml-3 font-poppins sm:text-[16px] text-[14px] leading-[24px] sm:leading-[px] `}
        >
          <span className=" text-white "> 20% </span>
          discount for <span className=" text-white "> 1 month </span>
          account
        </p>
      </div>
      <div className="flex sm:flex-row flex-col items-start w-full justify-between">
        <h1 className="text-white text-[40px] leading-[50px] capitalize sm:font-bold font-semibold font-poppins ss:text-[65px] ss:leading-[75px] ">
          the next <br className="sm:flex hidden" />{" "}
          <span className="text-gradient">generation</span>
        </h1>
        <div className={`sm:flex hidden justify-center items-center`}>
          <GetStarted />
        </div>
      </div>
      {/* <div className=""> */}
      <h1 className="text-white ss:text-[65px]  ss:leading-[75px] text-[40px] leading-[50px] mb-4  capitalize sm:font-bold  font-bold  font-poppins">
        payment method.
      </h1>

      <p className=" font-poppins text-[#999999] ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod natus,
        eveniet cumque maxime ea fugit voluptatem facilis blanditiis ipsa iste.
      </p>
      {/* </div> */}
    </div>
    <div className=" relative flex-1 flex justify-center items-center md:my-0 my-7">
      <img src={robot} alt="robot" className="w-[100%] h-[100%]  z-[5]" />
      <div className="absolute top-0 w-[40%] h-[40%]   z-[0] pink__gradient" />
      <div className="absolute bottom-0 right-10 w-[80%] h-[80%]  z-[1] white__gradient" />
      <div className="absolute w-[50%] h-[50%] right-20 bottom-10 z-[0] blue__gradient" />
    </div>
    <div
      className={`sm:hidden flex flex-1 self-center	 justify-center items-center`}
    >
      <GetStarted />
    </div>
  </div>
);

export default Hero;
