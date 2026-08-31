import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { whatsappLink, IMAGES } from '@/lib/constants';
import { CTASection } from '@/components/CTASection';

const faqs = [
  {
    q: '¿Qué son los informes periciales médicos?',
    a: 'Son informes médicos especializados y periciales elaborados a partir del análisis de antecedentes clínicos, documentación disponible y otros antecedentes pertinentes al caso. Cada solicitud es evaluada previamente para determinar si corresponde su elaboración.',
  },
  {
    q: '¿Quién puede solicitar un informe pericial?',
    a: 'Pueden solicitarlo personas particulares, profesionales, abogados, empresas u otras instituciones que requieran un informe médico especializado o pericial.',
  },
  {
    q: '¿Qué antecedentes se requieren para un informe pericial?',
    a: 'Los antecedentes varían según el caso, pero generalmente incluyen documentación clínica, exámenes y otros documentos pertinentes. Al contactarnos, te indicaremos los antecedentes específicos necesarios para tu caso.',
  },
  {
    q: '¿La cotización del informe pericial tiene costo?',
    a: 'La evaluación y cotización previa no tienen costo. Una vez evaluados los antecedentes, te enviamos una propuesta con el alcance, condiciones y valor del informe.',
  },
  {
    q: '¿Las capacitaciones son solo para empresas?',
    a: 'No, las capacitaciones están dirigidas a profesionales, técnicos, equipos de trabajo, centros médicos, empresas e instituciones. La temática y modalidad se adaptan a cada requerimiento.',
  },
  {
    q: '¿Pueden diseñar capacitaciones a medida?',
    a: 'Sí. La temática, duración, modalidad y características de cada capacitación se definen según las necesidades del cliente. Diseñamos capacitaciones específicas para cada institución.',
  },
  {
    q: '¿Qué equipos médicos pueden arrendarse?',
    a: 'Ofrecemos arriendo de ecógrafos, equipos de radiología dental, scanner intraoral y equipamiento médico y diagnóstico complementario. El catálogo se amplía progresivamente.',
  },
  {
    q: '¿Puedo solicitar una marca o modelo específico de equipo?',
    a: 'Las marcas, modelos y disponibilidad se informan al momento de cotizar. Contáctanos con tu requerimiento y te indicaremos qué opciones tenemos disponibles.',
  },
  {
    q: '¿El arriendo de equipos es mensual?',
    a: 'Las condiciones de arriendo (incluyendo plazos y modalidad) se definen en la cotización según el equipo y la necesidad del cliente. Contáctanos para evaluar tu requerimiento.',
  },
  {
    q: '¿Puedo consultar por WhatsApp?',
    a: 'Sí, WhatsApp es nuestro canal principal de contacto. Escríbenos al +56 9 2050 4337 y te responderemos a la brevedad.',
  },
  {
    q: '¿Atienden en todo Chile?',
    a: 'Contáctanos para consultar sobre cobertura y disponibilidad según tu ubicación y el servicio requerido.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white border-brand-green/40 shadow-lg' : 'bg-brand-lightGrey border-brand-grey/40 hover:border-brand-blue/30'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className={`font-display font-semibold text-base lg:text-lg ${isOpen ? 'text-brand-blue' : 'text-slate-700'}`}>
          {faq.q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-brand-green text-white rotate-180' : 'bg-white text-slate-400'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-5 pb-5 text-slate-600 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={IMAGES.doctorPhone} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 to-brand-green/70" />
        <div className="container-page relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Preguntas Frecuentes</h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            Resolvemos las consultas más comunes sobre nuestros servicios profesionales y arriendo de equipamiento.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* Contact prompt */}
          <div className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl bg-brand-lightGrey border border-brand-grey/40 text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-2">¿No encuentras tu respuesta?</h3>
            <p className="text-slate-500 mb-5">Escríbenos directamente por WhatsApp y te ayudaremos.</p>
            <a
              href={whatsappLink('Hola, tengo una consulta sobre los servicios de Synex.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
