import { motion } from "framer-motion";

const activities = [
  { emoji: "♟️", name: "Chess", color: "bg-sunshine-blue/20" },
  { emoji: "🎨", name: "Drawing", color: "bg-sunshine-pink/20" },
  { emoji: "🎹", name: "Musical Instruments", color: "bg-sunshine-yellow/30" },
  { emoji: "🧘", name: "Yoga", color: "bg-sunshine-mint/30" },
  { emoji: "💃", name: "Dance", color: "bg-sunshine-lavender/30" },
  { emoji: "🥋", name: "Karate", color: "bg-sunshine-peach/30" },
  { emoji: "✂️", name: "Art & Craft", color: "bg-sunshine-pink/20" },
  { emoji: "🤸", name: "Fitness", color: "bg-sunshine-blue/20" },
  { emoji: "📖", name: "Tuition", color: "bg-sunshine-yellow/30" },
  { emoji: "🖊️", name: "Handwriting", color: "bg-sunshine-mint/20" },
];

const Activities = () => (
  <section id="activities" className="py-20 md:py-28 bg-gradient-sky">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white shadow-soft text-sunshine-blue-deep font-bold text-sm mb-4">Activities</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover, Play & <span className="text-gradient-blue">Grow Every Day</span></h2>
        <p className="text-lg text-muted-foreground">Beyond the classroom — explore talents and passions through enriching activities.</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
        {activities.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ rotate: [-1, 1, -1, 0], y: -6 }}
            className={`rounded-3xl ${a.color} p-6 md:p-8 text-center shadow-card hover:shadow-bright transition-all cursor-pointer`}
          >
            <div className="text-6xl md:text-7xl mb-3 inline-block">{a.emoji}</div>
            <h3 className="text-lg md:text-xl font-bold">{a.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Activities;
