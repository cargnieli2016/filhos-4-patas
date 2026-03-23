import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Ana Paula",
    pet: "Mãe da Luna 🐕",
    text: "Atendimento maravilhoso! A Luna sempre volta feliz e cheirosa. Recomendo de olhos fechados!",
    initials: "AP",
  },
  {
    name: "Carlos Silva",
    pet: "Pai do Thor 🐕",
    text: "Profissionais super carinhosos. O Thor ama ir pra lá, é como uma segunda casa pra ele.",
    initials: "CS",
  },
  {
    name: "Mariana Costa",
    pet: "Mãe da Mia 🐱",
    text: "A Mia é super medrosa, mas na 4 Patas ela fica tranquila. Isso diz muito sobre o carinho deles.",
    initials: "MC",
  },
];

const Testimonials = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="depoimentos" className="py-24 bg-warm-cream bg-warm-pattern relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-[0.03]">
        <Quote className="w-80 h-80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-badge">💬 Depoimentos</span>
          <h2 className="section-title">O que dizem sobre nós</h2>
          <p className="section-desc">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal-scale glass-card p-8 relative"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-warm-gold text-warm-gold" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed text-[15px]">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
