import { motion } from "framer-motion";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";
import activityRoom from "@/assets/activity-room.jpg";
import playArea from "@/assets/play-area.jpg";
import rideArea from "@/assets/ride-area.jpg";
import exterior from "@/assets/school-exterior.jpg";

const images = [
  { src: exterior, label: "Welcoming Campus", span: "md:col-span-2 md:row-span-2" },
  { src: classroom1, label: "Bright Classroom", span: "" },
  { src: activityRoom, label: "Activity Hall", span: "" },
  { src: playArea, label: "Play Zone", span: "" },
  { src: classroom2, label: "Learning Corner", span: "" },
  { src: rideArea, label: "Ride & Play", span: "md:col-span-2" },
];

const Environment = () => (
  <section id="gallery" className="py-20 md:py-28 relative overflow-hidden">
    <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-sunshine-yellow/20 blur-3xl" />
    <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-sunshine-pink/20 blur-3xl" />

    <div className="container relative">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-sunshine-yellow/30 text-sunshine-blue-deep font-bold text-sm mb-4">Our Campus</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Where Every Child <span className="text-gradient-blue">Shines</span> ✨</h2>
        <p className="text-lg text-muted-foreground">A joyful, colorful and safe environment crafted for little explorers.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`group relative overflow-hidden rounded-3xl shadow-card ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.label}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sunshine-blue-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <h4 className="text-white font-bold text-lg">{img.label}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Environment;
