import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

const VolunteerSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", area: "", interest: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="volunteer" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            JOIN THE <span className="text-gradient-red">CAMPAIGN</span>
          </h2>
          <p className="font-tamil text-2xl text-dmk-red">பிரச்சாரத்தில் இணையுங்கள்</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="font-tamil text-lg text-muted-foreground">நன்றி! நாங்கள் விரைவில் தொடர்பு கொள்வோம்.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name / பெயர்</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-dmk-red/50 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone / தொலைபேசி</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-dmk-red/50 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Area / பகுதி</label>
                  <input
                    type="text"
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-dmk-red/50 transition-all"
                    placeholder="Your locality in Sulur"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Interest / ஆர்வம்</label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-dmk-red/50 transition-all"
                  >
                    <option value="">Select / தேர்ந்தெடுக்கவும்</option>
                    <option value="door">Door Campaign / வீடு வீடாக பிரச்சாரம்</option>
                    <option value="social">Social Media / சமூக ஊடகம்</option>
                    <option value="events">Events / நிகழ்வுகள்</option>
                  </select>
                </div>
                <button type="submit" className="btn-campaign-primary w-full">
                  Join Now / இப்போதே இணையுங்கள்
                </button>
              </form>
            )}
          </div>

          {/* Donation */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="p-8 rounded-2xl border border-border bg-muted/30">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Support the Movement</h3>
              <p className="font-tamil text-dmk-red mb-6">இயக்கத்திற்கு ஆதரவு அளியுங்கள்</p>
              
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Raised / திரட்டியது</span>
                  <span className="font-semibold text-foreground">₹12,50,000 / ₹25,00,000</span>
                </div>
                <div className="h-4 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full animate-pulse-glow transition-all duration-1000"
                    style={{ width: "50%", background: "var(--gradient-red)" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {["₹500", "₹1,000", "₹5,000"].map((amt) => (
                  <button
                    key={amt}
                    className="py-3 rounded-lg border-2 border-dmk-red/30 text-foreground font-bold hover:bg-dmk-red hover:text-primary-foreground transition-all duration-300 text-lg"
                  >
                    {amt}
                  </button>
                ))}
              </div>
              <button className="btn-campaign-gold w-full mt-2">
                Donate Now / நன்கொடை
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
