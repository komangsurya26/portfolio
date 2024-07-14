"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    desc: "I build websites and web applications with ReactJS and NextJS",
    href: ""
  },
  {
    num: "02",
    title: "Backend Development",
    desc: "I build websites and web applications with ReactJS and NextJS",
    href: ""
  },
  {
    num: "03",
    title: "Fullstack Development",
    desc: "I build websites and web applications with ReactJS and NextJS",
    href: ""
  }
];

const Service = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 xl:pt-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.5, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <Link key={index} href={service.href}>
                <div className="flex flex-col gap-6 group">
                  {/* top */}
                  <div className="w-full flex items-center justify-between">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                    <BsArrowDownRight className="text-3xl group-hover:-rotate-45 group-hover:text-accent transition-all duration-500"/>
                  </div>
                  {/* title */}
                  <h2 className="text-3xl font-bold leading-none group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  {/* description */}
                  <p className="text-white/60">{service.desc}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Service