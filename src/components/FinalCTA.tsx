import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import TrustBadges from "./TrustBadges";

const CHECKOUT_URL = "https://getviralvault.lemonsqueezy.com/checkout/buy/f712138b-c5c4-4af0-8118-09695cac1655";

const FinalCTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 p-12 md:p-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="relative z-10 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Limited Time Offer
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Ready to Find Your Next
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Viral Content?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join 500+ creators who are already discovering viral content with Viral Vault. 
              Get lifetime access for just $47 before we switch to subscriptions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="group text-lg px-10"
                onClick={() => window.open(CHECKOUT_URL, '_blank')}
              >
                Get Lifetime Access Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="pt-8">
              <TrustBadges />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
