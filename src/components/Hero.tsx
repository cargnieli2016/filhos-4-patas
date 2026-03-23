import heroImage from "@/assets/hero-pets.jpg";
import { PawPrint, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pets felizes no petshop"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/60 to-foreground/20" />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 right-[15%] opacity-20 animate-float hidden lg:block">
        <PawPrint className="w-20 h-20 text-primary-foreground" />
      </div>
      <div className="absolute bottom-1/3 right-[25%] opacity-10 animate-float hidden lg:block" style={{ animationDelay: "1.5s" }}>
        <PawPrint className="w-12 h-12 text-primary-foreground rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md text-primary-foreground px-5 py-2 rounded-full text-sm font-bold mb-8 border border-primary-foreground/10">
              <PawPrint className="w-4 h-4" />
              Cuidamos com amor desde sempre
            </span>
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-8 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Filhos de
            <br />
            <span className="text-gradient-sunset">4 Patas</span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/75 mb-10 animate-fade-up leading-relaxed max-w-lg"
            style={{ animationDelay: "0.3s" }}
          >
            O melhor cuidado para quem faz parte da sua família.
            Banho, tosa, veterinário e muito mais em{" "}
            <strong className="text-primary-foreground">Carapicuíba</strong>.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="https://wa.me/5511997868524"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient"
            >
              Agendar agora
            </a>
            <button
              onClick={() =>
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-md text-primary-foreground border border-primary-foreground/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-foreground/15 transition-all duration-300"
            >
              Ver serviços
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
