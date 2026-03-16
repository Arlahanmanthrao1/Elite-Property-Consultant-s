import { useState, useEffect, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

const EnquiryPopup = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("enquiry_shown");
    if (!seen) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("enquiry_shown", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          setStatus("success");
          setTimeout(() => setOpen(false), 2000);
        },
        () => setStatus("error")
      );
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-background w-full max-w-md p-8 relative shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-elegant"
            >
              <X size={20} />
            </button>

            <div className="w-px h-10 bg-gold mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-light tracking-display text-primary text-center mb-2">
              Quick Enquiry
            </h3>
            <p className="font-body text-[13px] text-muted-foreground text-center mb-8">
              Let us help you find your dream property
            </p>

            {status === "success" ? (
              <div className="text-center py-8">
                <p className="font-display text-xl text-primary">Thank You!</p>
                <p className="font-body text-[13px] text-muted-foreground mt-2">We'll contact you shortly.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "user_name", placeholder: "Your Name *", type: "text" },
                  { name: "user_phone", placeholder: "Phone Number *", type: "tel" },
                  { name: "user_email", placeholder: "Email Address *", type: "email" },
                  { name: "project_interested", placeholder: "Project Interested In", type: "text" },
                ].map((field) => (
                  <input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.name !== "project_interested"}
                    className="w-full bg-transparent border-b border-border text-foreground font-body text-[14px] tracking-wide py-3 placeholder:text-muted-foreground focus:outline-none focus:border-gold-bright transition-elegant"
                  />
                ))}
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={2}
                  className="w-full bg-transparent border-b border-border text-foreground font-body text-[14px] tracking-wide py-3 placeholder:text-muted-foreground focus:outline-none focus:border-gold-bright transition-elegant resize-none"
                />
                {status === "error" && (
                  <p className="font-body text-[12px] text-destructive">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gold-bright text-foreground font-body text-[13px] tracking-caps uppercase py-4 hover:bg-primary hover:text-primary-foreground transition-elegant disabled:opacity-50"
                >
                  {status === "sending" ? "SENDING..." : "SUBMIT ENQUIRY"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryPopup;
