import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoDemo = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground">
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
