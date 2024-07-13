"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.8, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-72 h-72 xl:w-96 xl:h-96 mix-blend-lighten absolute"
        >
          <Image
            src="/assets/komang.jpg"
            sizes="(100vw - 8px)"
            alt="komang"
            priority
            quality={100}
            fill
            className="object-cover rounded-full mix-blend-lighten"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          fill={"transparent"}
          viewBox={"0 0 506 506"}
          xmlns={"http://www.w3.org/2000/svg"}
          className="w-72 h-72 xl:w-96 xl:h-96"
        >
          <motion.circle
            cx={"253"}
            cy={"253"}
            r={"250"}
            stroke={"#00ff99"}
            strokeWidth={"4"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo