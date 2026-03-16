import { motion } from "framer-motion";
import { Award, Building, Hammer, Heart } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { icon: Award, label: "YEARS OF LEGACY", value: "15+" },
  { icon: Building, label: "PROJECTS COMPLETED", value: "15+" },
  { icon: Hammer, label: "UNITS", value: "1750+" },
  { icon: Heart, label: "HAPPY FAMILIES", value: "2000+" },
];

const StatsSection = () => {
  return (
    <section className="bg-gold/20 py-12 sm:py-[12vh] px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-gold-bright/20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 text-center sm:text-left"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dashed border-foreground/30 flex items-center justify-center flex-shrink-0">
                <stat.icon size={24} className="text-foreground/70 sm:w-7 sm:h-7" strokeWidth={1} />
              </div>
              <div>
                <p className="font-body text-[10px] sm:text-[11px] tracking-caps text-foreground/70 uppercase">{stat.label}</p>
                <p className="font-display text-2xl sm:text-3xl font-light text-foreground">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
