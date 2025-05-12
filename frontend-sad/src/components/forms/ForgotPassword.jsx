import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor ingresa un correo válido.");
      setMessage("");
      return;
    }

    setError("");
    setMessage("📩 Te hemos enviado un enlace para restablecer tu contraseña.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-10 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold text-center text-sky-700 mb-6">
        🔑 Recuperar contraseña
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Correo electrónico</label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        {message && <p className="text-green-600 text-sm mt-1">{message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 rounded-lg shadow-lg"
      >
        Enviar enlace de recuperación
      </button>
    </form>
  );
};

export default ForgotPassword;
