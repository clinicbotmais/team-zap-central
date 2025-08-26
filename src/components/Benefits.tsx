import { Users, Zap, BarChart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Múltiplos atendentes e equipes",
      description: "Gerencie vários atendentes conectados ao mesmo número."
    },
    {
      icon: Zap,
      title: "Disparo em massa",
      description: "Envie campanhas e fluxos automáticos com tags e segmentos."
    },
    {
      icon: BarChart,
      title: "Mensuração da operação",
      description: "Métricas de desempenho, SLAs e relatórios."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
            Potencialize o atendimento da sua empresa no WhatsApp!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="card-feature text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-brand-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;