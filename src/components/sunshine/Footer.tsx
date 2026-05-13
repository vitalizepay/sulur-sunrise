import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/sunshine-logo.jpeg";

const Footer = () => (
  <footer className="bg-sunshine-blue-deep text-white pt-16 pb-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-sunshine-blue-deep via-sunshine-blue-deep to-[hsl(217,80%,30%)]" />
    <div className="container relative">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="bg-white rounded-2xl p-3 inline-block mb-4">
            <img src={logo} alt="Sunshine Pre School" className="h-14 w-auto" />
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
            Nurturing Young Minds, Shaping Bright Futures! Where little steps lead to big dreams.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            {["Home", "About", "Programs", "Activities", "Gallery", "Admissions"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-sunshine-yellow transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Programs</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            {["Day Care", "After School Care", "Play Group", "Pre KG", "LKG", "UKG"].map((p) => (
              <li key={p}><a href="#programs" className="hover:text-sunshine-yellow transition">{p}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span className="font-bold text-white bg-sunshine-yellow/20 px-2 py-0.5 rounded">7871715444 / 7373256444</span></li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0" /> Sunshinepreschool26@gmail.com</li>
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> 2/3 Kumaran Nagar, Vilankuruchi Road, Near KR Supermarket, Coimbatore – 641035</li>
            <li>
              <a href="https://www.instagram.com/sunshinepreschool26" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Instagram className="w-4 h-4" /> Follow Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 pt-6 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Sunshine Pre School & Academy. All rights reserved. ✨
      </div>
    </div>
  </footer>
);

export default Footer;
