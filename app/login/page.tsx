'use client';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <main>
      <section className="hero">
        <div className="container" style={{ maxWidth: 420 }}>
          <h1>Connexion à EtiquetteConform</h1>
          <p className="subtitle">Accédez à votre tableau de bord.</p>
          <button className="btn btn-lg btn-primary" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
            Se connecter avec Google
          </button>
          <p style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: 0.7 }}>
            Auth Google via Auth.js. Configurez GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET dans .env.
          </p>
        </div>
      </section>
    </main>
  );
}
