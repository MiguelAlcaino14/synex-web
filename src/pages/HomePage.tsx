import { Link } from 'react-router-dom';
import {
  FileText,
  GraduationCap,
  Stethoscope,
  HeartPulse,
  Settings,
  Users,
  Handshake,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { whatsappLink, IMAGES } from '@/lib/constants';
import { CTASection } from '@/components/CTASection';
import { EquipmentGallery } from '@/components/EquipmentGallery';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const differentiators = [
  { icon: HeartPulse, title: 'Especialización en salud', desc: 'Enfoque dedicado al sector salud.' },
  { icon: Settings, title: 'Servicios adaptados', desc: 'A cada requerimiento específico.' },
  { icon: Sparkles, title: 'Integración de servicios', desc: 'Profesionales y equipamiento en un solo lugar.' },
  { icon: Users, title: 'Atención personalizada', desc: 'Trato directo con cada cliente.' },
  { icon: Handshake, title: 'Flexibilidad', desc: 'Soluciones según cada necesidad.' },
  { icon: GraduationCap, title: 'Orientación profesional', desc: 'Estándares de calidad en cada servicio.' },
];

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-brand-gradient">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroConsultation}
            alt="Consulta médica profesional"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-brand-blue/80 lg:hidden" />
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-brand-blue/90 via-brand-blue/70 to-brand-green/35" />
        </div>

        <div className="container-page relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-sm font-medium text-white/90">Servicios Profesionales y Equipamiento para Salud</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight animate-fade-in-up">
              SYNEX
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 font-medium mb-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Servicios Profesionales y Equipamiento para Salud
            </p>
            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Peritajes médicos · Consultoría · Capacitación · Arriendo de equipamiento médico
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/servicios" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-brand-blue bg-white hover:bg-brand-lightGrey transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                <FileText className="w-4 h-4" />
                Solicitar informe pericial
              </Link>
              <Link to="/servicios#capacitaciones" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white border-2 border-white/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5">
                <GraduationCap className="w-4 h-4" />
                Capacitaciones
              </Link>
              <Link to="/arriendo" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white border-2 border-white/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5">
                <Stethoscope className="w-4 h-4" />
                Arriendo de equipos
              </Link>
              <a
                href={whatsappLink('Hola, me gustaría hacer una consulta sobre los servicios de Synex.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#1da851] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              Soluciones especializadas para el sector salud
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Synex es una empresa orientada a entregar servicios profesionales y soluciones especializadas principalmente para el sector salud, concentrada en dos áreas: <span className="font-semibold text-brand-blue">Servicios Profesionales en Salud</span> y <span className="font-semibold text-brand-green">Arriendo de Equipamiento Médico</span>, para profesionales, centros médicos, clínicas, consultas, empresas e instituciones públicas y privadas.
            </p>
          </div>
        </div>
      </section>

      {/* Two business areas */}
      <section className="section-padding bg-brand-lightGrey">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2">
            <Link
              to="/servicios"
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={IMAGES.medicalForm} alt="Servicios profesionales en salud" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Área 1</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Servicios Profesionales en Salud</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">Informes periciales médicos · Asesoría · Consultoría · Capacitaciones</p>
                <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all">
                  Conocer más
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link
              to="/arriendo"
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={IMAGES.ultrasound} alt="Arriendo de equipamiento médico" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Área 2</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Arriendo de Equipamiento Médico</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">Ecografía · Imagenología dental · Odontología digital · Equipamiento diagnóstico</p>
                <div className="flex items-center gap-2 text-brand-green font-semibold text-sm group-hover:gap-3 transition-all">
                  Conocer más
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Por qué elegir Synex</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Diferenciadores que nos permiten entregar un servicio profesional y adaptado a cada necesidad.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-brand-lightGrey/60 border border-brand-grey/40 hover:border-brand-green/40 hover:bg-white transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-gradient-soft flex items-center justify-center mb-4 group-hover:bg-brand-gradient transition-all duration-300">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-padding bg-brand-lightGrey">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={IMAGES.consultation3} alt="Consulta profesional" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Informes periciales médicos</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Elaboración de informes médicos especializados y periciales, a partir del análisis de antecedentes clínicos, documentación disponible y otros antecedentes pertinentes al caso. Cada solicitud es evaluada previamente.
              </p>
              <ul className="space-y-3 mb-8">
                {['Personas particulares', 'Profesionales', 'Abogados y estudios jurídicos', 'Empresas e instituciones'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/servicios" className="btn-primary">
                Solicitar informe pericial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EquipmentGallery />

      <CTASection
        title="¿Tienes una consulta?"
        subtitle="Escríbenos por WhatsApp o completa el formulario de contacto. Te responderemos a la brevedad."
        primaryLabel="Contactar por WhatsApp"
        primaryLink="/contacto"
      />
    </>
  );
}
