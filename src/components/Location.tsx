import { MapPin, Phone, Clock } from "lucide-react";

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Localização</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Onde nos encontrar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg">Endereço</h3>
                <p className="text-muted-foreground">Rua Roselândia, 4 - Vila Velha<br />(ao lado da Fazendinha), Carapicuíba - SP</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg">Telefone</h3>
                <p className="text-muted-foreground">(11) 99786-8524</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg">Horário</h3>
                <p className="text-muted-foreground">Seg a Sáb: 8h - 18h<br />Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2!2d-46.835!3d-23.565!2m3!1f0!2f0!3f0!3m2!1i1024!2j768!4f13.1!3m3!1m2!1s0x94ceff!2zUnVhIFJvc2Vsw6JuZGlhLCB2aWxhIFZlbGhhLCBDYXJhcGljdWPDrWJhIC0gU1A!5e0!3m2!1sen!2sbr!4v1234567890!5m2!1sen!2sbr"
              width="100%"
              height="350"
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
