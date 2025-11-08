import { BarChart3, Download, Filter } from "lucide-react";
import statsDashboard from "@/assets/stats-dashboard.png";

const Features = () => {
  const features = [
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Smart Sorting",
      description: "Sort through thousands of reels instantly to find your best performers"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Detailed Analytics",
      description: "Get comprehensive stats on views, likes, comments, and engagement rates"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Export to CSV",
      description: "Download your selection data for deeper analysis and reporting"
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

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-2 border-border bg-card hover:border-primary transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden border-2 border-border shadow-2xl">
          <img
            src={statsDashboard}
            alt="Viral Vault Stats Dashboard showing selection stats for 36 reels including total views of 263M, average views of 7.3M, total likes, comments, and engagement rates"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
