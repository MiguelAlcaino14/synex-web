import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  Info,
  Stethoscope,
  ScanLine,
  Monitor,
  Wrench,
} from 'lucide-react';
import { whatsappLink, IMAGES } from '@/lib/constants';
import { CTASection } from '@/components/CTASection';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const categories = [
  {
    icon: Stethoscope,
    title: 'Ecógrafos',
    desc: 'Equipos de ultrasonido para diferentes aplicaciones clínicas y diagnósticas.',
    image: IMAGES.ultrasound2,
  },
  {
    icon: ScanLine,
    title: 'Equipos de radiología dental',
    desc: 'Apoyo al diagnóstico odontológico, sujeto a disponibilidad.',
    image: IMAGES.dentalXray,
  },
  {
    icon: Monitor,
    title: 'Scanner intraoral',
    desc: 'Equipamiento para odontología digital.',
    image: IMAGES.dentalScan,
  },
  {
    icon: Wrench,
    title: 'Equipamiento diagnóstico complementario',
    desc: 'Otros equipos que se incorporarán progresivamente.',
    image: IMAGES.heartMonitor,
  },
];

export function ArriendoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={IMAGES.ultrasound} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/80 to-brand-blue/80" />
        <div className="container-page relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Arriendo de Equipamiento Médico</h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            Alternativas de arriendo de equipamiento médico y tecnológico para profesionales, consultas, clínicas e instituciones de salud.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              El arriendo de equipamiento permite acceder a tecnología médica de forma temporal, sin asumir el costo de adquisición. Una solución flexible para profesionales, consultas, clínicas, centros médicos e instituciones de salud.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-10 grid gap-4 sm:grid-cols-2">
            <img
              src="/images/arriendo-ecografo.jpg"
              alt="Equipo de ecografía en una sala clínica"
              loading="lazy"
              className="w-full h-56 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="/images/arriendo-consola.jpg"
              alt="Consola de un equipo de ecografía operada con las manos"
              loading="lazy"
              className="w-full h-56 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-brand-lightGrey">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Categorías de equipamiento</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Explora nuestras líneas de arriendo. Marcas, modelos y disponibilidad se informan al momento de cotizar.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl bg-white shadow-lg shadow-slate-900/5 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{cat.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-slate-600">{cat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note */}
          <div className="mt-10 flex items-start gap-3 p-5 rounded-xl bg-brand-blue/5 border border-brand-blue/15">
            <Info className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-brand-blue">Nota:</span> Marcas, modelos y disponibilidad se informan al momento de cotizar. Las imágenes son referenciales y no corresponden a equipos específicos.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { icon: ArrowRight, title: 'Sin costo de adquisición', desc: 'Accede a tecnología médica temporal sin comprar equipos.' },
              { icon: MessageCircle, title: 'Cotización previa', desc: 'Cada arriendo se cotiza según disponibilidad y necesidad.' },
              { icon: Stethoscope, title: 'Catálogo en expansión', desc: 'Incorporamos nuevos equipos progresivamente.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-brand-lightGrey border border-brand-grey/40">
                  <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-lightGrey">
        <div className="container-page">
          <div className="rounded-3xl bg-brand-gradient p-10 lg:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">¿Necesitas arrendar equipamiento médico?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Contáctanos por WhatsApp para consultar disponibilidad, marcas y modelos. Te ayudaremos a encontrar el equipo adecuado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappLink('Hola, me gustaría consultar por el arriendo de equipamiento médico.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-brand-blue bg-white hover:bg-brand-lightGrey transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Consultar arriendo de equipamiento
                </a>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Formulario de contacto
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
