import { SPOTIFY } from '../constants/spotify.js';

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const { REDIRECT_URI, AUTH_ENDPOINT, SCOPES } = SPOTIFY;
const RESPONSE_TYPE = 'token';

export const accessUrl =
  `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&scope=${encodeURIComponent(SCOPES.join(' '))}` +
  `&response_type=${RESPONSE_TYPE}` +
  `&show_dialog=true`;
