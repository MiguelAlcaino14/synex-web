import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center bg-brand-lightGrey">
      <div className="container-page text-center">
        <h1 className="text-7xl lg:text-9xl font-extrabold font-display bg-brand-gradient bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Página no encontrada</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          La página que buscas no existe o ha sido movida. Vuelve al inicio para continuar navegando.
        </p>
        <Link to="/" className="btn-primary">
          <Home className="w-4 h-4" />
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
