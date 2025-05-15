import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

describe("Flujo de login (integración)", () => {
  it("redirige al Dashboard luego de iniciar sesión exitosamente", async () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </MemoryRouter>
      </AuthProvider>
    );

    // Escribir datos válidos
    fireEvent.change(screen.getByLabelText(/correo/i), {
      target: { value: "usuario@correo.com" },
    });
    fireEvent.change(screen.getByLabelText(/contraseña/i), {
      target: { value: "123456" },
    });

    // Hacer clic en Entrar
    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

    // Verificar redirección al Dashboard
    expect(await screen.findByText(/bienvenido/i)).toBeInTheDocument();
  });
});
