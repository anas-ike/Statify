export const fetchEndPoint = async (url) => {
  const token = localStorage.getItem("spotify_token");

  if (!token) return null;

  try {
    const res = await fetch(`https://api.spotify.com/v1/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("Spotify API Error:", res.status);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    return null;
  }
};
