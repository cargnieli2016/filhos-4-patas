import heroImage from "@/assets/hero-pets.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Pets felizes no petshop" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-xl">
          <span className="inline-block bg-primary/20 text-primary-foreground backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-up">
            🐾 Cuidamos com amor
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Filhos de<br />
            <span className="text-primary">4 Patas</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            O melhor cuidado para quem faz parte da sua família. Banho, tosa, veterinário e muito mais em Carapicuíba.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://wa.me/5511997868524"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-primary-foreground px-8 py-3.5 rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              Agendar agora
            </a>
            <button
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-primary-foreground/20 transition-all"
            >
              Ver serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
