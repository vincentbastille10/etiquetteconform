// Plans & quotas — centralisé. Modifiez ici les limites métier.
export type PlanId = 'free' | 'starter' | 'pro' | 'business' | 'admin';

export interface Plan {
  id: PlanId;
  name: string;
  priceLabel: string;
  monthlyQuota: number;      // -1 = illimité
  stripePriceEnv?: string;   // nom de la variable .env contenant le price ID
  features: string[];
}

export const PLANS: Record<PlanId, Plan> = {
  free:     { id: 'free',     name: 'Free',     priceLabel: '0€',        monthlyQuota: 3,
              features: ['3 essais / mois', 'Résultat basse résolution'] },
  starter:  { id: 'starter',  name: 'Starter',  priceLabel: '9€/mois',   monthlyQuota: 50,
              stripePriceEnv: 'STRIPE_PRICE_STARTER',  features: ['50 traitements / mois', 'Support email'] },
  pro:      { id: 'pro',      name: 'Pro',      priceLabel: '29€/mois',  monthlyQuota: 300,
              stripePriceEnv: 'STRIPE_PRICE_PRO',      features: ['300 traitements / mois', 'Support prioritaire'] },
  business: { id: 'business', name: 'Business', priceLabel: 'Sur devis', monthlyQuota: 5000,
              stripePriceEnv: 'STRIPE_PRICE_BUSINESS', features: ['Usage étendu', 'SLA & onboarding'] },
  admin:    { id: 'admin',    name: 'Admin',    priceLabel: '—',         monthlyQuota: -1,
              features: ['Accès illimité', 'Bypass Stripe (mode test)'] },
};

export const PUBLIC_PLANS: Plan[] = [PLANS.free, PLANS.starter, PLANS.pro, PLANS.business];
