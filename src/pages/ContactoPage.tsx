import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
} from 'lucide-react';
import { whatsappLink, WHATSAPP_DISPLAY, IMAGES } from '@/lib/constants';
import { api } from '@/lib/api';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

type InquiryType = 'informe_pericial' | 'asesoria' | 'capacitacion' | 'arriendo_equipamiento' | 'otro';

const inquiryOptions: { value: InquiryType; label: string }[] = [
  { value: 'informe_pericial', label: 'Informe pericial' },
  { value: 'asesoria', label: 'Asesoría' },
  { value: 'capacitacion', label: 'Capacitación' },
  { value: 'arriendo_equipamiento', label: 'Arriendo de equipamiento' },
  { value: 'otro', label: 'Otro' },
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactoPage() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    if (!name || name.length < 2 || name.length > 100) newErrors.name = 'Ingresa tu nombre completo';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) newErrors.email = 'Ingresa un correo válido';
    if (!message || message.length < 10 || message.length > 2000) newErrors.message = 'Cuéntanos un poco más sobre tu consulta';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!validate(formData)) return;

    setFormState('submitting');

    const name = (formData.get('name') as string).trim();
    const email = (formData.get('email') as string).trim();
    const phone = (formData.get('phone') as string)?.trim() || null;
    const inquiryType = formData.get('inquiry_type') as InquiryType;
    const message = (formData.get('message') as string).trim();

    try {
      await api.post('/contacto', { name, email, phone, inquiryType, message });
    } catch (err) {
      console.error('[contacto] error enviando formulario', err);
      setFormState('error');
      return;
    }

    setFormState('success');
    form.reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={IMAGES.consultation3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 to-brand-green/70" />
        <div className="container-page relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Contacto</h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            Escríbenos por WhatsApp o completa el formulario. Te responderemos a la brevedad.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left: WhatsApp CTA */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-slate-900/5">
                  <img
                    src="/images/contacto-recepcion.jpg"
                    alt="Recepción de una clínica con personal atendiendo"
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" />
                </div>

                <div className="p-8 rounded-2xl bg-brand-lightGrey border border-brand-grey/40">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Escríbenos por WhatsApp</h2>
                  <p className="text-slate-500 mb-6">Es el canal más rápido para contactarnos.</p>
                  <a
                    href={whatsappLink('Hola, me gustaría hacer una consulta sobre los servicios de Synex.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>

                <div className="p-8 rounded-2xl bg-brand-gradient text-white">
                  <Phone className="w-8 h-8 mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2">Atención directa</h3>
                  <p className="text-white/85 text-sm leading-relaxed">
                    Contáctanos para informes periciales, asesoría, capacitaciones o arriendo de equipamiento médico. Cada consulta es evaluada previamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-white shadow-lg shadow-slate-900/5 border border-brand-grey/40">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Formulario de contacto</h2>
                <p className="text-slate-500 mb-6">Completa el formulario y te responderemos a la brevedad.</p>

                {formState === 'success' && (
                  <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3 animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-800">¡Consulta enviada con éxito!</p>
                      <p className="text-sm text-green-700 mt-0.5">Te responderemos a la brevedad. Si es urgente, escríbenos por WhatsApp.</p>
                    </div>
                  </div>
                )}

                {formState === 'error' && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-800">No se pudo enviar la consulta</p>
                      <p className="text-sm text-red-700 mt-0.5">Ocurrió un error. Por favor, intenta nuevamente o escríbenos por WhatsApp.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      maxLength={100}
                      disabled={formState === 'submitting'}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 disabled:opacity-60 ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-brand-grey bg-white focus:border-brand-blue'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Correo electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        maxLength={255}
                        disabled={formState === 'submitting'}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 disabled:opacity-60 ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-brand-grey bg-white focus:border-brand-blue'
                        }`}
                        placeholder="tu@correo.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Teléfono <span className="text-slate-400 font-normal">(opcional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        maxLength={20}
                        disabled={formState === 'submitting'}
                        className="w-full px-4 py-3 rounded-xl border border-brand-grey bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue disabled:opacity-60"
                        placeholder="+56 9 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry_type" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Tipo de consulta <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="inquiry_type"
                      name="inquiry_type"
                      defaultValue="informe_pericial"
                      disabled={formState === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-brand-grey bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue disabled:opacity-60"
                    >
                      {inquiryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={2000}
                      disabled={formState === 'submitting'}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 disabled:opacity-60 resize-none ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-brand-grey bg-white focus:border-brand-blue'
                      }`}
                      placeholder="Cuéntanos sobre tu consulta o requerimiento..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar consulta
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
