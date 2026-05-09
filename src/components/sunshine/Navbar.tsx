import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sunshine-logo.jpeg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#activities", label: "Activities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#admissions", label: "Admissions" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Sunshine Pre School & Academy" className="h-12 md:h-14 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#admissions"
            className="ml-2 px-5 py-2.5 rounded-full bg-gradient-blue text-white text-sm font-bold shadow-soft hover:scale-105 transition-transform"
          >
            Enroll Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-full bg-white shadow-soft" aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-2xl font-semibold hover:bg-primary/10 hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <a href="#admissions" onClick={() => setOpen(false)} className="mt-2 text-center px-5 py-3 rounded-full bg-gradient-blue text-white font-bold">
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
