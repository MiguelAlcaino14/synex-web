import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { whatsappLink } from '@/lib/constants';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryLink?: string;
  showWhatsApp?: boolean;
}

export function CTASection({
  title = '¿Listo para comenzar?',
  subtitle = 'Cuéntanos qué necesitas y te responderemos a la brevedad.',
  primaryLabel = 'Contactar por WhatsApp',
  primaryLink,
  showWhatsApp = true,
}: CTASectionProps) {
  return (
    <section className="section-padding bg-brand-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      <div className="container-page relative z-10 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {showWhatsApp && (
            <a
              href={whatsappLink('Hola, me gustaría hacer una consulta sobre los servicios de Synex.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-brand-blue bg-white hover:bg-brand-lightGrey transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              {primaryLabel}
            </a>
          )}
          {primaryLink && (
            <Link
              to={primaryLink}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              Ver formulario
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
