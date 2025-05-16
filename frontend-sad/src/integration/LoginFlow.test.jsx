import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

beforeAll(() => {
  global.fetch = vi.fn((url, options) => {
    if (url.includes("/api/auth/login")) {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            user: { email: "usuario@correo.com", nombre: "Usuario" },
            accessToken: "fake-token",
          }),
      });
    }
    // Puedes agregar más mocks según tus endpoints
    return Promise.reject(new Error("fetch failed"));
  });
});

afterAll(() => {
  global.fetch = undefined;
});

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
    const textos = await screen.findAllByText(/bienvenido/i);
    expect(textos.length).toBeGreaterThan(0);
  });
});
