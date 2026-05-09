import { motion } from "framer-motion";
import { Heart, Sparkles, Award } from "lucide-react";

const About = () => (
  <section id="about" className="py-20 md:py-28 relative overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-sunshine-yellow/30 blur-2xl" />
        <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-sunshine-pink/30 blur-2xl" />
        <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl bg-gradient-sunshine flex items-center justify-center text-7xl shadow-card">🌞</div>
            <div className="aspect-[4/5] rounded-3xl bg-sunshine-pink/30 flex items-center justify-center text-7xl shadow-card">🎨</div>
          </div>
          <div className="space-y-4 mt-8">
            <div className="aspect-[4/5] rounded-3xl bg-sunshine-mint/30 flex items-center justify-center text-7xl shadow-card">📚</div>
            <div className="aspect-square rounded-3xl bg-gradient-blue flex items-center justify-center text-7xl shadow-card">🧸</div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-sunshine-yellow/30 text-sunshine-blue-deep font-bold text-sm mb-4">About Us</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Nurturing Young Minds with <span className="text-gradient-blue">Love & Learning</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          At Sunshine Pre School & Academy, we believe every child is unique and full of potential. Our nurturing environment blends play-based learning, creativity, and care to help your little one bloom into a confident, curious, and kind young learner.
        </p>

        <div className="space-y-4">
          {[
            { icon: Heart, title: "Loving & Caring Teachers", desc: "Trained educators who treat every child like family." },
            { icon: Sparkles, title: "Play-Based Curriculum", desc: "Learning through fun, hands-on, joyful experiences." },
            { icon: Award, title: "Holistic Development", desc: "Physical, social, emotional, and cognitive growth." },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-soft hover:shadow-bright transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-blue flex items-center justify-center text-white">
                <f.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">{f.title}</h4>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
