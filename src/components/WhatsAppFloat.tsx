import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5511997868524"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato pelo WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-whatsapp/30 animate-ping" />
      <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-whatsapp shadow-2xl transition-transform duration-300 group-hover:scale-110">
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </span>
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-primary-foreground text-sm font-semibold px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Fale conosco!
      </span>
    </a>
  );
};

export default WhatsAppFloat;
