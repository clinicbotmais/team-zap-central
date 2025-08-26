import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import dashboardHero from '@/assets/dashboard-hero.png';

const Hero = () => {
  return (
    <section id="inicio" className="py-20 lg:py-32 bg-gradient-to-br from-white to-neutral-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-900 leading-tight">
                Vários atendentes em{" "}
                <span className="text-gradient">um único número</span>{" "}
                de WhatsApp
              </h1>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Organize sua equipe, responda mais rápido e transforme conversas em vendas com o ZapSalesPro.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Ver Planos
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Conhecer a Plataforma
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 px-4 py-2">
                Sem risco — teste grátis
              </Badge>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-elevated p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={dashboardHero} 
                alt="Dashboard ZapSalesPro com métricas de atendimento"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-primary-dark/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;