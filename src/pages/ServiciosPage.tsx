import { Link } from 'react-router-dom';
import {
  FileText,
  Lightbulb,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Building2,
  UserCheck,
} from 'lucide-react';
import { whatsappLink, IMAGES } from '@/lib/constants';
import { CTASection } from '@/components/CTASection';

const trainingLines = [
  'Gestión y administración de servicios de salud',
  'Calidad y seguridad en la atención de salud',
  'Atención centrada en el usuario y experiencia del paciente',
  'Fortalecimiento de competencias de equipos clínicos y técnicos',
  'Capacitaciones diseñadas según requerimiento institucional',
];

const advisingClients = [
  'Profesionales',
  'Centros médicos',
  'Clínicas',
  'Empresas',
  'Instituciones públicas o privadas',
];

export function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={IMAGES.prescription} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 to-brand-green/70" />
        <div className="container-page relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Servicios Profesionales en Salud</h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            Informes periciales, asesoría, consultoría y capacitaciones para profesionales, centros médicos, empresas e instituciones.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              En Synex ofrecemos servicios profesionales especializados para el sector salud, adaptados a las necesidades de cada cliente. Nuestro enfoque combina experiencia profesional con un trato directo y personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Informes periciales */}
      <section className="section-padding bg-brand-lightGrey">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
                <FileText className="w-4 h-4" />
                Servicio 01
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Informes periciales médicos y médico-legales</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Elaboración de informes médicos especializados y periciales, a partir del análisis de antecedentes clínicos, documentación disponible y otros antecedentes pertinentes al caso. Cada solicitud es evaluada previamente.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Pueden solicitarlo personas particulares, profesionales, abogados, empresas u otras instituciones.
              </p>
              <a
                href={whatsappLink('Hola, me gustaría consultar por un informe pericial médico.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por informe pericial
              </a>
            </div>
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-xl">
              <img src={IMAGES.medicalForm} alt="Informe pericial médico" className="w-full h-[360px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Asesoría y consultoría */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={IMAGES.teamMeeting} alt="Asesoría y consultoría en salud" className="w-full h-[360px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/20 to-transparent" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/15 text-brand-greenDark text-sm font-semibold mb-4">
                <Lightbulb className="w-4 h-4" />
                Servicio 02
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Asesoría y consultoría en salud</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Servicios de asesoría para profesionales, centros médicos, clínicas, empresas e instituciones públicas o privadas, especialmente en organización de servicios, gestión sanitaria y procesos de atención de salud.
              </p>
              <div className="flex flex-wrap gap-2">
                {advisingClients.map((client) => (
                  <span key={client} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-lightGrey text-sm text-slate-600 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-brand-blue" />
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Capacitaciones */}
      <section id="capacitaciones" className="section-padding bg-brand-lightGrey scroll-mt-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
                <GraduationCap className="w-4 h-4" />
                Servicio 03
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Capacitaciones en salud</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Actividades de capacitación dirigidas a profesionales, técnicos, equipos de trabajo, centros médicos, empresas e instituciones. La temática, duración, modalidad y características se definen según el cliente.
              </p>
              <h3 className="font-display font-semibold text-slate-700 mb-3">Líneas principales:</h3>
              <ul className="space-y-2.5 mb-8">
                {trainingLines.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    {line}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('Hola, me gustaría consultar por una capacitación para mi equipo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar capacitación
              </a>
            </div>
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-xl">
              <img src={IMAGES.training} alt="Capacitaciones en salud" className="w-full h-[360px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Process summary */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">¿Cómo trabajamos?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Un proceso claro de principio a fin para cada servicio.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: MessageCircle, title: 'Contacto inicial', desc: 'WhatsApp, correo o formulario web.' },
              { icon: ClipboardList, title: 'Evaluación', desc: 'Análisis del requerimiento.' },
              { icon: FileText, title: 'Propuesta', desc: 'Alcance, condiciones, plazos y valor.' },
              { icon: UserCheck, title: 'Aceptación', desc: 'Coordinación de los detalles.' },
              { icon: ArrowRight, title: 'Ejecución', desc: 'Entrega del servicio o producto.' },
              { icon: CheckCircle2, title: 'Cierre', desc: 'Finalización del servicio.' },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative p-6 rounded-2xl bg-brand-lightGrey border border-brand-grey/40">
                  <span className="absolute top-4 right-4 text-4xl font-extrabold text-brand-grey font-display">{i + 1}</span>
                  <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-slate-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/nosotros" className="btn-secondary">
              Conocer más sobre Synex
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Necesitas alguno de nuestros servicios?"
        subtitle="Contáctanos por WhatsApp y cuéntanos tu requerimiento. Te responderemos a la brevedad."
        primaryLabel="Consultar por WhatsApp"
        primaryLink="/contacto"
      />
    </>
  );
}
