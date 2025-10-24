import React, { useState } from "react";
import { User, Mail, Edit3 } from "lucide-react";
import { useAuth } from "../Context/useAuth";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  console.log(user)

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUserProfile({ displayName: name, photoURL: photo });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/30">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <img
              src={
                user?.photoURL ||
                "https://i.ibb.co/6rD9rZL/default-avatar.png"
              }
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 shadow-md"
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-800 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />{" "}
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-500 flex items-center gap-2 mt-1">
            <Mail className="w-4 h-4 text-blue-500" /> {user?.email}
          </p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsEditing(true)}
            className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 w-full transition duration-200"
          >
            <Edit3 className="w-4 h-4" /> Update Profile
          </button>
        </div>

        {isEditing && (
          <form
            onSubmit={handleUpdate}
            className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-4"
          >
            <label className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />

            <div className="flex flex-col gap-3 mt-4">
              <button
                type="submit"
                className="btn bg-blue-600 hover:bg-blue-700 text-white w-full rounded-lg transition duration-200"
                disabled={loading}
              >
                {loading ? "Updating..." : "Save Changes"}
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn btn-outline w-full rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
