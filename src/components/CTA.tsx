import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-brand-primary-dark text-white">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-display font-bold">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Teste gratuito e comece a organizar seu time hoje.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-neutral-100 font-semibold text-lg px-8 py-4 shadow-elevated hover:shadow-soft transition-all duration-300 hover:scale-105"
          >
            Criar minha conta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;