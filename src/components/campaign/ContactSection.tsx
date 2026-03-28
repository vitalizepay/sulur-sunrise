import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, MapPin, Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 md:py-32 section-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">
            <span className="text-gradient-gold">CONTACT</span>
          </h2>
          <p className="font-tamil text-2xl text-dmk-gold">தொடர்பு கொள்ளுங்கள்</p>
        </div>

        <div className={`max-w-3xl mx-auto grid sm:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="mailto:thalapathimurugesandmk@gmail.com" className="flex items-center gap-4 p-6 rounded-xl bg-secondary/50 border border-secondary hover:border-dmk-red/30 transition-colors group">
            <Mail className="w-8 h-8 text-dmk-red group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm text-primary-foreground/60">Email</p>
              <p className="text-primary-foreground text-sm font-medium break-all">thalapathimurugesandmk@gmail.com</p>
            </div>
          </a>
          <div className="flex items-center gap-4 p-6 rounded-xl bg-secondary/50 border border-secondary">
            <MapPin className="w-8 h-8 text-dmk-red" />
            <div>
              <p className="text-sm text-primary-foreground/60">Location</p>
              <p className="text-primary-foreground font-medium">Sulur, Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className={`flex justify-center gap-6 mt-12 transition-all duration-700 delay-400 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {[
            { icon: Facebook, label: "Facebook" },
            { icon: Instagram, label: "Instagram" },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="w-14 h-14 rounded-full bg-secondary/50 border border-secondary flex items-center justify-center text-primary-foreground/70 hover:text-dmk-gold hover:border-dmk-gold/50 hover:scale-110 transition-all duration-300"
            >
              <s.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
