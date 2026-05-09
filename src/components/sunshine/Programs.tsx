import { motion } from "framer-motion";

const programs = [
  { emoji: "🍼", title: "Day Care", desc: "Safe, loving care for your little ones throughout the day.", color: "bg-sunshine-pink/20" },
  { emoji: "🎒", title: "After School Care", desc: "Homework help, snacks and play after school hours.", color: "bg-sunshine-mint/20" },
  { emoji: "🧸", title: "Play Group", desc: "Where tiny tots make their first friends through play.", color: "bg-sunshine-yellow/30" },
  { emoji: "🎨", title: "Pre KG", desc: "Creative foundations with colors, sounds and stories.", color: "bg-sunshine-lavender/30" },
  { emoji: "📚", title: "LKG", desc: "Letters, numbers and curiosity-led discovery.", color: "bg-sunshine-peach/30" },
  { emoji: "✏️", title: "UKG", desc: "School-ready skills with confidence and joy.", color: "bg-sunshine-blue/20" },
];

const Programs = () => (
  <section id="programs" className="py-20 md:py-28 bg-gradient-sky relative overflow-hidden">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white shadow-soft text-sunshine-blue-deep font-bold text-sm mb-4">Our Programs</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Programs That <span className="text-gradient-blue">Spark Joy</span></h2>
        <p className="text-lg text-muted-foreground">Age-appropriate programs designed to nurture every stage of your child's early years.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl bg-white p-8 shadow-card hover:shadow-bright transition-all"
          >
            <div className={`w-20 h-20 rounded-2xl ${p.color} flex items-center justify-center text-5xl mb-5 group-hover:scale-110 transition-transform`}>
              {p.emoji}
            </div>
            <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
            <p className="text-muted-foreground">{p.desc}</p>
            <div className="mt-5 inline-flex items-center gap-1 text-sunshine-blue-deep font-bold text-sm">
              Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Programs;
