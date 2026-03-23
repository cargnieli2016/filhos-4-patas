import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Rua Roselândia, 4 - Vila Velha", "(ao lado da Fazendinha), Carapicuíba - SP"],
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: ["(11) 99786-8524"],
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    lines: ["Seg a Sáb: 8h às 18h", "Domingo: Fechado"],
  },
];

const Location = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="localizacao" className="py-24 bg-background bg-warm-pattern relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="section-badge">
            <Navigation className="w-4 h-4" />
            Localização
          </span>
          <h2 className="section-title">Onde nos encontrar</h2>
          <p className="section-desc">
            Visite nosso espaço e conheça onde seu pet será cuidado com todo carinho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-6 reveal-left">
            {contactInfo.map((item, i) => (
              <div
                key={item.title}
                className="group glass-card flex gap-5 p-6"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="icon-circle">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-muted-foreground leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/5511997868524"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient inline-flex items-center gap-2 !text-base mt-2"
            >
              <Phone className="w-5 h-5" />
              Fale conosco
            </a>
          </div>

          <div className="reveal-right rounded-3xl overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2!2d-46.835!3d-23.565!2m3!1f0!2f0!3f0!3m2!1i1024!2j768!4f13.1!3m3!1m2!1s0x94ceff!2zUnVhIFJvc2Vsw6JuZGlhLCB2aWxhIFZlbGhhLCBDYXJhcGljdWPDrWJhIC0gU1A!5e0!3m2!1sen!2sbr!4v1234567890!5m2!1sen!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Filhos 4 Patas"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
