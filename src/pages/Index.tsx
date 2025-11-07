import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import VideoDemo from "@/components/VideoDemo";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <VideoDemo />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
