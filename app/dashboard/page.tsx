import { redirect } from 'next/navigation';
import { auth, isAdminEmail } from '@/lib/auth';
import { PLANS } from '@/lib/plans';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.email) redirect('/login');
  const admin = isAdminEmail(session.user.email);
  const plan = admin ? PLANS.admin : PLANS.free;

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Tableau de bord</h1>
          <p className="subtitle">Connecté : {session.user.email}{admin ? ' · 👑 ADMIN (test illimité)' : ''}</p>
          <div className="card" style={{ maxWidth: 560, margin: '1.5rem auto', textAlign: 'left' }}>
            <h3>Plan actif : {plan.name}</h3>
            <p>Quota mensuel : {plan.monthlyQuota === -1 ? 'illimité' : plan.monthlyQuota}</p>
            <ul>{plan.features.map((f) => <li key={f}>{f}</li>)}</ul>
            {admin && <p style={{ color: '#059669' }}>Mode admin : Stripe contourné, fonctionnalités premium accessibles sans paiement.</p>}
          </div>
          <a href="/pricing" className="btn btn-primary">Voir les forfaits</a>
        </div>
      </section>
    </main>
  );
}
