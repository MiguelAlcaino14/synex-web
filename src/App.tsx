import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { ServiciosPage } from '@/pages/ServiciosPage';
import { ArriendoPage } from '@/pages/ArriendoPage';
import { NosotrosPage } from '@/pages/NosotrosPage';
import { FAQPage } from '@/pages/FAQPage';
import { ContactoPage } from '@/pages/ContactoPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/arriendo" element={<ArriendoPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/preguntas-frecuentes" element={<FAQPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
