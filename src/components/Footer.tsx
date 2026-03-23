import logoPaw from "@/assets/logo-paw.png";
import { Instagram, Heart, PawPrint } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(20 35% 12%), hsl(25 30% 18%))" }}>
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-warm" />
      <div className="absolute bottom-10 right-10 opacity-5">
        <PawPrint className="w-48 h-48 text-primary-foreground" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoPaw} alt="4 Patas" className="h-12 w-12" />
              <span className="font-display text-2xl font-bold text-primary-foreground">
                Filhos de 4 Patas
              </span>
            </div>
            <p className="text-primary-foreground/50 leading-relaxed max-w-xs">
              Cuidando do seu melhor amigo com amor, carinho e profissionalismo em Carapicuíba - SP.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Navegação</h4>
            <div className="flex flex-col gap-2">
              {["servicos", "sobre", "depoimentos", "localizacao"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-primary-foreground/50 hover:text-primary transition-colors text-sm capitalize"
                >
                  {id === "servicos" ? "Serviços" : id === "localizacao" ? "Localização" : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Redes Sociais</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/filhos_de4pattas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-instagram transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" />
                @filhos_de4pattas
              </a>
              <a
                href="https://wa.me/5511997868524"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gradient !py-2.5 !px-5 !text-sm inline-flex items-center gap-2 w-fit"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Filhos de 4 Patas. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/40 text-sm flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 fill-primary text-primary" /> para os pets
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
