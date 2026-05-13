import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin, MessageCircle } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 md:py-28 bg-gradient-sky">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white shadow-soft text-sunshine-blue-deep font-bold text-sm mb-4">Get in Touch</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us or <span className="text-gradient-blue">Say Hello</span> 👋</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {[
          { icon: Phone, title: "Call Us", lines: ["7871715444", "7373256444"], href: "tel:7871715444", color: "bg-sunshine-blue" },
          { icon: MessageCircle, title: "WhatsApp", lines: ["Chat with us"], href: "https://wa.me/917871715444", color: "bg-[#25D366]" },
          { icon: Mail, title: "Email", lines: ["Sunshinepreschool26@gmail.com"], href: "mailto:Sunshinepreschool26@gmail.com", color: "bg-sunshine-pink" },
          { icon: Instagram, title: "Instagram", lines: ["@sunshinepreschool26"], href: "https://www.instagram.com/sunshinepreschool26", color: "bg-gradient-to-br from-sunshine-pink to-sunshine-blue" },
        ].map((c, i) => (
          <motion.a
            key={c.title}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-6 shadow-card hover:shadow-bright transition-all"
          >
            <div className={`w-14 h-14 rounded-2xl ${c.color} flex items-center justify-center text-white mb-4`}>
              <c.icon className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-lg mb-2">{c.title}</h3>
            {c.lines.map((l) => (
              <p key={l} className={`text-sm break-all ${c.title === "Call Us" ? "font-bold text-sunshine-blue-deep bg-sunshine-yellow/30 px-2 py-0.5 rounded-lg inline-block mt-1" : "text-muted-foreground"}`}>{l}</p>
            ))}
          </motion.a>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-2 shadow-card overflow-hidden">
        <div className="flex items-start gap-2 px-4 py-3">
          <MapPin className="w-5 h-5 text-sunshine-blue mt-0.5 flex-shrink-0" />
          <p className="font-semibold leading-relaxed">
            Sunshine Preschool & Academy<br />
            2/3 Kumaran Nagar<br />
            Vilankuruchi Road<br />
            Near KR Supermarket<br />
            Coimbatore – 641035
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps?q=Vilankurichi+Road+Coimbatore&output=embed"
          className="w-full h-80 rounded-2xl border-0"
          loading="lazy"
          title="Sunshine Pre School Location"
        />
      </motion.div>
    </div>
  </section>
);

export default Contact;
