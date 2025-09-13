const MODE = import.meta.env.MODE;

// Your actual URLs
const DEV_URL = 'http://localhost:5173/';
const PROD_URL = 'https://adorable-faun-ab9da1.netlify.app/'; // ← your custom domain

const SCOPES = [
    'user-read-email',
    'user-read-private',
    'user-read-recently-played',
    'user-read-currently-playing',
    'user-top-read',
    'playlist-read-private',
    'playlist-read-collaborative'
];

export const SPOTIFY = {
    REDIRECT_URI: MODE !== 'development' ? PROD_URL : DEV_URL,
    AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
    TOKEN_ENDPOINT: 'https://accounts.spotify.com/api/token',
    SCOPES: SCOPES.join(' '), // make sure scopes are a space-separated string
};
