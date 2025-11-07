import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";

const features = [
  "Unlimited profile sorting",
  "Sort by likes, views, and comments",
  "Export data to CSV",
  "Works with any public profile",
  "Fast and reliable",
  "Lifetime updates",
  "Priority support",
];

const Pricing = () => {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Simple, One-Time Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Pay once, use forever. No subscriptions.
          </p>
        </div>
        
        <Card className="relative overflow-hidden border-2 border-primary/50 shadow-2xl">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 font-bold flex items-center gap-2">
            <Zap className="w-4 h-4" />
            LIFETIME DEAL
          </div>
          
          <div className="p-12">
            <div className="text-center mb-10">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-6xl md:text-7xl font-black">$47</span>
              </div>
              <p className="text-lg text-muted-foreground">
                One-time payment • No hidden fees • Cancel anytime
              </p>
            </div>
            
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="w-full text-lg py-6">
              Get Viral Vault Now
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              Instant access after purchase
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
