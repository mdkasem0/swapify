import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import {useAuth} from "../../Context/useAuth"
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, googleSignin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Email/Password Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInUser(email, password);
      toast.success("Login successful!", { removeDelay: 500 });
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleSignin();
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login to Swapify</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input input-bordered w-full pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <Link
            to="/forgot-password"
            className="text-sm text-primary hover:underline self-end"
          >
            Forgot Password?
          </Link>

          <button
            type="submit"
            className="btn btn-primary w-full mt-2"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full"
          disabled={loading}
        >
          {loading ? "Processing..." : "Login with Google"}
        </button>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
