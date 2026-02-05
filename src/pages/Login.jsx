import { getAuthorization } from "../api/getAuthorization";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={getAuthorization}
        className="bg-green-500 px-6 py-3 rounded text-white font-bold"
      >
        Login with Spotify
      </button>
    </div>
  );
}
