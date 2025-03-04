import { useState } from "react";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  checkUser: () => void; // Accept the checkUser function
}

export default function Auth({ checkUser }: AuthProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);

    if (error) setError(error.message);
    else alert("Check your email for a confirmation link!");
  };

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      checkUser(); // Call checkUser to update the user state in Dashboard
      navigate("/"); 
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-sm mx-auto p-4 border rounded-lg">
      <h2 className="text-xl font-bold">Login / Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={handleSignIn} disabled={loading} className="bg-blue-500 text-white p-2 rounded">
        {loading ? "loading..." : "Sign In"}
      </button>
      <button onClick={handleSignUp} disabled={loading} className="bg-green-500 text-white p-2 rounded">
        {loading ? "loading..." : "Sign Up"}
      </button>
    </div>
  );
}
