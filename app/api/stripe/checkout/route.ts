import { NextResponse } from 'next/server';
import { stripe, stripeReady } from '@/lib/stripe';
import { auth } from '@/lib/auth';

export async function POST(request: Request) {
  if (!stripeReady()) {
    return NextResponse.json({ error: 'Stripe prêt à configurer — clés manquantes.' }, { status: 503 });
  }
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Connexion requise.' }, { status: 401 });
  }
  try {
    const { priceId } = await request.json();
    const checkout = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: session.user.email,
      success_url: (process.env.NEXTAUTH_URL || 'http://localhost:3000') + '/dashboard?checkout=success',
      cancel_url: (process.env.NEXTAUTH_URL || 'http://localhost:3000') + '/pricing?checkout=cancel',
    });
    return NextResponse.json({ url: checkout.url });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 400 });
  }
}
