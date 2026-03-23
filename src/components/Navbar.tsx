import logoPaw from "@/assets/logo-paw.png";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Serviços", id: "servicos" },
  { label: "Sobre", id: "sobre" },
  { label: "Depoimentos", id: "depoimentos" },
  { label: "Localização", id: "localizacao" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 group">
          <img
            src={logoPaw}
            alt="4 Patas"
            className="h-10 w-10 transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="font-display text-xl font-bold text-gradient-primary">
            4 Patas
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5511997868524"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 btn-primary-gradient !py-2.5 !px-6 !text-sm"
          >
            Agende agora 🐾
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border shadow-xl animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-4 py-3 text-foreground font-semibold rounded-xl hover:bg-secondary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5511997868524"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient !py-3 text-center mt-2"
            >
              Agende agora 🐾
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
