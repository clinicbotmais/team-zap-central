import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quais são as funcionalidades do multiatendimento no WhatsApp?",
      answer: "O ZapSalesPro permite que múltiplos atendentes trabalhem no mesmo número de WhatsApp, com distribuição automática de conversas, tags para organização, departamentos especializados e métricas completas de desempenho."
    },
    {
      question: "Meu número corre risco de ser bloqueado pelo WhatsApp?",
      answer: "Não. O ZapSalesPro utiliza a API oficial do WhatsApp Business, garantindo total conformidade com as políticas da plataforma. Seu número fica protegido e não corre riscos de bloqueio."
    },
    {
      question: "Existe um limite de mensagens por dia?",
      answer: "Os limites seguem as políticas do WhatsApp Business API. Contas novas começam com limites menores que aumentam gradualmente conforme o uso responsável e engajamento dos usuários."
    },
    {
      question: "O sistema avisa quando o cliente está chamando?",
      answer: "Sim! O ZapSalesPro possui notificações em tempo real, alertas sonoros e visuais para que sua equipe nunca perca uma mensagem importante dos clientes."
    },
    {
      question: "Posso usar chamadas de voz e vídeo?",
      answer: "As chamadas de voz e vídeo funcionam diretamente pelo WhatsApp. O ZapSalesPro registra essas interações no histórico do cliente para melhor acompanhamento."
    },
    {
      question: "Como funciona o suporte e as atualizações?",
      answer: "Oferecemos suporte técnico especializado e atualizações automáticas da plataforma. Planos superiores incluem suporte prioritário e onboarding personalizado."
    },
    {
      question: "Existe conexão por fileiras/departamentos?",
      answer: "Sim! Você pode criar departamentos especializados (vendas, suporte, financeiro) e configurar regras de distribuição automática baseadas em palavras-chave ou horários."
    },
    {
      question: "Posso transcrever áudios? Como funciona?",
      answer: "Sim! O ZapSalesPro transcreve automaticamente todas as mensagens de áudio em texto, facilitando o acompanhamento das conversas e pesquisas no histórico."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-6">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-neutral-50 rounded-2xl px-6 border-0 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-neutral-900 hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;