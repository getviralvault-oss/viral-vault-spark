import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import VideoDemo from "@/components/VideoDemo";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <VideoDemo />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
