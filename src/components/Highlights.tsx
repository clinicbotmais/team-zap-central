import whatsappDepartment from '@/assets/whatsapp-department.png';
import whatsappTranscription from '@/assets/whatsapp-transcription.png';

const Highlights = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-100 to-white">
      <div className="container-custom space-y-20">
        
        {/* Department Distribution */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-neutral-900">
              Distribuição automática{" "}
              <span className="text-gradient">por departamentos</span>
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Encaminhamento inteligente para o time certo. Seus clientes são direcionados automaticamente 
              para o departamento especializado, garantindo atendimento qualificado desde o primeiro contato.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-elevated p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={whatsappDepartment} 
                alt="Interface do WhatsApp mostrando distribuição automática por departamentos"
                className="w-full max-w-sm mx-auto h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Audio Transcription */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:order-1">
            <div className="relative bg-white rounded-3xl shadow-elevated p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={whatsappTranscription} 
                alt="Interface do WhatsApp mostrando transcrição de áudio para texto"
                className="w-full max-w-sm mx-auto h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-primary-dark/10 rounded-full blur-xl"></div>
          </div>
          
          <div className="space-y-6 lg:order-2">
            <h3 className="text-3xl font-display font-bold text-neutral-900">
              Transcreva áudios{" "}
              <span className="text-gradient">em textos</span>
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Agilize o entendimento e o registro das conversas. Todas as mensagens de voz são automaticamente 
              convertidas em texto, facilitando o acompanhamento e a busca por informações importantes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Highlights;