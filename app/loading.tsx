"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100/60">
      <motion.div
        className="relative w-24 h-24"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/potapress-1.png"
          alt="PotaPress Loading"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      <motion.div
        className="mt-4 bg-neutral-200 rounded-full h-1 w-32"
        initial={{ width: 0 }}
        animate={{ width: 128 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
