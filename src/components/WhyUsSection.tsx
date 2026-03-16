import { motion } from "framer-motion";
import { Building2, Users, ShieldCheck, Search } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  { icon: Building2, title: "WORLD CLASS INFRASTRUCTURE" },
  { icon: Users, title: "CUSTOMER CENTRIC APPROACH" },
  { icon: ShieldCheck, title: "UNCOMPROMISING BUSINESS ETHICS" },
  { icon: Search, title: "TRANSPARENCY" },
];

const WhyUsSection = () => {
  return (
    <section className="bg-surface-dark py-12 sm:py-[15vh] px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="w-px h-12 sm:h-16 bg-gold mx-auto mb-6 sm:mb-8" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-display text-gold-bright mb-3"
        >
          WHY EPC?
        </motion.h2>
        <p className="font-body text-[13px] sm:text-[15px] text-surface-dark-foreground/60 tracking-wide mb-10 sm:mb-16">
          Excellence in Residential & Commercial Projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="bg-background p-6 sm:p-10 flex flex-col items-center gap-4 sm:gap-6 shadow-elegant"
            >
              <f.icon size={40} className="text-gold sm:w-12 sm:h-12" strokeWidth={1} />
              <p className="font-body text-[12px] sm:text-[13px] tracking-caps text-foreground font-medium">{f.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
