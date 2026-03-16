import { motion } from "framer-motion";
import aboutImage from "@/assets/about-building.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-[20vh] px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="overflow-hidden border-4 border-gold-bright"
        >
          <img
            src={aboutImage}
            alt="About Elite Property Consultant's"
            className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-elegant hover:scale-[1.03]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-display text-primary mb-4">
            ABOUT EPC
          </h2>
          <p className="font-body text-[14px] sm:text-[15px] text-muted-foreground mb-4 sm:mb-6 tracking-wide leading-relaxed">
            Elite Property Consultant's — Your answer to a discerning lifestyle!
          </p>
          <p className="font-body text-[15px] sm:text-[17px] text-foreground/80 leading-relaxed mb-6 sm:mb-8">
            At Elite Property Consultant's, we are more than a real estate corporation. We take great pride in offering 
            transformational lifestyle experiences to our clients. Committed to building world-class properties with a 
            well-built emphasis on contemporary architecture, state-of-the-art construction and life-changing amenities, 
            our marquee projects are an honour of Southern India. We invite you to be a part of our extensive projects 
            that are benchmarked amongst the best, nationally and globally. With EPC, you don't just own an iconic 
            structure, but a whole new way of life.
          </p>
          <a
            href="#projects"
            className="inline-block font-body text-[12px] sm:text-[13px] tracking-caps uppercase bg-gold-bright text-foreground px-8 sm:px-10 py-3 sm:py-4 hover:bg-primary hover:text-primary-foreground transition-elegant"
          >
            READ MORE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
