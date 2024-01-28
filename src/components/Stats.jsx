import React from "react";
import { stats } from "../constans/index";
import styles from "../src/style";
const Stats = () => (
  // <div className=" w-full ">
  <div className="flex  md:justify-between justify-center md:items-center md:gap-0 gap-5  md:flex-row flex-col flex-wrap w-[100%] h-[100%] text-white my-8">
    {stats.map((e, index) => (
      <div
        className={` flex  justify-between ${
          index === stats.length - 1 ? "mr-0 " : "md:mr-3  mr-0"
        } `}
        key={e.id}
      >
        <h1 className="font-poppins text-[30px] text-white md:mr-5 mr-2 font-medium leading-[35px]">
          {e.value}
        </h1>
        <p className=" uppercase text-gradient text-[18px] text-poppins font-semibold leading-[30px] ">
          {e.title}
        </p>
      </div>
    ))}
  </div>
  // </div>
);

export default Stats;
