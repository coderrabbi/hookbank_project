import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "../components/Button";
import { star } from "../assets";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Typography from "@mui/material/Typography";
import { motion, useMotionValue, useTransform } from "framer-motion";

function Business() {
  // const x = useMotionValue(200);
  // const y = useMotionValue(200);

  // const rotateX = useTransform(y, [0, 400], [45, -45]);
  // const rotateY = useTransform(x, [0, 400], [-45, 45]);

  // function handleMouse(event) {
  //   const rect = event.currentTarget.getBoundingClientRect();

  //   x.set(event.clientX - rect.left);
  //   y.set(event.clientY - rect.top);
  // }

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <motion.div
          style={{ cursor: "grab" }}
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
          initial={{ left: "-36%" }}
          whileInView={{ left: "-15%" }}
          dragElastic={0.5}
          whileTap={{ cursor: "pointer" }}
        >
          <Button styles="mt-10" />
        </motion.div>
      </div>
      <div className={`${layout.sectionInfo}`}>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
    </section>
  );
}

export default Business;
