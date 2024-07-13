"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
const path = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={path}>
            <div className="h-screen w-screen fixed left-0 top-0 right-0 pointer-events-none z-40 flex">
                <Stairs />
            </div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default StairTransition