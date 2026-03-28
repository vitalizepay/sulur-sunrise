import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";
import inaugurationImg from "@/assets/inauguration.png";
import computerImg from "@/assets/computer-center.png";
import partyMeetingImg from "@/assets/party-meeting.png";
import publicMeetingImg from "@/assets/public-meeting.png";
import campaignPosterImg from "@/assets/campaign-poster.png";
import dmkSymbolImg from "@/assets/dmk-symbol.png";

const images = [
  { src: inaugurationImg, alt: "Inauguration ceremony" },
  { src: computerImg, alt: "Computer center inauguration" },
  { src: partyMeetingImg, alt: "DMK party meeting" },
  { src: publicMeetingImg, alt: "Public meeting at community hall" },
  { src: campaignPosterImg, alt: "Campaign poster" },
  { src: dmkSymbolImg, alt: "DMK Rising Sun symbol" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 section-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">
            <span className="text-gradient-gold">GALLERY</span>
          </h2>
          <p className="font-tamil text-2xl text-dmk-gold">புகைப்பட தொகுப்பு</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dmk-black/0 group-hover:bg-dmk-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-display text-lg tracking-wider">VIEW</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-dmk-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-dmk-red transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
