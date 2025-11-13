import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import logo from "@/assets/logo.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

const CHECKOUT_URL = "https://getviralvault.lemonsqueezy.com/checkout/buy/f712138b-c5c4-4af0-8118-09695cac1655";

const Hero = () => {
  const { t } = useTranslation();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-12 md:py-20">
      <div 
        ref={heroRef}
        className={`container max-w-6xl transition-all duration-1000 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
            <img src={logo} alt="Viral Vault Logo" className="w-12 h-12 md:w-16 md:h-16" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t('hero.title')}</h2>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl leading-[1.1]">
            {t('hero.headline')}
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {t('hero.headlineHighlight')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed px-4">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-8 w-full sm:w-auto px-4 sm:px-0">
            <Button 
              size="lg" 
              className="group w-full sm:w-auto"
              onClick={() => window.open(CHECKOUT_URL, '_blank')}
            >
              <Chrome className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              {t('hero.ctaPrimary')}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('video-demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.ctaSecondary')}
            </Button>
          </div>
          
          <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-4">
            {t('hero.pricing')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
