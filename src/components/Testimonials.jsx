import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constans";
import styles from "../stykes";

const Testimonials = () => {
  return (
    <div
      className={`flex flex-col w-[110%] -ml-[5%] md:px-16 px-6 gap-3 py-4 mt-[4rem]  bg-black justify-start `}
    >
      <div
        className="flex sm:flex-row flex-col flex-wrap items-center
      justify-between"
      >
        <div className="flex  flex-col  items-start sm:mb-0 mb-6  md:w-[350px] w-[100%] ">
          <img src={logo} width={150} height={90} alt="logo" />
          <p className="text-dimWhite font-poppins text-[17px] sm:mt-6 mt-3 ">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((e) => (
          <div
            key={e.title}
            className="flex flex-col self-start sm:mb-0 mb-6 items-start  max-w-[280px]"
          >
            <ul className="">
              <li className="text-white text-[18px] font-medium font-poppins mb-3">
                {e.title}
              </li>
              {e.links.map((a) => (
                <li className="text-dimWhite  text-[16px] font-normal font-poppins">
                  <a href={`#${a.link}`}>{a.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center sm:mt-[3rem] mt-2 pt-4 border-[#4b4b4b77] border-t">
        <p className="text-[#777] text-[17px]  ">
          Copyright @ 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex-row flex items-center sm:mt-0 mt-6  gap-3 ">
          {socialMedia.map((e) => (
            <a href={`#${e.link}`} key={e.id}>
              <img src={e.icon} alt="icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
