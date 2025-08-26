import { 
  Users, 
  MessageSquare, 
  Building, 
  Send, 
  Bot, 
  Megaphone, 
  Brain, 
  Kanban, 
  Volume2 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Múltiplos atendentes",
      description: "Conecte toda sua equipe ao mesmo número de WhatsApp."
    },
    {
      icon: MessageSquare,
      title: "Gestão das conversas",
      description: "Filtros, tags e atribuição automática de conversas."
    },
    {
      icon: Building,
      title: "Departamentos",
      description: "Distribua atendimentos por filas especializadas."
    },
    {
      icon: Send,
      title: "Disparo em massa",
      description: "Envie mensagens para milhares de contatos."
    },
    {
      icon: Bot,
      title: "Chatbot",
      description: "Fluxos de boas-vindas e triagem automática."
    },
    {
      icon: Megaphone,
      title: "Campanhas de disparo",
      description: "Crie campanhas segmentadas e personalizadas."
    },
    {
      icon: Brain,
      title: "Integração com IA",
      description: "ChatGPT para respostas assistidas inteligentes."
    },
    {
      icon: Kanban,
      title: "Kanban de tickets",
      description: "Organize atendimentos por etapas de processo."
    },
    {
      icon: Volume2,
      title: "Transcrição de áudios",
      description: "Converta mensagens de voz em texto automaticamente."
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-6">
            Todas as funcionalidades para sua{" "}
            <span className="text-gradient">equipe de atendimento</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="card-feature group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-primary-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;