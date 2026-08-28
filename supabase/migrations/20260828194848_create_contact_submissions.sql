/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person submitting the form
  - `email` (text, not null) — contact email
  - `phone` (text, nullable) — optional phone number
  - `inquiry_type` (text, not null) — type of inquiry: informe_pericial, asesoria, capacitacion, arriendo_equipamiento, otro
  - `message` (text, not null) — the message body
  - `status` (text, default 'new') — tracking status for internal use
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- This is a no-auth public website. The contact form is submitted by anonymous visitors.
- INSERT policy for anon + authenticated (anyone can submit a contact form).
- No SELECT/UPDATE/DELETE policies — submissions are only readable/managable server-side, not from the frontend.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  inquiry_type text NOT NULL CHECK (inquiry_type IN ('informe_pericial', 'asesoria', 'capacitacion', 'arriendo_equipamiento', 'otro')),
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
