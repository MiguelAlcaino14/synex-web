import nodemailer from 'nodemailer';

const transporter = process.env.SMTP_HOST
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT ?? 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

interface ContactNotificationInput {
  name: string;
  email: string;
  phone: string | null;
  inquiryType: string;
  message: string;
}

export async function sendContactNotification(input: ContactNotificationInput): Promise<void> {
  const to = process.env.CONTACT_NOTIFY_EMAIL;
  if (!transporter || !to) {
    console.warn('[mailer] SMTP no configurado, se omite notificación de contacto');
    return;
  }

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject: `Nueva consulta — ${input.inquiryType}`,
    text: [
      `Nombre: ${input.name}`,
      `Email: ${input.email}`,
      `Teléfono: ${input.phone ?? '(no indicado)'}`,
      `Tipo de consulta: ${input.inquiryType}`,
      '',
      'Mensaje:',
      input.message,
    ].join('\n'),
  });
}
