import Stripe from 'stripe';

// Lazy/build-safe: une clé vide n'empêche pas `next build` (utilisée à l'exécution).
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2024-06-20',
});

export function stripeReady(): boolean {
  return !!process.env.STRIPE_SECRET_KEY && !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
}
