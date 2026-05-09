import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Priya R.", role: "Mother of Aarav (UKG)", text: "My son comes home singing every day! The teachers are so loving and the activities are amazing. Best decision we made.", avatar: "👩🏽" },
  { name: "Karthik S.", role: "Father of Diya (Pre KG)", text: "The campus is safe, clean and so colorful. Diya looks forward to school every morning. Thank you Sunshine!", avatar: "👨🏽" },
  { name: "Meena V.", role: "Mother of Vihaan (Day Care)", text: "As a working mom, I have complete peace of mind. The staff treats my baby like their own. Truly grateful.", avatar: "👩🏽‍🦱" },
  { name: "Anand P.", role: "Father of Sara (LKG)", text: "Sara has grown so confident and creative. The teachers focus on each child individually. Highly recommend.", avatar: "👨🏽‍🦰" },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % reviews.length);
  const prev = () => setI((i - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 md:py-28 bg-gradient-sky">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white shadow-soft text-sunshine-blue-deep font-bold text-sm mb-4">Happy Parents</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by <span className="text-gradient-blue">Families</span> 💛</h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-card text-center"
            >
              <div className="text-7xl mb-4">{reviews[i].avatar}</div>
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-5 h-5 fill-sunshine-yellow text-sunshine-yellow" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-foreground mb-6 italic">"{reviews[i].text}"</p>
              <div className="font-bold text-sunshine-blue-deep text-lg">{reviews[i].name}</div>
              <div className="text-muted-foreground text-sm">{reviews[i].role}</div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center hover:scale-110 transition-transform" aria-label="Previous">
            <ChevronLeft />
          </button>
          <button onClick={next} className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center hover:scale-110 transition-transform" aria-label="Next">
            <ChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Review ${k + 1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-sunshine-blue" : "w-2 bg-sunshine-blue/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
