import React from "react";
import { clients } from "../constans";
import styles from "../stykes";

const CTA = () => {
  return (
    <div
      className={` ${styles.paddingY} flex w-full  gap-8 flex-wrap justify-between   items-center `}
    >
      {clients.map((e, i) => (
        <div key={e.id} className={`md:w-[160px] w-[140px] py-6  `}>
          <img src={e.logo} alt="logo" className="w-[100% ] h-[100%]" />
        </div>
      ))}
    </div>
  );
};

export default CTA;
