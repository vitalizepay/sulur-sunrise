import { motion } from "framer-motion";
import { Smile, Palette, Activity, ShieldCheck, Baby, GraduationCap } from "lucide-react";

const items = [
  { icon: Smile, title: "Social & Emotional Development", desc: "Building empathy, friendships and confidence.", color: "from-sunshine-pink to-sunshine-peach" },
  { icon: Palette, title: "Creative Learning Environment", desc: "Art, music and imagination in every corner.", color: "from-sunshine-yellow to-sunshine-peach" },
  { icon: Activity, title: "Physical Development Activities", desc: "Active play, dance, yoga and outdoor fun.", color: "from-sunshine-mint to-sunshine-blue" },
  { icon: ShieldCheck, title: "Safe & Secure Campus", desc: "CCTV-monitored, child-proof spaces.", color: "from-sunshine-blue to-sunshine-lavender" },
  { icon: Baby, title: "Child-Centered Teaching", desc: "Every child learns at their own joyful pace.", color: "from-sunshine-lavender to-sunshine-pink" },
  { icon: GraduationCap, title: "Experienced Teachers", desc: "Caring, trained early-childhood educators.", color: "from-sunshine-peach to-sunshine-yellow" },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-sunshine-yellow/30 text-sunshine-blue-deep font-bold text-sm mb-4">Why Choose Us</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Your Child's <span className="text-gradient-blue">Brightest Future</span></h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-white p-7 shadow-card hover:shadow-bright transition-all border border-border/50"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${it.color} flex items-center justify-center text-white mb-4`}>
              <it.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">{it.title}</h3>
            <p className="text-muted-foreground">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
