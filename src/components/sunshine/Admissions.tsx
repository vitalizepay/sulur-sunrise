import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const programs = ["Day Care", "After School Care", "Play Group", "Pre KG", "LKG", "UKG"];

const Admissions = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ student: "", parent: "", age: "", program: programs[0], phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Send via WhatsApp
    const text = encodeURIComponent(
      `🌟 New Admission Inquiry\n\nStudent: ${form.student}\nParent: ${form.parent}\nAge: ${form.age}\nProgram: ${form.program}\nPhone: ${form.phone}\nMessage: ${form.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/917373256444?text=${text}`, "_blank");
      toast({ title: "Inquiry Sent! 🎉", description: "We will contact you shortly." });
      setForm({ student: "", parent: "", age: "", program: programs[0], phone: "", message: "" });
      setLoading(false);
    }, 500);
  };

  return (
    <section id="admissions" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sunshine-blue/5 via-transparent to-sunshine-pink/10" />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-sunshine-yellow/30 text-sunshine-blue-deep font-bold text-sm mb-4">Admissions Open</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enroll Today — <span className="text-gradient-blue">Limited Seats Available</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Give your child a joyful start. Fill in the form and our admissions team will reach out within 24 hours.
          </p>
          <ul className="space-y-3">
            {["Personalized campus tour", "Meet our teachers", "Free parent counselling", "Easy enrollment process"].map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-blue text-white flex items-center justify-center text-sm font-bold">✓</span>
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-card space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Student Name" value={form.student} onChange={(e) => setForm({ ...form, student: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-muted border border-border focus:border-primary outline-none transition" />
            <input required placeholder="Parent Name" value={form.parent} onChange={(e) => setForm({ ...form, parent: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-muted border border-border focus:border-primary outline-none transition" />
            <input required type="number" min="1" max="10" placeholder="Child's Age" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-muted border border-border focus:border-primary outline-none transition" />
            <select value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-muted border border-border focus:border-primary outline-none transition">
              {programs.map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
          <input required type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-muted border border-border focus:border-primary outline-none transition" />
          <textarea rows={4} placeholder="Message (optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-muted border border-border focus:border-primary outline-none transition resize-none" />
          <button type="submit" disabled={loading} className="w-full py-3.5 rounded-2xl bg-gradient-blue text-white font-bold shadow-soft hover:scale-[1.02] transition-transform disabled:opacity-60">
            {loading ? "Sending..." : "Submit Inquiry 🌟"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Admissions;
