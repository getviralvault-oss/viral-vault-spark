import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import TrustBadges from "./TrustBadges";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CHECKOUT_URL = "https://getviralvault.lemonsqueezy.com/checkout/buy/f712138b-c5c4-4af0-8118-09695cac1655";

const FinalCTA = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  
  return (
    <section className="py-12 md:py-24 px-4">
      <div 
        ref={sectionRef}
        className={`container max-w-4xl transition-all duration-700 ${
          sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 p-8 md:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl -mr-24 md:-mr-32 -mt-24 md:-mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl -ml-24 md:-ml-32 -mb-24 md:-mb-32" />
          
          <div className="relative z-10 text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-2 md:mb-4">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              Limited Time Offer
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Ready to Find Your Next
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Viral Content?
              </span>
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Join 500+ creators who are already discovering viral content with Viral Vault. 
              Get lifetime access for just $47 before we switch to subscriptions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2 md:pt-4 px-4 sm:px-0">
              <Button 
                size="lg" 
                className="group text-base md:text-lg px-8 md:px-10 w-full sm:w-auto"
                onClick={() => window.open(CHECKOUT_URL, '_blank')}
              >
                Get Lifetime Access Now
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="pt-6 md:pt-8">
              <TrustBadges />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
