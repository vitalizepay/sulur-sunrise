import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Sparkles, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-gradient-sky">
      {/* Floating decorations */}
      <motion.div className="absolute top-24 left-8 text-6xl" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }}>☁️</motion.div>
      <motion.div className="absolute top-40 right-10 text-5xl" animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}>⭐</motion.div>
      <motion.div className="absolute bottom-32 left-16 text-5xl" animate={{ y: [0, -25, 0] }} transition={{ duration: 6, repeat: Infinity }}>🌈</motion.div>
      <motion.div className="absolute top-1/2 right-1/4 text-4xl" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>🎈</motion.div>
      <motion.div className="absolute bottom-20 right-20 text-5xl" animate={{ y: [0, -18, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>🦋</motion.div>
      <motion.div className="absolute top-32 left-1/2 text-4xl" animate={{ y: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>✨</motion.div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft mb-6"
          >
            <Sparkles className="w-4 h-4 text-sunshine-yellow" />
            <span className="text-sm font-bold text-sunshine-blue-deep">Admissions Open 2026–2027</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Little Steps,</span>
            <br />
            <span className="text-gradient-blue">Big Dreams!</span>
            <span className="inline-block ml-2 animate-wiggle">🌟</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Welcome to <strong className="text-sunshine-blue-deep">Sunshine Pre School & Academy</strong> — where curiosity meets joy, and every little learner shines bright in a safe, loving, play-filled world.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#admissions" className="px-6 py-3 rounded-full bg-gradient-blue text-white font-bold shadow-soft hover:scale-105 transition-transform">
              Enroll Today
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-sunshine text-foreground font-bold shadow-bright hover:scale-105 transition-transform">
              Book a Visit
            </a>
            <a href="tel:7373256444" className="px-6 py-3 rounded-full bg-white text-sunshine-blue-deep font-bold shadow-soft hover:scale-105 transition-transform inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href="https://wa.me/917373256444" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold shadow-soft hover:scale-105 transition-transform inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur shadow-soft">
              <span className="w-2 h-2 rounded-full bg-sunshine-pink animate-pulse" />
              <span className="text-sm font-semibold">🎟️ Limited Seats</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur shadow-soft">
              <ShieldCheck className="w-4 h-4 text-sunshine-mint" />
              <span className="text-sm font-semibold">Safe Learning Environment</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur shadow-soft">
              <MapPin className="w-4 h-4 text-sunshine-blue" />
              <span className="text-sm font-semibold">Coimbatore</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Sun */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-sunshine opacity-30 blur-2xl"
            />
            <div className="absolute inset-8 rounded-[3rem] bg-white shadow-bright p-8 flex flex-col items-center justify-center text-center">
              <div className="text-8xl mb-4 animate-float">🎨</div>
              <div className="grid grid-cols-3 gap-4 text-5xl">
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>🧸</motion.span>
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }}>📚</motion.span>
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}>🎵</motion.span>
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2.1, repeat: Infinity, delay: 0.1 }}>🚂</motion.span>
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2.3, repeat: Infinity, delay: 0.3 }}>🌟</motion.span>
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}>🎈</motion.span>
              </div>
              <p className="mt-6 font-bold text-sunshine-blue-deep text-xl">Where Every Child Shines ✨</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
