import { Router } from 'express';
import { z } from 'zod';
import { db } from '../lib/db';
import { sendContactNotification } from '../lib/mailer';

const INQUIRY_TYPES = ['informe_pericial', 'asesoria', 'capacitacion', 'arriendo_equipamiento', 'otro'] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).nullish(),
  inquiryType: z.enum(INQUIRY_TYPES),
  message: z.string().trim().min(10).max(2000),
});

export const contactoRouter = Router();

contactoRouter.post('/', async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }

  const { name, email, phone, inquiryType, message } = parsed.data;

  try {
    await db.contactSubmission.create({
      data: { name, email, phone: phone ?? null, inquiryType, message },
    });
  } catch (e) {
    console.error('[contacto] error guardando submission', e);
    return res.status(500).json({ error: 'No se pudo enviar la consulta' });
  }

  sendContactNotification({ name, email, phone: phone ?? null, inquiryType, message }).catch((e) => {
    console.error('[contacto] error enviando notificación', e);
  });

  res.status(201).json({ ok: true });
});
