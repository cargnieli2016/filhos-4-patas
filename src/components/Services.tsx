import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="servicos" className="py-24 bg-warm-cream bg-warm-pattern relative overflow-hidden" ref={sectionRef}>
      {/* Decorative blob */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-warm-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-badge">🐾 O que oferecemos</span>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-desc">
            Cuidado completo para o seu pet com profissionais dedicados e apaixonados por animais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal group glass-card p-6 cursor-default"
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              <div className="icon-circle-soft mb-5 group-hover:bg-gradient-warm group-hover:shadow-lg">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
