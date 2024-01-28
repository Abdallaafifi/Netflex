import React from "react";
import { bill, google, apple } from "../assets";
import styles from "../stykes";
const CardDeal = () => (
  <div
    id="product"
    className=" flex justify-between items-center md:flex-row flex-col-reverse w-full md:py-16  py-6"
  >
    <div className="flex-1 relative flex items-center md:mt-0 mt-6 ">
      <img
        src={bill}
        alt="bill"
        className="w-[90%] h-[90%] object-contain relative"
      />
      <div className="absolute top-5 -left-[50%] pink__gradient w-[60%] h-[40%] z-0" />
      <div className="absolute bottom-0 -left-[40%] blue__gradient w-[70%] h-[60%] z-1" />
    </div>
    <div className="flex-1 flex-col items-center w-full ">
      <h1 className={styles.heading2}>
        Easily control your billing & invoicing.
      </h1>
      <p
        className={`${styles.paragraph} md:max-w-[550px] min-w-[350px] w-[100%] my-2 `}
      >
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-row flex-wrap items-start gap-6 mt-6 ">
        <img
          src={apple}
          alt="apple"
          width={110}
          height={25}
          className={"cursor-pointer"}
        />
        <img
          src={google}
          alt="google"
          width={110}
          height={25}
          className={"cursor-pointer"}
        />
      </div>
    </div>
  </div>
);
export default CardDeal;
