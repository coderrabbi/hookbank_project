import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
function GetStarted() {
  return (
    <div
      className={`${styles.flexStart} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col gap-[3px] w-[100%] h-[100%] rounded-full bg-primary  `}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="text-gradient font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="mr-2">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrowUp"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="text-gradient font-poppins font-medium text-[18px] leading-[23.4px]">
          <span> Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
