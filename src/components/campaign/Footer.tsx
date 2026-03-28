import dmkSymbol from "@/assets/dmk-symbol.png";

const Footer = () => (
  <footer className="py-10 bg-secondary border-t border-secondary">
    <div className="container mx-auto px-4 text-center">
      <img src={dmkSymbol} alt="DMK Rising Sun" className="h-16 mx-auto mb-4 rounded" />
      <p className="font-tamil text-primary-foreground/80 text-lg mb-1">
        சூலூர் சட்டமன்ற தொகுதி | கோயம்புத்தூர்
      </p>
      <p className="text-primary-foreground/60 text-sm mb-4">
        Sulur Constituency | Coimbatore | TN Assembly Elections 2026
      </p>
      <p className="text-primary-foreground/40 text-xs">
        © 2026 Thalapathi Murugesan Campaign. All rights reserved. | Paid for by DMK Sulur Unit
      </p>
    </div>
  </footer>
);

export default Footer;
