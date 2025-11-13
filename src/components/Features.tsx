import { BarChart3, Download, Filter } from "lucide-react";
import smartSorting from "@/assets/smart-sorting.png";
import detailedAnalytics from "@/assets/detailed-analytics.png";
import exportToCsv from "@/assets/export-to-csv.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const features = [
    {
      icon: <Filter className="w-6 h-6" />,
      titleKey: "features.smartSorting.title",
      descriptionKey: "features.smartSorting.description",
      image: smartSorting,
      altKey: "features.smartSorting.alt"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      titleKey: "features.analytics.title",
      descriptionKey: "features.analytics.description",
      image: detailedAnalytics,
      altKey: "features.analytics.alt"
    },
    {
      icon: <Download className="w-6 h-6" />,
      titleKey: "features.export.title",
      descriptionKey: "features.export.description",
      image: exportToCsv,
      altKey: "features.export.alt"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-background">
      <div 
        ref={sectionRef}
        className={`container mx-auto max-w-7xl transition-all duration-700 ${
          sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            {t('features.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
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
                  {t(feature.titleKey)}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-card">
                  <img
                    src={feature.image}
                    alt={t(feature.altKey)}
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
