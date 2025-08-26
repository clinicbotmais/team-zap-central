import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const whatsappLink = "https://wa.me/5522997744478?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20ZapSalesPro.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full p-4 shadow-elevated hover:shadow-soft transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
      
      {/* Floating animation rings */}
      <div className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20"></div>
    </a>
  );
};

export default WhatsAppFloat;