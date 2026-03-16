import eliteLogo from "@/assets/elite-logo.png";
import { Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-surface-dark-foreground/10 py-10 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
        <div>
          <img src={eliteLogo} alt="Elite Property Consultant's" className="h-16 sm:h-20 w-auto mb-4 brightness-150" />
          <p className="font-body text-[14px] sm:text-[15px] text-surface-dark-foreground/60 leading-relaxed">
            A real estate group that is rooted in the values of trust, reliability & integrity.
          </p>
          <div className="flex items-center gap-4 mt-4">
            {[
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Youtube, href: "https://youtube.com" },
              { icon: Facebook, href: "https://facebook.com" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground/50 hover:text-gold-bright transition-elegant">
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-body text-[12px] sm:text-[13px] tracking-caps text-surface-dark-foreground font-semibold mb-4 sm:mb-6">USEFUL LINKS</h4>
          <div className="flex flex-col gap-2 sm:gap-3">
            {["Home", "About Us", "Gallery", "Careers", "Contact Us"].map((link) => (
              <a key={link} href="#" className="font-body text-[14px] sm:text-[15px] text-surface-dark-foreground/60 hover:text-gold-bright transition-elegant">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-body text-[12px] sm:text-[13px] tracking-caps text-surface-dark-foreground font-semibold mb-4 sm:mb-6">PROJECTS</h4>
          <div className="flex flex-col gap-2 sm:gap-3">
            {["Residential Ongoing", "Residential Completed", "Commercial Ongoing", "Upcoming Projects"].map((link) => (
              <a key={link} href="#" className="font-body text-[14px] sm:text-[15px] text-surface-dark-foreground/60 hover:text-gold-bright transition-elegant">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-body text-[12px] sm:text-[13px] tracking-caps text-surface-dark-foreground font-semibold mb-4 sm:mb-6">CONTACT</h4>
          <div className="space-y-2 sm:space-y-3 font-body text-[14px] sm:text-[15px] text-surface-dark-foreground/60">
            <p>West Venkatapuram, Alwal, Secunderabad, Telangana 500015</p>
            <p>Email: sales@elitepropertyconsultants.in</p>
            <p>Phone: 083099 19432</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-surface-dark-foreground/10">
        <p className="font-body text-[12px] sm:text-[13px] text-surface-dark-foreground/40 text-center">
          © 2026 Elite Property Consultant's | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
