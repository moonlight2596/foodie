const UBER_AUTH_URL = 'https://login.uber.com/oauth/v2/authorize';
const UBER_TOKEN_URL = 'https://login.uber.com/oauth/v2/token';

export function getUberAuthUrl() {
  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_UBER_CLIENT_ID,
    response_type: 'code',
    redirect_uri: import.meta.env.VITE_UBER_REDIRECT_URI,
    scope: 'delivery',
  });
  return `${UBER_AUTH_URL}?${params.toString()}`;
}

export async function exchangeUberCode(code: string) {
  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_UBER_CLIENT_ID,
    client_secret: import.meta.env.VITE_UBER_CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: import.meta.env.VITE_UBER_REDIRECT_URI,
    code,
  });

  const res = await fetch(UBER_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  if (!res.ok) {
    throw new Error('Failed to exchange Uber authorization code');
  }

  return res.json();
}
