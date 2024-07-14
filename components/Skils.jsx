"use client";

import {
  DiGit,
  DiGithubFull,
  DiJavascript1,
  DiLaravel,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiPhp,
  DiPostgresql,
  DiReact,
  DiWordpress,
} from "react-icons/di";
import { motion } from "framer-motion";

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
  return (
    <section>
      {/* first */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.5, ease: "easeIn" },
        }}
        className="flex"
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex"
        >
          {images.map((image, index) => {
            return (
              <div key={index} className="text-7xl pr-10">
                {image.icon}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex"
        >
          {images.map((image, index) => {
            return (
              <div key={index} className="text-7xl pr-10">
                {image.icon}
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* second */}
      {/* <div className="flex">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              {images.map((image, index) => {
                return (
                  <div key={index} className="text-7xl pr-10">
                    {image.icon}
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              {images.map((image, index) => {
                return (
                  <div key={index} className="text-7xl pr-10">
                    {image.icon}
                  </div>
                );
              })}
            </motion.div>
          </div> */}
    </section>
  );
};

export default Skils;
