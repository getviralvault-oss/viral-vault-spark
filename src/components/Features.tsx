import { BarChart3, Download, Filter } from "lucide-react";
import statsDashboard from "@/assets/stats-dashboard.png";

const Features = () => {
  const features = [
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Smart Sorting",
      description: "Sort through thousands of reels instantly to find your best performers",
      image: null, // Will be added when screenshot is uploaded
      alt: "Smart sorting feature interface"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Detailed Analytics",
      description: "Get comprehensive stats on views, likes, comments, and engagement rates",
      image: statsDashboard,
      alt: "Viral Vault Stats Dashboard showing selection stats for 36 reels including total views of 263M, average views of 7.3M, total likes, comments, and engagement rates"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Export to CSV",
      description: "Download your selection data for deeper analysis and reporting",
      image: null, // Will be added when screenshot is uploaded
      alt: "CSV export feature interface"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Powerful Features for Content Creators
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Everything you need to analyze and organize your viral content
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1 w-full">
                {feature.image ? (
                  <div className="rounded-xl overflow-hidden border-2 border-border shadow-xl">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-auto"
                    />
                  </div>
                ) : (
                  <div className="rounded-xl border-2 border-dashed border-border bg-muted/30 aspect-video flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Screenshot coming soon</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
