import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`}>
      <div className="relative w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center shadow-md shadow-brand-blue/20 transition-transform group-hover:scale-105">
        <Stethoscope className="w-5 h-5 text-white" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-extrabold text-xl text-slate-800 tracking-tight">SYNEX</span>
        <span className="text-[10px] font-medium text-slate-400 tracking-wide">LTDA.</span>
      </div>
    </Link>
  );
}
