import { Star } from "lucide-react";

const testimonials = [
  { name: "Ana Paula", pet: "Mãe da Luna 🐕", text: "Atendimento maravilhoso! A Luna sempre volta feliz e cheirosa. Recomendo de olhos fechados!" },
  { name: "Carlos Silva", pet: "Pai do Thor 🐕", text: "Profissionais super carinhosos. O Thor ama ir pra lá, é como uma segunda casa pra ele." },
  { name: "Mariana Costa", pet: "Mãe da Mia 🐱", text: "A Mia é super medrosa, mas na 4 Patas ela fica tranquila. Isso diz muito sobre o carinho deles." },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            O que dizem sobre nós
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background rounded-2xl p-7 shadow-sm border border-border hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-5 leading-relaxed italic">"{t.text}"</p>
              <div>
                <p className="font-display font-bold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
