export const WHATSAPP_NUMBER = '56920504337';
export const WHATSAPP_DISPLAY = '+56 9 2050 4337';

export function whatsappLink(message?: string): string {
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${WHATSAPP_NUMBER}${text}`;
}

export const NAV_LINKS = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios Profesionales', path: '/servicios' },
  { label: 'Arriendo de Equipos', path: '/arriendo' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Preguntas Frecuentes', path: '/preguntas-frecuentes' },
  { label: 'Contacto', path: '/contacto' },
] as const;

export const IMAGES = {
  heroConsultation: 'https://images.pexels.com/photos/39192383/pexels-photo-39192383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  consultation2: 'https://images.pexels.com/photos/39192358/pexels-photo-39192358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  prescription: 'https://images.pexels.com/photos/7195122/pexels-photo-7195122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  consultation3: 'https://images.pexels.com/photos/39192335/pexels-photo-39192335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  medicalForm: 'https://images.pexels.com/photos/7088834/pexels-photo-7088834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  doctorPhone: 'https://images.pexels.com/photos/4173250/pexels-photo-4173250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ultrasound: 'https://images.pexels.com/photos/7108402/pexels-photo-7108402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ultrasound2: 'https://images.pexels.com/photos/7088481/pexels-photo-7088481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ultrasound3: 'https://images.pexels.com/photos/7089288/pexels-photo-7089288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  dentalClinic: 'https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  dentalChair: 'https://images.pexels.com/photos/6812479/pexels-photo-6812479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  dentalXray: 'https://images.pexels.com/photos/6501859/pexels-photo-6501859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  dentalScan: 'https://images.pexels.com/photos/6812508/pexels-photo-6812508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  dentalXrayTablet: 'https://images.pexels.com/photos/5355731/pexels-photo-5355731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  medicalDevice: 'https://images.pexels.com/photos/10987574/pexels-photo-10987574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  xrayRoom: 'https://images.pexels.com/photos/7617601/pexels-photo-7617601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  heartMonitor: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  training: 'https://images.pexels.com/photos/32213424/pexels-photo-32213424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  training2: 'https://images.pexels.com/photos/35645504/pexels-photo-35645504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  teamMeeting: 'https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  businessMeeting: 'https://images.pexels.com/photos/20752572/pexels-photo-20752572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};
