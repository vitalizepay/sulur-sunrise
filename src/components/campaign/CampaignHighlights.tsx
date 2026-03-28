import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Villages Covered", tamil: "கிராமங்கள்" },
  { value: 50000, suffix: "+", label: "Supporters", tamil: "ஆதரவாளர்கள்" },
  { value: 200, suffix: "+", label: "Public Meetings", tamil: "பொதுக்கூட்டங்கள்" },
  { value: 25, suffix: "+", label: "Years of Service", tamil: "ஆண்டுகள் சேவை" },
];

const Counter = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const CampaignHighlights = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="campaign" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            CAMPAIGN <span className="text-gradient-red">HIGHLIGHTS</span>
          </h2>
          <p className="font-tamil text-2xl text-dmk-red">பிரச்சார சிறப்பம்சங்கள்</p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center p-6 rounded-2xl border border-border bg-muted/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-dmk-red mb-2">
                <Counter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </p>
              <p className="font-semibold text-foreground text-sm">{stat.label}</p>
              <p className="font-tamil text-muted-foreground text-xs">{stat.tamil}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className={`max-w-2xl mx-auto transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {[
            { title: "Active Field Campaigning", tamil: "களப் பிரச்சாரம்", desc: "Direct engagement with farmers and rural communities across Sulur." },
            { title: "Strong Cadre Support", tamil: "வலுவான தொண்டர் படை", desc: "Thousands of dedicated party workers driving the campaign forward." },
            { title: "Leadership under M.K. Stalin", tamil: "மு.க. ஸ்டாலின் தலைமையில்", desc: "Continuing the Dravidian model of governance for Tamil Nadu's progress." },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-dmk-red shadow-lg" style={{ boxShadow: "var(--shadow-glow-red)" }} />
                {i < 2 && <div className="w-0.5 flex-1 bg-gradient-to-b from-dmk-red to-transparent" />}
              </div>
              <div className="pb-8">
                <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                <p className="font-tamil text-dmk-red text-sm mb-1">{item.tamil}</p>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignHighlights;
