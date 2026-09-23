import {
  MessageCircle,
  Phone,
  Mail,
  FileSearch,
  ClipboardList,
  FileText,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  Building2,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Stethoscope,
  Landmark,
} from 'lucide-react';
import { whatsappLink, IMAGES } from '@/lib/constants';
import { CTASection } from '@/components/CTASection';

const processSteps = [
  { icon: Phone, title: 'Contacto inicial', desc: 'WhatsApp, correo o formulario web.' },
  { icon: ClipboardList, title: 'Evaluación del requerimiento', desc: 'Análisis de la solicitud y antecedentes.' },
  { icon: FileText, title: 'Propuesta', desc: 'Alcance, condiciones, disponibilidad, plazos y valor.' },
  { icon: UserCheck, title: 'Aceptación y coordinación', desc: 'Confirmación de detalles y planificación.' },
  { icon: ArrowRight, title: 'Ejecución o entrega', desc: 'Realización del servicio o entrega del producto.' },
  { icon: CheckCircle2, title: 'Cierre del servicio', desc: 'Finalización y seguimiento.' },
];

const audience = [
  { icon: Building2, label: 'Centros médicos y clínicas' },
  { icon: Stethoscope, label: 'Consultas médicas y odontológicas' },
  { icon: Briefcase, label: 'Profesionales independientes' },
  { icon: FileSearch, label: 'Abogados y estudios jurídicos' },
  { icon: HeartPulse, label: 'Empresas del sector salud' },
  { icon: Landmark, label: 'Instituciones públicas y privadas' },
  { icon: GraduationCap, label: 'Organizaciones que requieren capacitación/asesoría' },
  { icon: Mail, label: 'Instituciones que necesitan equipamiento en arriendo' },
];

export function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={IMAGES.businessMeeting} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 to-brand-green/70" />
        <div className="container-page relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Sobre Synex</h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            Una empresa dedicada a servicios profesionales y soluciones especializadas para el sector salud.
          </p>
        </div>
      </section>

      {/* About text */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-5 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Nuestra empresa</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  Synex Inversiones y Servicios Profesionales Limitada (Synex Ltda.) es una empresa chilena orientada a entregar servicios profesionales y soluciones especializadas principalmente para el sector salud.
                </p>
                <p>
                  Nuestra empresa se concentra en dos áreas: <span className="font-semibold text-brand-blue">Servicios Profesionales en Salud</span> — que incluye informes periciales médicos, asesoría, consultoría y capacitaciones — y <span className="font-semibold text-brand-green">Arriendo de Equipamiento Médico</span>, ofreciendo alternativas de arriendo de equipamiento médico y tecnológico para profesionales, consultas, clínicas, centros médicos e instituciones de salud.
                </p>
                <p>
                  Atendemos a profesionales, centros médicos, clínicas, consultas, empresas e instituciones públicas y privadas, con un enfoque de atención directa y personalizada, adaptando cada servicio a los requerimientos específicos de cada cliente.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={IMAGES.consultation2} alt="Equipo profesional Synex" className="w-full h-[380px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" />
              </div>
            </div>
          </div>

          <div className="mt-14 relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/nosotros-pasillo.jpg"
              alt="Pasillo de un centro de salud con profesionales al fondo"
              loading="lazy"
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-brand-lightGrey">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Proceso de trabajo</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Desde el primer contacto hasta el cierre del servicio, un proceso claro en cada etapa.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-grey -translate-y-1/2" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="relative p-6 rounded-2xl bg-white shadow-lg shadow-slate-900/5 border border-brand-grey/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-2xl font-extrabold text-brand-grey font-display">{i + 1}</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-slate-800 mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">¿A quién va dirigido?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Nuestros servicios están pensados para una amplia variedad de actores del sector salud y relacionados.</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-5 items-center">
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/nosotros-equipo.jpg"
                alt="Profesionales de la salud conversando en un centro médico"
                loading="lazy"
                className="w-full h-[320px] lg:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" />
            </div>
            <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2">
              {audience.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-brand-lightGrey border border-brand-grey/40 hover:border-brand-green/40 hover:bg-white transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Conversemos sobre tu proyecto"
        subtitle="Contáctanos para evaluar tu requerimiento y entregarte una propuesta a medida."
        primaryLabel="Contactar por WhatsApp"
        primaryLink="/contacto"
      />
    </>
  );
}
