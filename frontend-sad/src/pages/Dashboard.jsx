import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const nombre = user?.name || "Usuario";

  const opciones = [
    { icono: "📅", titulo: "Citas" },
    { icono: "👨‍⚕️", titulo: "Médicos" },
    { icono: "👤", titulo: "Mi Perfil" },
    { icono: "🔔", titulo: "Notificaciones" },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold text-white mb-4">Bienvenido</h1>
      <main className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4">
        <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-extrabold text-white text-center mb-10">
            🚀 Bienvenido, <span className="text-purple-400">{nombre}</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {opciones.map((op, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-xl p-6 text-white text-center hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
              >
                <div className="text-5xl mb-3">{op.icono}</div>
                <h2 className="text-xl font-semibold">{op.titulo}</h2>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-8 rounded-lg shadow-lg transition-all duration-300"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
