import { whatsappLink } from '@/lib/constants';
import { WhatsAppIcon } from './WhatsAppIcon';

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hola, me gustaría hacer una consulta sobre los servicios de Synex.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:bg-[#1da851] hover:scale-110 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
      <span className="absolute right-full mr-3 whitespace-nowrap text-sm font-medium text-white bg-slate-800 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        Escríbenos por WhatsApp
      </span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
