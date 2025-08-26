import dashboardDemo from '@/assets/dashboard-demo.png';

const Demo = () => {
  return (
    <section id="plataforma" className="py-20 bg-gradient-to-br from-neutral-100 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-6">
            Torne seu atendimento mais{" "}
            <span className="text-gradient">poderoso e eficiente</span>
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Visualize todas as conversas, métricas e performance da sua equipe em um painel completo e intuitivo.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-elevated p-8 overflow-hidden">
            <img 
              src={dashboardDemo} 
              alt="Demonstração completa do dashboard ZapSalesPro com filas de atendimento, métricas e gráficos"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
            />
            
            {/* Decorative overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-3xl pointer-events-none"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brand-primary-dark/5 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Demo;