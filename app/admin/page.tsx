import { redirect } from 'next/navigation';
import { auth, isAdminEmail } from '@/lib/auth';
import { stripeReady } from '@/lib/stripe';
import { PUBLIC_PLANS } from '@/lib/plans';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const session = await auth();
  if (!session?.user?.email) redirect('/login');
  if (!isAdminEmail(session.user.email)) redirect('/dashboard');

  const envVars = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'NEXTAUTH_SECRET', 'NEXTAUTH_URL',
    'ADMIN_EMAIL', 'STRIPE_SECRET_KEY', 'STRIPE_WEBHOOK_SECRET', 'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
    'STRIPE_PRICE_STARTER', 'STRIPE_PRICE_PRO', 'STRIPE_PRICE_BUSINESS'];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Admin — EtiquetteConform</h1>
          <p className="subtitle">Réservé à ADMIN_EMAIL. Mode test illimité actif.</p>
          <div className="card" style={{ maxWidth: 640, margin: '1.5rem auto', textAlign: 'left' }}>
            <h3>Stripe</h3>
            <p>{stripeReady() ? '🟢 Stripe configuré' : '🟡 Stripe prêt à configurer (clés manquantes)'}</p>
            <h3 style={{ marginTop: '1rem' }}>Variables d'environnement</h3>
            <ul>
              {envVars.map((v) => (
                <li key={v}>{v} : {process.env[v] ? '✅ défini' : '❌ manquant'}</li>
              ))}
            </ul>
            <h3 style={{ marginTop: '1rem' }}>Forfaits</h3>
            <ul>{PUBLIC_PLANS.map((p) => <li key={p.id}>{p.name} — {p.priceLabel} — quota {p.monthlyQuota}</li>)}</ul>
          </div>
        </div>
      </section>
    </main>
  );
}
