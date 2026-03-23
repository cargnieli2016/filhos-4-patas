import logoPaw from "@/assets/logo-paw.png";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <img src={logoPaw} alt="4 Patas" className="h-9 w-9" />
          <span className="font-display text-xl font-bold text-gradient-primary">4 Patas</span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo("servicos")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollTo("sobre")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </button>
          <button onClick={() => scrollTo("depoimentos")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Depoimentos
          </button>
          <button onClick={() => scrollTo("localizacao")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Localização
          </button>
          <a
            href="https://wa.me/5511997868524"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Agende pelo WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
