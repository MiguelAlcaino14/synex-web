# Synex Web

Sitio corporativo de Synex Ltda. — Servicios Profesionales y Equipamiento para Salud (peritajes médicos, asesoría, capacitaciones y arriendo de equipamiento médico).

## Stack

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + React Router.
- **Backend** (`api/`): Express + TypeScript + Prisma, Postgres como base de datos.
- Formulario de contacto: valida en frontend y backend, guarda en Postgres y notifica por email (Nodemailer).

## Estructura

```
├── src/            # Frontend (Vite)
├── api/            # Backend (Express + Prisma), proyecto independiente
├── vercel.json      # Config de deploy del frontend en Vercel
├── docker-compose.yml  # api + Postgres local, para desarrollo
```

## Desarrollo local

### Frontend

```bash
npm install
cp .env.example .env   # configura VITE_API_URL
npm run dev
```

### Backend

```bash
cd api
npm install
cp .env.example .env   # configura DATABASE_URL, DIRECT_URL, SMTP_*, etc.
npx prisma migrate deploy
npm run dev
```

O levantar API + Postgres juntos con Docker:

```bash
docker compose up
```

## Variables de entorno

**Frontend** (`.env`):
- `VITE_API_URL` — URL del backend.

**Backend** (`api/.env`):
- `DATABASE_URL` / `DIRECT_URL` — conexión a Postgres (pooled / directa, ver `api/.env.example`).
- `ALLOWED_ORIGIN` — dominio del frontend permitido por CORS.
- `SMTP_*` y `CONTACT_NOTIFY_EMAIL` — notificación por email de nuevos mensajes de contacto.

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo (frontend o backend según carpeta) |
| `npm run build` | Build de producción |
| `npm run typecheck` | Chequeo de tipos |
| `npm run lint` | Lint |

## Deploy

- **Frontend**: Vercel, root directory `.` (usa el `vercel.json` con rewrite para SPA).
- **Backend**: Vercel (root directory `api`, despliega como serverless function vía `api/vercel.json`) o Docker en un droplet/servidor propio (`api/Dockerfile`).
- **Base de datos**: cualquier Postgres — probado con [Neon](https://neon.tech).
