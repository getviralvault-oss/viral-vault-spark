import { Download, UserCircle, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Download,
    title: "Install Extension",
    description: "Add Viral Vault to Chrome with one click",
    number: "1",
  },
  {
    icon: UserCircle,
    title: "Visit a Public Profile",
    description: "Go to any public Instagram profile",
    number: "2",
  },
  {
    icon: TrendingUp,
    title: "Sort & Export",
    description: "Filter Reels by metrics and export data",
    number: "3",
  },
];

const HowItWorks = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  
  return (
    <section className="py-12 md:py-24 px-4 bg-card">
      <div 
        ref={sectionRef}
        className={`container max-w-6xl transition-all duration-700 ${
          sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4">
            How Viral Vault Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground px-4">
            Simple setup, powerful insights in just 3 steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.number}
                className="relative p-6 md:p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg md:text-xl font-bold">
                  {step.number}
                </div>
                
                <div className="mb-4 md:mb-6 mt-3 md:mt-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
