import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <main className="min-h-screen bg-background py-20">
    <div className="container max-w-3xl">
      <Link to="/" className="text-primary font-bold">← Back to Home</Link>
      <h1 className="text-4xl font-bold mt-6 mb-6">Privacy Policy</h1>
      <div className="prose prose-lg space-y-4 text-muted-foreground">
        <p>Sunshine Pre School & Academy respects your privacy. We use cookies and analytics only with your consent to improve your experience on our website.</p>
        <h2 className="text-2xl font-bold text-foreground mt-6">Information We Collect</h2>
        <p>We collect information you voluntarily share via our admission inquiry forms, including child name, parent name, age, phone and email.</p>
        <h2 className="text-2xl font-bold text-foreground mt-6">How We Use It</h2>
        <p>To respond to admission inquiries and share program details. We never sell your data.</p>
        <h2 className="text-2xl font-bold text-foreground mt-6">Cookies</h2>
        <p>Analytics cookies (Google Analytics) load only after you accept the cookie banner.</p>
        <h2 className="text-2xl font-bold text-foreground mt-6">Contact</h2>
        <p>Email: Sunshinepreschool26@gmail.com</p>
      </div>
    </div>
  </main>
);

export default PrivacyPolicy;
