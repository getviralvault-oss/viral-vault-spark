import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Viral Vault" className="w-8 h-8" />
            <span className="font-bold text-lg">Viral Vault</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Viral Vault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
