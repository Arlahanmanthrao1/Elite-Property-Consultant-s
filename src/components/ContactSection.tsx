import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import contactBg from "@/assets/contact-bg.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY")
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );
  };

  return (
    <section id="contact" className="bg-surface-dark py-12 sm:py-[15vh] px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-display text-gold-bright mb-8 sm:mb-12">
            GET IN TOUCH WITH US
          </h2>

          {status === "success" ? (
            <div className="py-12 sm:py-16">
              <p className="font-display text-xl sm:text-2xl text-surface-dark-foreground">
                Inquiry Received.
              </p>
              <p className="font-body text-[14px] sm:text-[15px] text-surface-dark-foreground/60 mt-2">
                Our office will reach out shortly.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {[
                { name: "user_name", placeholder: "NAME*", type: "text" },
                { name: "user_phone", placeholder: "PHONE NO*", type: "tel" },
                { name: "user_email", placeholder: "EMAIL*", type: "email" },
                { name: "project_interested", placeholder: "PROJECT INTERESTED*", type: "text" },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="w-full bg-transparent border-b border-surface-dark-foreground/20 text-surface-dark-foreground font-body text-[14px] sm:text-[15px] tracking-wide py-3 sm:py-4 placeholder:text-surface-dark-foreground/40 focus:outline-none focus:border-gold-bright transition-elegant"
                />
              ))}
              <textarea
                name="message"
                placeholder="MESSAGE"
                rows={3}
                className="w-full bg-transparent border-b border-surface-dark-foreground/20 text-surface-dark-foreground font-body text-[14px] sm:text-[15px] tracking-wide py-3 sm:py-4 placeholder:text-surface-dark-foreground/40 focus:outline-none focus:border-gold-bright transition-elegant resize-y"
              />
              {status === "error" && (
                <p className="font-body text-[13px] text-destructive">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto bg-gold-bright text-foreground font-body text-[12px] sm:text-[13px] tracking-caps uppercase px-10 sm:px-12 py-3 sm:py-4 hover:bg-primary hover:text-primary-foreground transition-elegant disabled:opacity-50"
              >
                {status === "sending" ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="hidden lg:block overflow-hidden"
        >
          <img
            src={contactBg}
            alt="Luxury amenities"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-elegant"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
