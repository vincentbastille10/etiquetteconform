import { NextResponse } from 'next/server';

// Route de contact fonctionnelle (offline-friendly).
// Reçoit le formulaire POST, journalise, puis redirige vers /contact?sent=1.
// Aucune clé externe requise — remplaçable par Resend/Brevo/SMTP plus tard.
export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    // TODO: brancher un vrai envoi (Resend/Brevo/SMTP). Pour l'instant: log serveur.
    console.log('[contact] nouveau message', { name, email, message });

    return NextResponse.redirect(new URL('/contact?sent=1', request.url), 303);
  } catch (err) {
    return NextResponse.json(
      { error: 'Impossible de traiter le formulaire' },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: 'contact' });
}
