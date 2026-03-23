import { Heart, Clock, Shield, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import logoPaw from "@/assets/logo-paw.png";

const About = () => {
  const sectionRef = useScrollReveal();

  const features = [
    { icon: Heart, title: "Amor pelos animais", desc: "Tratamos cada pet como se fosse nosso, com carinho e dedicação.", color: "from-rose-400 to-primary" },
    { icon: Clock, title: "Atendimento ágil", desc: "Respeito ao seu tempo e ao bem-estar do seu pet.", color: "from-primary to-warm-gold" },
    { icon: Shield, title: "Segurança total", desc: "Ambiente seguro, limpo e constantemente monitorado.", color: "from-accent to-emerald-400" },
  ];

  return (
    <section id="sobre" className="py-24 bg-background bg-warm-pattern relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-20 right-10 opacity-5">
        <img src={logoPaw} alt="" className="w-64 h-64 rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <span className="section-badge">
              <Sparkles className="w-4 h-4" />
              Quem somos
            </span>
            <h2 className="section-title mt-3 mb-6">
              Sobre a <span className="text-gradient-sunset">4 Patas</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Somos uma equipe apaixonada por animais, localizada em Carapicuíba - SP. 
              Nossa missão é oferecer o melhor cuidado e carinho para seus filhos de 4 patas, 
              com profissionais qualificados e um ambiente acolhedor.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Com anos de experiência no mercado pet, oferecemos serviços completos para 
              garantir a saúde, bem-estar e felicidade do seu companheiro.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { num: "500+", label: "Pets atendidos" },
                { num: "10+", label: "Serviços" },
                { num: "5★", label: "Avaliação" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-gradient-primary">{stat.num}</p>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 reveal-right">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group glass-card flex gap-5 p-6"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="icon-circle">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
