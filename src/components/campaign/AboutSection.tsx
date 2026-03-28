import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import inaugurationImg from "@/assets/inauguration.png";
import { Users, Award, Landmark, Sprout } from "lucide-react";

const highlights = [
  { icon: Landmark, label: "District Secretary (South)", sublabel: "கோயம்புத்தூர் மாவட்ட செயலாளர்" },
  { icon: Award, label: "Former Town Panchayat President", sublabel: "கண்ணம்பாளையம் நகர பஞ்சாயத்து தலைவர்" },
  { icon: Users, label: "Grassroots Leader", sublabel: "மக்கள் தொடர்பு கொண்ட தலைவர்" },
  { icon: Sprout, label: "Farmer Engagement Champion", sublabel: "விவசாயிகளின் நண்பன்" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            ABOUT <span className="text-gradient-red">THALAPATHI</span>
          </h2>
          <p className="font-tamil text-2xl text-dmk-red">
            தளபதி முருகேசன் பற்றி
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-dmk-red/20 to-dmk-gold/20 blur-xl" />
              <img
                src={inaugurationImg}
                alt="Thalapathi Murugesan inaugurating a project"
                className="relative rounded-2xl shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Thalapathi Murugesan is a dedicated DMK leader and the District Secretary (South) of Coimbatore. 
              With years of grassroots experience and a deep connection with the people of Sulur, he has been at 
              the forefront of community development, farmer welfare, and public service.
            </p>
            <p className="font-tamil text-muted-foreground text-lg leading-relaxed mb-10">
              தளபதி முருகேசன் ஒரு அர்ப்பணிப்புள்ள திமுக தலைவர். சூலூர் மக்களின் நலனுக்காக 
              தொடர்ந்து பாடுபட்டு வருகிறார்.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-dmk-red/30 transition-colors">
                  <div className="p-2 rounded-lg bg-dmk-red/10">
                    <item.icon className="w-6 h-6 text-dmk-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="font-tamil text-muted-foreground text-xs mt-1">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
