import Navbar from "@/components/sunshine/Navbar";
import Hero from "@/components/sunshine/Hero";
import About from "@/components/sunshine/About";
import Programs from "@/components/sunshine/Programs";
import WhyChooseUs from "@/components/sunshine/WhyChooseUs";
import Activities from "@/components/sunshine/Activities";
import Environment from "@/components/sunshine/Environment";
import Testimonials from "@/components/sunshine/Testimonials";
import Admissions from "@/components/sunshine/Admissions";
import Contact from "@/components/sunshine/Contact";
import Footer from "@/components/sunshine/Footer";
import FloatingButtons from "@/components/sunshine/FloatingButtons";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Activities />
      <Environment />
      <Testimonials />
      <Admissions />
      <Contact />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Index;
