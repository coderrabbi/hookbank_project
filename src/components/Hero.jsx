import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
function Hero() {
  return (
    <div id="hero" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`felx-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[16px] mb-2`}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount For
            <span className="text-white"> 1 Month </span>
            Account
          </p>
        </div>
        <div className="flex flex-row w-full justify-center items-center">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br />
            <span className="text-gradient">Generation</span> <br />
            Payment Method.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
