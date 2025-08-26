import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "Para quem está começando",
      connection: "1 conexão com WhatsApp",
      features: [
        "Multiatendimento básico",
        "Chatbot simples",
        "Tags",
        "Relatórios essenciais"
      ],
      buttonText: "Contratar Starter",
      popular: false
    },
    {
      name: "Pro",
      subtitle: "Para equipes em crescimento",
      connection: "2 conexões com WhatsApp",
      features: [
        "Tudo do Starter",
        "Departamentos",
        "Disparo em Massa",
        "Campanhas",
        "IA Assistida",
        "SLA e Kanban"
      ],
      buttonText: "Contratar Pro",
      popular: true
    },
    {
      name: "Enterprise",
      subtitle: "Para grandes operações",
      connection: "2+ conexões (customizável)",
      features: [
        "Recursos avançados",
        "Relatórios completos",
        "Suporte prioritário",
        "Onboarding personalizado"
      ],
      buttonText: "Falar com Vendas",
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-20 bg-gradient-to-br from-white to-neutral-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-6">
            Nossos Planos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 ${
                plan.popular ? 'border-2 border-primary transform scale-105' : 'border border-border'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                  Mais Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-700 mb-4">{plan.subtitle}</p>
                <p className="text-sm text-primary font-semibold">{plan.connection}</p>
              </div>

              <div className="space-y-4 mb-8">
                <p className="font-semibold text-neutral-900 mb-3">Recursos:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? '' 
                    : ''
                }`}
                variant={plan.popular ? 'hero' : 'outline'}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-500 text-sm">
            Sem fidelidade. Cancelamento a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;