import React from "react";
import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constans/index";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex bg-primary justify-between items-center w-full py-6">
      <img src={logo} alt="logo" className="w-[130px] h-[35px]" />
      <ul className="list-none flex justify-end items-center sm:flex hidden flex-1">
        {navLinks.map((e, ind) => (
          <li
            className={`text-white text-[16px] font-Poppins ${
              ind === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={e.id}
          >
            <a href={`#${e.id}`}>{e.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden justify-end items-center flex-1 flex ">
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle(!toggle)}
          className={"w-[28px] h-[28px] cursor-pointer object-contain"}
          alt="dash"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient absolute top-20 right-0 min-w-[140px] p-5 my-1 mx-5 flex justify-center items-center rounded-xl sidebar `}
        >
          <ul className="list-none flex justify-end items-center flex-col  flex-1 ">
            {navLinks.map((e, ind) => (
              <li
                className={`text-white text-[16px] font-Poppins ${
                  ind === navLinks.length - 1 ? "mr-0" : "mb-6"
                }`}
                key={e.id}
              >
                <a href={`#${e.id}`}>{e.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
