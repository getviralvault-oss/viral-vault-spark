import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VideoDemo = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  
  return (
    <section id="video-demo" className="py-12 md:py-24 px-4">
      <div 
        ref={sectionRef}
        className={`container max-w-5xl transition-all duration-700 ${
          sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4">
            See It In Action
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground px-4">
            Watch how Viral Vault helps you discover viral content
          </p>
        </div>
        
        <Card className="overflow-hidden border-2 shadow-2xl">
          <div className="relative aspect-video bg-muted">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/W7Ceq6_qY6U"
              title="Viral Vault Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoDemo;
