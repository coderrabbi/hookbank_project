import React from "react";
import { stats } from "../constants";
import styles from "../style";
function Stats() {
  return (
    <>
      <section
        className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
      >
        {stats.map((stats, index) => {
          return (
            <div
              className="flex-1 flex justify-center items-center flex-row m-3"
              kye={stats.id}
            >
              <h4 className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] sm:leading-[53px] leading-[30px]">
                {stats.value}
              </h4>
              <p className="font-poppins font-normal sm:text-[20px] text-[15] sm:leadding-[26px] leading-[21px] text-gradient uppercase ml-3">
                {stats.title}
              </p>
              {"     "}
              {"     "}|
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Stats;
