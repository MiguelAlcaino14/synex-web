import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { WHATSAPP_DISPLAY, whatsappLink } from '@/lib/constants';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-md text-center">
          <AlertTriangle className="w-12 h-12 text-brand-blue mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Algo salió mal</h1>
          <p className="text-slate-500 mb-6">
            Ocurrió un error inesperado. Intenta recargar la página o contáctanos directamente por WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => window.location.reload()} className="btn-primary">
              Recargar página
            </button>
            <a
              href={whatsappLink('Hola, tuve un problema en la página web de Synex.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
