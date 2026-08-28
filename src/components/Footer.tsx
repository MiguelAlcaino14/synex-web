import { Link } from 'react-router-dom';
import { Stethoscope, Mail, MessageCircle } from 'lucide-react';
import { NAV_LINKS, whatsappLink, WHATSAPP_DISPLAY } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-xl text-white tracking-tight">SYNEX</span>
                <span className="text-[10px] font-medium text-slate-400 tracking-wide">LTDA.</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Servicios Profesionales y Equipamiento para Salud. Peritajes médicos, consultoría, capacitación y arriendo de equipamiento médico.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navegación</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-brand-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contacto</h3>
            <div className="space-y-3">
              <a
                href={whatsappLink('Hola, me gustaría hacer una consulta sobre los servicios de Synex.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-brand-green transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {WHATSAPP_DISPLAY}
              </a>
              <Link
                to="/contacto"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-brand-green transition-colors"
              >
                <Mail className="w-4 h-4" />
                Formulario de contacto
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} Synex Inversiones y Servicios Profesionales Limitada. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
