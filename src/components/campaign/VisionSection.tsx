import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Wheat, Tractor, Briefcase, GraduationCap, HeartPulse, Route } from "lucide-react";

const visionItems = [
  { icon: Wheat, title: "Farmer Welfare", tamil: "விவசாயிகள் நலன்", desc: "Comprehensive support programs for farmers including MSP guarantees and crop insurance." },
  { icon: Tractor, title: "Agriculture Dev", tamil: "வேளாண்மை வளர்ச்சி", desc: "Modern irrigation, organic farming promotion, and agricultural technology centers." },
  { icon: Briefcase, title: "Employment", tamil: "வேலைவாய்ப்பு", desc: "Skill development centers and industrial growth to create thousands of local jobs." },
  { icon: GraduationCap, title: "Education", tamil: "கல்வி", desc: "Quality schools, free coaching centers, and scholarships for higher education." },
  { icon: HeartPulse, title: "Healthcare", tamil: "சுகாதாரம்", desc: "New health centers, mobile medical units, and affordable healthcare for all." },
  { icon: Route, title: "Infrastructure", tamil: "உள்கட்டமைப்பு", desc: "Better roads, public transport, drinking water, and smart city initiatives." },
];

const VisionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="vision" className="py-20 md:py-32 section-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">
            VISION FOR <span className="text-gradient-gold">SULUR</span>
          </h2>
          <p className="font-tamil text-2xl text-dmk-gold">
            சூலூருக்கான தொலைநோக்குப் பார்வை
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionItems.map((item, i) => (
            <div
              key={i}
              className={`card-vision bg-secondary border-secondary/50 group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="p-3 rounded-xl bg-dmk-red/20 w-fit mb-4 group-hover:bg-dmk-red/30 transition-colors">
                <item.icon className="w-8 h-8 text-dmk-red" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">{item.title}</h3>
              <p className="font-tamil text-dmk-gold text-sm mb-3">{item.tamil}</p>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
