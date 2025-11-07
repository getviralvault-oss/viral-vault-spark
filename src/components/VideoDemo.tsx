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
          <div className="relative aspect-video bg-muted flex items-center justify-center group cursor-pointer">
            {/* Placeholder for video - replace with actual video element */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                <Play className="w-10 h-10 text-primary fill-primary ml-1" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Click to watch demo video
              </p>
            </div>
            
            {/* When ready, replace above with:
            <video 
              controls 
              className="w-full h-full"
              poster="your-poster-image.jpg"
            >
              <source src="your-video.mp4" type="video/mp4" />
            </video>
            */}
          </div>
        </Card>
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          Replace this placeholder with your actual demo video
        </p>
      </div>
    </section>
  );
};

export default VideoDemo;
