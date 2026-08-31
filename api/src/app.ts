import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { contactoRouter } from './routes/contacto';

const isProd = process.env.NODE_ENV === 'production';

if (!process.env.DATABASE_URL) {
  throw new Error('Falta DATABASE_URL');
}
if (isProd && !process.env.ALLOWED_ORIGIN) {
  throw new Error('Falta ALLOWED_ORIGIN en producción');
}

const allowedOrigins = (process.env.ALLOWED_ORIGIN ?? '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

export const app = express();

app.use(helmet());
app.use(
  cors({
    origin: isProd ? allowedOrigins : true,
  })
);
app.use(morgan(isProd ? 'combined' : 'dev'));
app.use(express.json({ limit: '100kb' }));

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/contacto', contactLimiter, contactoRouter);

app.get('/health', (_req, res) => res.json({ ok: true }));

app.use((_req, res) => {
  res.status(404).json({ error: 'No encontrado' });
});

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('[error]', err);
  res.status(500).json({ error: 'Error interno' });
});
