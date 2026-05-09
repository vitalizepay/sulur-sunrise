import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed right-4 md:right-6 bottom-6 z-40 flex flex-col gap-3">
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      href="https://www.instagram.com/sunshinepreschool26"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
      className="w-14 h-14 rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white flex items-center justify-center shadow-bright"
    >
      <Instagram className="w-6 h-6" />
    </motion.a>
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      href="https://wa.me/917373256444"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-bright"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-6 h-6 relative" />
    </motion.a>
  </div>
);

export default FloatingButtons;
