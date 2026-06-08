import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: Request) {
  const sig = request.headers.get('stripe-signature');
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return NextResponse.json({ error: 'Webhook Stripe prêt à configurer — secret manquant.' }, { status: 503 });
  }
  const body = await request.text();
  try {
    const event = stripe.webhooks.constructEvent(body, sig, secret);
    // TODO: mettre à jour le plan/abonnement de l'utilisateur en base selon event.type
    console.log('[stripe] event', event.type);
    return NextResponse.json({ received: true });
  } catch (e) {
    return NextResponse.json({ error: 'Signature invalide: ' + String(e) }, { status: 400 });
  }
}
