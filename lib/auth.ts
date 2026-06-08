import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

// Auth.js (NextAuth v5). Les clés sont lues à l'exécution — le build passe sans clés.
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

// True si l'utilisateur connecté est l'admin (bypass Stripe / quotas illimités).
export function isAdminEmail(email?: string | null): boolean {
  const admin = process.env.ADMIN_EMAIL;
  return !!email && !!admin && email.toLowerCase() === admin.toLowerCase();
}
