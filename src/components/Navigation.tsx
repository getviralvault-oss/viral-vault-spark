import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Chrome, Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import { useTranslation } from "react-i18next";

const CHECKOUT_URL = "https://getviralvault.lemonsqueezy.com/checkout/buy/f712138b-c5c4-4af0-8118-09695cac1655";

const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { labelKey: "navigation.features", id: "features" },
    { labelKey: "navigation.howItWorks", id: "how-it-works" },
    { labelKey: "navigation.demo", id: "video-demo" },
    { labelKey: "navigation.faq", id: "faq" },
    { labelKey: "navigation.pricing", id: "pricing" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border translate-y-0"
            : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
            >
              <img src={logo} alt="Viral Vault" className="w-8 h-8 md:w-10 md:h-10" />
              <span className="font-bold text-base md:text-lg">{t('hero.title')}</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 lg:px-4 py-2 text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <Button
              size="sm"
              className="hidden md:flex items-center gap-2"
              onClick={() => window.open(CHECKOUT_URL, "_blank")}
            >
              <Chrome className="w-4 h-4" />
              <span className="hidden lg:inline">{t('navigation.getVault')}</span>
              <span className="lg:hidden">{t('navigation.getNow')}</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-border ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-2 bg-background">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-base hover:bg-muted rounded-lg transition-colors"
              >
                {t(item.labelKey)}
              </button>
            ))}
            <Button
              className="w-full mt-2"
              onClick={() => {
                window.open(CHECKOUT_URL, "_blank");
                setIsMobileMenuOpen(false);
              }}
            >
              <Chrome className="w-4 h-4 mr-2" />
              {t('hero.ctaPrimary')}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
