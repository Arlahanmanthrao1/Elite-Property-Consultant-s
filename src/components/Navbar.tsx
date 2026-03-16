import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Youtube, Facebook, Phone } from "lucide-react";
import eliteLogo from "@/assets/elite-logo.png";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT US", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-20 sm:h-24">
        <a href="#home">
          <img src={eliteLogo} alt="Elite Property Consultant's" className="h-14 sm:h-20 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[12px] lg:text-[13px] tracking-caps text-foreground/70 hover:text-primary transition-elegant"
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-6 bg-border mx-1" />
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-gold-bright transition-elegant"
            >
              <s.icon size={18} />
            </a>
          ))}
          <a href="tel:08309919432" className="flex items-center gap-1.5 text-gold-bright font-body text-[12px] lg:text-[13px] tracking-wide">
            <Phone size={14} />
            083099 19432
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 sm:px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-[13px] tracking-caps text-foreground/70 hover:text-primary transition-elegant"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 hover:text-gold-bright transition-elegant"
                  >
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
              <a href="tel:08309919432" className="flex items-center gap-1.5 text-gold-bright font-body text-[13px]">
                <Phone size={14} />
                083099 19432
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
