import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../Context/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, googleSignin ,updateUserProfile} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the redirect destination from ProtectedRouts
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

  // ✅ Password validation
  if (!validatePassword(password)) {
    toast.error(
      "Password must include uppercase, lowercase letters and be at least 6 characters long."
    );
    return;
  }

  setLoading(true);

  try {
    // ✅ Step 1: Create user with email & password
    const result = await createUser(email, password);

    if (result) {
      // ✅ Step 2: Update user profile with name & photo
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
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={displayName}
            onChange={(e) => setName(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Photo URL (optional)"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
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

          <button
            type="submit"
            className="btn btn-primary w-full mt-2"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full"
          disabled={loading}
        >
          {loading ? "Processing..." : "Sign Up with Google"}
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
