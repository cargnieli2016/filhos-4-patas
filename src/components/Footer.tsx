import logoPaw from "@/assets/logo-paw.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoPaw} alt="4 Patas" className="h-10 w-10" />
            <span className="font-display text-xl font-bold text-primary-foreground">Filhos de 4 Patas</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/filhos_de4pattas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-instagram text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <a
              href="https://wa.me/5511997868524"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Filhos de 4 Patas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
