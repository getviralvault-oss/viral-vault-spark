import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 border-t">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-2.5 md:gap-3">
            <img src={logo} alt="Viral Vault" className="w-7 h-7 md:w-8 md:h-8" />
            <span className="font-bold text-base md:text-lg">Viral Vault</span>
          </div>
          
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            © 2025 Viral Vault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
