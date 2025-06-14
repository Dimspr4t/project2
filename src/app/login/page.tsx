"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi login: set cookie/token di sini jika perlu
    alert("Login simulated. Implement real auth here.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-xs flex flex-col gap-4"
      >
        <h1 className="text-xl font-bold mb-2 text-center">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="border px-3 py-2 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border px-3 py-2 rounded"
          value={pass}
          onChange={e => setPass(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </main>
  );
}
