import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Orbs } from "./Orbs";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen noise">
      <Orbs />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 pt-28"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}