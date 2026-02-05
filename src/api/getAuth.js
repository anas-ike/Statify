export const getAuth = () => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);

  const accessToken = params.get("access_token");
  const expiresIn = params.get("expires_in");

  if (accessToken) {
    localStorage.setItem("spotify_token", accessToken);
    localStorage.setItem("spotify_expires", Date.now() + expiresIn * 1000);
    window.location.hash = "";
  }

  return accessToken;
};
