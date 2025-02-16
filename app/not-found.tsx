"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-neutral-100/60">
      <motion.div
        className="relative w-32 h-32 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/potapress-1.png"
          alt="PotaPress 404"
          fill
          className="object-contain opacity-50"
          priority
        />
      </motion.div>
      <motion.h2
        className="text-2xl font-bold text-neutral-900 mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Sayfa Bulunamadı
      </motion.h2>
      <motion.p
        className="text-neutral-700 mb-8 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          href="/"
          className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors inline-block"
        >
          Ana Sayfaya Dön
        </Link>
      </motion.div>
    </div>
  );
}
