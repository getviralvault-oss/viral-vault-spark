import logo from "@/assets/logo.svg";
import { Mail, Shield, Lock, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { labelKey: "footer.quickLinks.features", id: "features" },
    { labelKey: "footer.quickLinks.howItWorks", id: "how-it-works" },
    { labelKey: "footer.quickLinks.demo", id: "video-demo" },
    { labelKey: "footer.quickLinks.faq", id: "faq" },
    { labelKey: "footer.quickLinks.pricing", id: "pricing" },
  ];

  const legalLinks = [
    { labelKey: "footer.legal.privacy", href: "/privacy" },
    { labelKey: "footer.legal.terms", href: "/terms" },
    { labelKey: "footer.legal.refund", href: "/refund" },
  ];

  const trustItems = [
    { icon: Shield, textKey: "footer.support.securePayment" },
    { icon: Lock, textKey: "footer.support.guarantee" },
    { icon: Users, textKey: "footer.support.users" },
  ];

  return (
    <footer className="py-12 md:py-16 px-4 border-t bg-muted/30">
      <div className="container max-w-6xl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8">
          {/* Column 1: Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Viral Vault" className="w-8 h-8" />
              <span className="font-bold text-lg">{t('hero.title')}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
            <a
              href={`mailto:${t('footer.contact')}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>{t('footer.contact')}</span>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm text-foreground">{t('footer.quickLinks.title')}</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left w-fit"
                >
                  {t(link.labelKey)}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm text-foreground">{t('footer.legal.title')}</h3>
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Trust & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm text-foreground">{t('footer.support.title')}</h3>
            <div className="flex flex-col gap-3">
              {trustItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span>{t(item.textKey)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
