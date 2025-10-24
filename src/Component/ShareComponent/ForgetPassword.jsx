import React, { useState } from "react";
import { Link } from "react-router";
import { Mail } from "lucide-react";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/useAuth";
import { redirectToMailbox } from "../../utils/utils";

const ForgetPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email) {
    toast.error("Please enter your email address.");
    return;
  }

  setLoading(true);

  try {
    await resetPassword(email);
    toast.success("Password reset email sent! Redirecting to your inbox...");

    setTimeout(() => {
      redirectToMailbox(email);
      setEmail("");
    }, 1500);
  } catch (err) {
    toast.error(err.message || "Failed to send reset email.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/30">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mb-3">
            <Mail className="text-blue-600 w-7 h-7" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Forgot Password?
          </h2>
          <p className="text-gray-500 text-sm text-center mt-1">
            Don’t worry — we’ll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-full mt-3 transition duration-200"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition duration-200"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
