import { getAuthorization } from "../api/getAuthorization";

export default function Login() {
  function handleLogin() {
    window.location.href = getAuthorization();
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-green-500 text-white rounded-lg"
      >
        Login with Spotify
      </button>
    </div>
  );
}
