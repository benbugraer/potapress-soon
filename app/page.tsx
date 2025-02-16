"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import XLogo from "@/public/social-media/x-logo";
import InstagramLogo from "@/public/social-media/instagram-logo";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 md:p-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100/60 via-neutral-200/60 to-neutral-300/60 z-0" />

      {/* Animated Background Circles */}
      <motion.div
        className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-200/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-orange-200/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto relative z-10 px-4 sm:px-8"
      >
        <motion.div
          className="relative w-32 sm:w-48 h-32 sm:h-48 mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Image
            src="/potapress-1.png"
            alt="PotaPress Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-neutral-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          PotaPress Çok Yakında Sizlerle
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-neutral-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Türkiye&apos;nin en kapsamlı basketbol haber platformu çok yakında
          yayında!
        </motion.p>

        {/* Logo Container */}
        <motion.div
          className="flex items-center justify-center gap-6 sm:gap-12 mb-8 sm:mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-24 sm:w-32 h-24 sm:h-32 p-3 sm:p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg transition-shadow hover:shadow-xl"
          >
            <Image
              src="/nba@logotyp.us.svg"
              alt="NBA Logo"
              fill
              className="object-contain p-2"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-24 sm:w-32 h-24 sm:h-32 p-3 sm:p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg transition-shadow hover:shadow-xl"
          >
            <Image
              src="/euroleague@logotyp.us.png"
              alt="EuroLeague Logo"
              fill
              className="object-contain p-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Social Media Footer */}
      <motion.div
        className="w-full flex flex-col items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.p
          className="text-base sm:text-lg font-medium text-neutral-700 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Bizi Takip Edin
        </motion.p>
        <div className="flex items-center gap-6">
          <motion.a
            href="https://twitter.com/potapress"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <XLogo className="w-5 sm:w-6 h-5 sm:h-6 text-neutral-700 hover:text-blue-600 transition-colors" />
          </motion.a>
          <motion.a
            href="https://instagram.com/potapress"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <InstagramLogo className="w-5 sm:w-6 h-5 sm:h-6 text-neutral-700 hover:text-orange-600 transition-colors" />
          </motion.a>
        </div>
      </motion.div>
    </main>
  );
}
