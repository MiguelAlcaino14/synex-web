import { IMAGES } from '@/lib/constants';

const gallery = [
  { src: IMAGES.ultrasound3, alt: 'Equipo de ecografía con transductores', caption: 'Ecografía' },
  { src: IMAGES.dentalClinic, alt: 'Box dental con lámpara y instrumental', caption: 'Entorno odontológico' },
  { src: IMAGES.dentalChair, alt: 'Sillón dental en clínica odontológica', caption: 'Odontología' },
  { src: IMAGES.dentalXrayTablet, alt: 'Radiografía dental digital en tablet', caption: 'Imagenología digital' },
  { src: IMAGES.medicalDevice, alt: 'Monitor de signos vitales y equipo médico', caption: 'Equipo diagnóstico' },
  { src: IMAGES.xrayRoom, alt: 'Sala de rayos X equipada', caption: 'Diagnóstico por imágenes' },
];

export function EquipmentGallery() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Equipamiento y entornos de salud</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Tipos de equipamiento médico y odontológico con los que trabajamos. Imágenes referenciales.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <figure key={item.caption} className="group relative overflow-hidden rounded-2xl shadow-lg shadow-slate-900/5">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
