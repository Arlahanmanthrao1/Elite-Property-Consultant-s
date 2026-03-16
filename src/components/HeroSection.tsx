import { motion } from "framer-motion";
import heroImage from "@/assets/hero-towers.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-svh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="The Twins by Elite Property Consultant's" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
          className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-display text-background mb-4 sm:mb-6"
        >
          Discretion is the
          <br />
          ultimate luxury.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="font-body text-[11px] sm:text-[13px] tracking-caps uppercase text-background/70 mb-6 sm:mb-10"
        >
          Elite Property Consultant's — Builders & Developers
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="inline-block font-body text-[11px] sm:text-[13px] tracking-caps uppercase border border-background/40 text-background px-6 sm:px-10 py-3 sm:py-4 hover:bg-background hover:text-foreground transition-elegant"
        >
          Request a Private Viewing
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
