import { PLANS, type PlanId } from './plans';
import { isAdminEmail } from './auth';

export interface UsageCheck { allowed: boolean; reason: string; remaining: number; }

// Vérifie connexion + plan + quota + exception admin.
// `used` = nombre d'utilisations ce mois (à brancher sur votre DB).
export function checkUsage(email: string | null | undefined, plan: PlanId, used: number): UsageCheck {
  if (!email) return { allowed: false, reason: 'not_authenticated', remaining: 0 };
  if (isAdminEmail(email)) return { allowed: true, reason: 'admin_unlimited', remaining: -1 };
  const quota = PLANS[plan]?.monthlyQuota ?? 0;
  if (quota === -1) return { allowed: true, reason: 'unlimited', remaining: -1 };
  const remaining = Math.max(0, quota - used);
  return { allowed: remaining > 0, reason: remaining > 0 ? 'ok' : 'quota_exceeded', remaining };
}
