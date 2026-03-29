import Navbar from "@/components/campaign/Navbar";
import Footer from "@/components/campaign/Footer";

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <section className="py-32 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

        <div className="prose prose-lg text-muted-foreground space-y-6">
          <p>
            This Privacy Policy explains how the campaign of Thalapathi Murugesan ("we", "us", "our") collects, uses, and protects your personal information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Cookies & Analytics</h2>
          <p>
            We use cookies to improve your browsing experience, remember your preferences, and analyse site traffic using Google Analytics (GA4). Analytics tracking is <strong>only enabled after you provide consent</strong> via our cookie banner.
          </p>
          <p>
            If you decline cookies, a single cookie is stored in your browser to remember your preference not to be tracked. No analytics data is collected in this case.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Volunteer form submissions (name, phone, area, interest)</li>
            <li>Cookie consent preference and timestamp</li>
            <li>Anonymous analytics data (if consent is given)</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground">How We Use Your Data</h2>
          <p>
            Your data is used solely for campaign coordination and improving website experience. We do not sell or share your personal information with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
          <p>
            You may withdraw consent at any time by clearing your browser cookies. You can also contact us to request deletion of any personal data we hold.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Contact</h2>
          <p>
            For privacy-related inquiries, contact us at{" "}
            <a href="mailto:thalapathimurugesandmk@gmail.com" className="text-dmk-red hover:underline">
              thalapathimurugesandmk@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default PrivacyPolicy;
