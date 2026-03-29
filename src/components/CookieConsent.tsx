import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const GA_ID = "G-XXXXXXXXXX";

interface ConsentData {
  status: "accepted" | "declined";
  timestamp: string;
  userAgent: string;
  deviceType: string;
  pageUrl: string;
}

function getDeviceType(): string {
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

function saveConsent(status: "accepted" | "declined") {
  const data: ConsentData = {
    status,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    deviceType: getDeviceType(),
    pageUrl: window.location.href,
  };
  localStorage.setItem("cookieConsent", status);
  localStorage.setItem("cookieConsentData", JSON.stringify(data));
  document.cookie = `cookieConsent=${status};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`;
}

function loadGA() {
  (window as any)[`ga-disable-${GA_ID}`] = false;
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);
  script.onload = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
  };
}

function disableGA() {
  (window as any)[`ga-disable-${GA_ID}`] = true;
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Default: disable GA
    disableGA();

    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay for smooth entrance
      const t = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(t);
    }
    if (consent === "accepted") {
      loadGA();
    }
  }, []);

  const handleAccept = useCallback(() => {
    saveConsent("accepted");
    loadGA();
    setVisible(false);
  }, []);

  const handleDecline = useCallback(() => {
    saveConsent("declined");
    disableGA();
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] animate-[slideUp_0.4s_ease-out]"
      style={{ animationFillMode: "both" }}
    >
      <div className="bg-[#f5f5f5] border-t border-border shadow-lg px-4 py-4 md:px-8 md:py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
          <p className="text-sm text-foreground/80 flex-1 leading-relaxed">
            We use cookies to improve your browsing experience, remember your preferences, and analyse site traffic. For more information on how we handle your data, please see our{" "}
            <Link to="/privacy-policy" className="text-[#e91e63] underline hover:opacity-80 transition-opacity">
              Privacy Policy
            </Link>
            .
            <br className="hidden md:block" />
            <span className="mt-1 inline-block">
              If you decline, your information won't be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.
            </span>
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 rounded-full bg-[#e91e63] text-white font-semibold text-sm hover:bg-[#c2185b] transition-colors"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="px-6 py-2.5 rounded-full border-2 border-[#e91e63] text-[#e91e63] font-semibold text-sm hover:bg-[#e91e63]/10 transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
