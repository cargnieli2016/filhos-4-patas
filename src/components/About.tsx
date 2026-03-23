import { Heart, Clock, Shield } from "lucide-react";

const About = () => {
  const features = [
    { icon: Heart, title: "Amor pelos animais", desc: "Tratamos cada pet como se fosse nosso." },
    { icon: Clock, title: "Atendimento ágil", desc: "Respeito ao seu tempo e ao do seu pet." },
    { icon: Shield, title: "Segurança total", desc: "Ambiente seguro, limpo e monitorado." },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Quem somos</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Sobre a <span className="text-gradient-primary">4 Patas</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Somos uma equipe apaixonada por animais, localizada em Carapicuíba - SP. 
              Nossa missão é oferecer o melhor cuidado e carinho para seus filhos de 4 patas, 
              com profissionais qualificados e um ambiente acolhedor.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Com anos de experiência no mercado pet, oferecemos serviços completos para 
              garantir a saúde, bem-estar e felicidade do seu companheiro.
            </p>
          </div>

          <div className="space-y-5">
            {features.map((f) => (
              <div key={f.title} className="flex gap-5 p-5 rounded-2xl bg-secondary/60 border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="text-muted-foreground">{f.desc}</p>
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
