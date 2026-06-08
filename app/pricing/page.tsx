'use client';
import { PUBLIC_PLANS } from '@/lib/plans';

async function checkout(priceEnvName?: string) {
  // Le price ID réel est injecté côté serveur via .env ; ici on passe le nom logique.
  const res = await fetch('/api/stripe/checkout', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId: priceEnvName }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
  else alert(data.error || 'Stripe prêt à configurer.');
}

export default function PricingPage() {
  return (
    <main>
      <section className="pricing">
        <div className="container">
          <h2>Forfaits EtiquetteConform</h2>
          <div className="grid">
            {PUBLIC_PLANS.map((p) => (
              <div className="card" key={p.id}>
                <h3>{p.name}</h3>
                <p className="price">{p.priceLabel}</p>
                <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                {p.stripePriceEnv
                  ? <button className="btn btn-primary" onClick={() => checkout(p.stripePriceEnv)}>Choisir {p.name}</button>
                  : <a href="/login" className="btn btn-secondary">Commencer gratuitement</a>}
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', opacity: 0.7, fontSize: '0.85rem' }}>
            Admin : testez toutes les fonctionnalités sans paiement via /dashboard.
          </p>
        </div>
      </section>
    </main>
  );
}
