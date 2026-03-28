import campaignPoster from "@/assets/campaign-poster.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary" />
      
      {/* Animated rays */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] animate-rising-sun opacity-20">
          <div className="w-full h-full rounded-full" style={{
            background: "radial-gradient(circle, hsla(51,100%,50%,0.4) 0%, hsla(0,100%,50%,0.2) 40%, transparent 70%)"
          }} />
        </div>
      </div>

      {/* Ray lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-ray-rotate opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-[600px] origin-bottom"
              style={{
                background: "linear-gradient(to top, hsl(0,100%,50%), transparent)",
                transform: `rotate(${i * 30}deg)`,
                left: "50%",
                bottom: "50%",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-24 pb-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="font-tamil text-accent text-lg md:text-xl mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            சூலூர் சட்டமன்ற தொகுதி
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            THALAPATHI
            <br />
            <span className="text-gradient-gold">MURUGESAN</span>
          </h1>
          <p className="font-tamil text-2xl md:text-3xl text-primary-foreground/90 mb-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            தளபதி முருகேசன்
          </p>
          <p className="text-primary-foreground/70 text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            DMK Candidate for Sulur | சூலூர் தொகுதி வேட்பாளர்
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <a href="#volunteer" className="btn-campaign-primary animate-pulse-glow">
              🔴 Vote for Thalapathi
            </a>
            <a href="#volunteer" className="btn-campaign-gold">
              🟡 Join Campaign
            </a>
          </div>
          <p className="font-tamil text-accent/80 mt-6 text-lg animate-fade-in" style={{ animationDelay: "1.1s" }}>
            நம்மில் ஒருவர்! நமக்கான ஒருவர்!
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center animate-scale-in" style={{ animationDelay: "0.5s" }}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-50" style={{
              background: "radial-gradient(circle, hsla(0,100%,50%,0.3), transparent 70%)"
            }} />
            <img
              src={campaignPoster}
              alt="Thalapathi Murugesan - DMK Campaign"
              className="relative rounded-2xl shadow-2xl max-w-sm md:max-w-md lg:max-w-lg w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
