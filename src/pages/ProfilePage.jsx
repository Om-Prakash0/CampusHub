import { useState } from "react";

export default function ProfilePage({ user, setUser }) {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(form);
    localStorage.setItem("user", JSON.stringify(form));
    setEdit(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-[420px] text-white">

        <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>

        {/* Name */}
        <input
          name="name"
          value={form.name}
          disabled={!edit}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-lg text-black"
        />

        {/* Roll */}
        <input
          name="roll"
          value={form.roll}
          disabled={!edit}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-lg text-black"
        />

        {/* Email */}
        <input
          name="email"
          value={form.email}
          disabled={!edit}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-lg text-black"
        />

        {/* Branch */}
        <input
          name="branch"
          value={form.branch}
          disabled={!edit}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-lg text-black"
        />

        {/* Year */}
        <input
          name="year"
          value={form.year}
          disabled={!edit}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg text-black"
        />

        {/* Buttons */}
        {!edit ? (
          <button
            onClick={() => setEdit(true)}
            className="w-full py-3 bg-indigo-600 rounded-lg"
          >
            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="w-full py-3 bg-green-600 rounded-lg"
          >
            Save Changes
          </button>
        )}

      </div>
    </div>
  );
}