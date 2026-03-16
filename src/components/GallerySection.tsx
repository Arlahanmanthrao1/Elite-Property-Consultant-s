import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import aboutImage from "@/assets/about-building.jpg";
import heroImage from "@/assets/hero-towers.jpg";
import contactBg from "@/assets/contact-bg.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const galleryImages = [
  { src: project1, alt: "The Verdant Project" },
  { src: heroImage, alt: "Elite Towers" },
  { src: project2, alt: "The Twins Project" },
  { src: aboutImage, alt: "Modern Architecture" },
  { src: project3, alt: "SkyMarq Project" },
  { src: contactBg, alt: "Luxury Amenities" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const goNext = () => setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const goPrev = () => setLightbox((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <section id="gallery" className="py-12 sm:py-[15vh] px-4 sm:px-6 md:px-12 bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        <div className="w-px h-12 sm:h-16 bg-gold mx-auto mb-6 sm:mb-8" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-display text-gold-bright text-center mb-10 sm:mb-16"
        >
          GALLERY
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="overflow-hidden cursor-pointer group"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[140px] sm:h-[220px] md:h-[280px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-background hover:text-gold-bright transition-elegant"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 sm:left-6 text-background hover:text-gold-bright transition-elegant"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 sm:right-6 text-background hover:text-gold-bright transition-elegant"
          >
            <ChevronRight size={36} />
          </button>
          <motion.img
            key={lightbox}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease }}
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-[90vw] max-h-[80vh] sm:max-w-full sm:max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
