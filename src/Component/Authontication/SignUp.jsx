import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../Context/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, googleSignin, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [displayName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    return hasUpper && hasLower && hasMinLength;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      toast.error(
        "Password must include uppercase, lowercase letters and be at least 6 characters long."
      );
      return;
    }

    setLoading(true);
    try {
      const result = await createUser(email, password);
      if (result) {
        await updateUserProfile({
          displayName,
          photoURL,
        });
        toast.success("Account created successfully!");
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error("Signup error:", err);
      toast.error(err.message || "Failed to create account.");
    } finally {
      setLoading(false);
    }
  };

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9EDE1] to-[#FFF8E7] px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-yellow-200 p-8 transition-all duration-300 hover:shadow-yellow-300/30">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create an Account 🚀
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join <span className="text-[#FBD536] font-semibold">Swapify</span> today
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={displayName}
              onChange={(e) => setName(e.target.value)}
              required
              className="input w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FBD536] transition-all duration-200"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FBD536] transition-all duration-200"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Photo URL (optional)
            </label>
            <input
              type="text"
              placeholder="https://example.com/photo.jpg"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FBD536] transition-all duration-200"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input w-full border-2 border-gray-200 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#FBD536] transition-all duration-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-10 text-gray-500 text-sm hover:text-[#FBD536] transition-colors duration-200"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#FBD536] border-none text-gray-800 font-semibold rounded-xl py-3 hover:bg-[#FAD000] transition-all duration-300 shadow-md hover:shadow-lg"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="relative flex items-center justify-center my-6">
          <div className="w-full h-px bg-gray-200" />
          <span className="absolute bg-white px-3 text-gray-500 text-sm">
            OR
          </span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="btn w-full border border-gray-300 rounded-xl py-3 font-medium hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
          disabled={loading}
        >
          {loading ? "Processing..." : "Sign Up with Google"}
        </button>

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#FBD536] font-medium hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
