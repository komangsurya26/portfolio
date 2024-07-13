"use client";

import { DiGit, DiGithubFull, DiJavascript1, DiLaravel, DiMongodb, DiMysql, DiNodejsSmall, DiPhp, DiPostgresql, DiReact, DiWordpress } from "react-icons/di";
import { useMotionValue, animate, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

const images = [
  {
    name: "Javascript",
    icon: <DiJavascript1 />,
  },
  {
    name: "PHP",
    icon: <DiPhp />,
  },
  {
    name: "Laravel",
    icon: <DiLaravel />,
  },
  {
    name: "React",
    icon: <DiReact />,
  },
  {
    name: "Node.js",
    icon: <DiNodejsSmall />,
  },
  {
    name: "Wordpress",
    icon: <DiWordpress />,
  },
  {
    name: "MySQL",
    icon: <DiMysql />,
  },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql />,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb />,
  },
  {
    name: "Git",
    icon: <DiGit />,
  },
  {
    name: "GitHub",
    icon: <DiGithubFull />,
  },
];

const Skils = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {    
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      duration: 15,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => controls.stop();
  }, [xTranslation, width]);

  return (
    <section className="overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
        className="py-12"
      >
        <motion.div
          ref={ref}
          className="flex gap-16"
          style={{ x: xTranslation }}
        >
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="rounded-md bg-primary flex items-center justify-center text-white text-7xl"
            >
              {image.icon}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skils;
