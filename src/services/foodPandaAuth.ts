// NOTE: Foodpanda does not provide a public OAuth API.
// The endpoints below are placeholders. Replace them with actual URLs once available.
const FOODPANDA_AUTH_URL = 'https://auth.foodpanda.com/oauth/authorize';
const FOODPANDA_TOKEN_URL = 'https://auth.foodpanda.com/oauth/token';

export function getFoodPandaAuthUrl() {
  if (!import.meta.env.VITE_FOODPANDA_CLIENT_ID) return '';
  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_FOODPANDA_CLIENT_ID,
    response_type: 'code',
    redirect_uri: import.meta.env.VITE_FOODPANDA_REDIRECT_URI,
    scope: 'delivery',
  });
  return `${FOODPANDA_AUTH_URL}?${params.toString()}`;
}

export async function exchangeFoodPandaCode(code: string) {
  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_FOODPANDA_CLIENT_ID,
    client_secret: import.meta.env.VITE_FOODPANDA_CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: import.meta.env.VITE_FOODPANDA_REDIRECT_URI,
    code,
  });

  const res = await fetch(FOODPANDA_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  if (!res.ok) {
    throw new Error('Failed to exchange FoodPanda authorization code');
  }

  return res.json();
}
