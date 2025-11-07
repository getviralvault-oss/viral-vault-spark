import { Download, UserCircle, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

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
  return (
    <section className="py-24 px-4 bg-card">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            How Viral Vault Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple setup, powerful insights in just 3 steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.number}
                className="relative p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
