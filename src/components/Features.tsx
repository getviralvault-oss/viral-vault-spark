import { BarChart3, Download, Filter } from "lucide-react";
import smartSorting from "@/assets/smart-sorting.png";
import detailedAnalytics from "@/assets/detailed-analytics.png";
import exportToCsv from "@/assets/export-to-csv.png";

const Features = () => {
  const features = [
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Smart Sorting",
      description: "Sort through thousands of reels instantly to find your best performers",
      image: smartSorting,
      alt: "Instagram reels grid showing viral content sorted by view count"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Detailed Analytics",
      description: "Get comprehensive stats on views, likes, comments, and engagement rates",
      image: detailedAnalytics,
      alt: "Viral Vault Stats Dashboard showing selection stats for 204 reels including total views, average views, total likes, comments, and engagement rates"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Export to CSV",
      description: "Download your selection data for deeper analysis and reporting",
      image: exportToCsv,
      alt: "Excel spreadsheet showing exported reel data with views, likes, comments, and engagement metrics"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            Powerful Features for Content Creators
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to analyze and organize your viral content in one place
          </p>
        </div>

        <div className="space-y-20 sm:space-y-28 md:space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 sm:gap-10 lg:gap-16 items-center`}
            >
              <div className="flex-1 space-y-4 sm:space-y-6 max-w-xl">
                <div className="inline-flex w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-card">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
