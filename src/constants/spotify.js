const MODE = import.meta.env.MODE;

// URLs
const DEV_URL = 'http://localhost:5173/';
const PROD_URL = 'https://statify.lightsout.in/';

export const SPOTIFY = {
  REDIRECT_URI: MODE === 'development' ? DEV_URL : PROD_URL,

  AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
  TOKEN_ENDPOINT: 'https://accounts.spotify.com/api/token',

  SCOPES: [
    'user-read-email',
    'user-read-private',
    'user-read-recently-played',
    'user-read-currently-playing',
    'user-top-read',
    'playlist-read-private',
    'playlist-read-collaborative'
  ]
};
