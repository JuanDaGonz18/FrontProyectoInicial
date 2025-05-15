import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!email) errs.email = "El correo es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Correo no válido";
    if (!password) errs.password = "La contraseña es obligatoria";
    else if (password.length < 6)
      errs.password = "Debe tener al menos 6 caracteres";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      login({ name: "Gonzalo" });
      navigate("/dashboard");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
     className="w-full bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl text-white">
    
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-300">
        🔐 Iniciar sesión
      </h2>

      <div className="mb-4">
        <label htmlFor="correo" className="block text-sm font-medium mb-1">
          Correo
        </label>
        <input
          id="correo"
          type="email"
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="usuario@ejemplo.com"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
        {errors.password && (
          <p className="text-red-400 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <div className="text-right mb-4">
        <Link
          to="/forgot-password"
          className="text-sm text-purple-300 hover:underline"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg shadow-lg transition-all duration-300"
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
