import React from "react";
import styles from "../style";
import GetStarted from "./GetStarted";
import { discount, robot } from "../assets";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div id="hero" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`felx-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  `}
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
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                default: {
                  duration: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                },
                scale: {
                  type: "spring",
                  damping: 3,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <GetStarted />
            </motion.div>
          </div>
        </div>
        <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%] relative z-[5] "
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </div>
  );
}

export default Hero;
