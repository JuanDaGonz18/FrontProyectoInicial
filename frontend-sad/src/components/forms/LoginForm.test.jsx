import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { AuthProvider } from "../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";

const renderWithProviders = (ui) => {
  return render(
    <BrowserRouter>
      <AuthProvider>{ui}</AuthProvider>
    </BrowserRouter>
  );
};

describe("LoginForm", () => {
  it("renderiza el formulario", () => {
    renderWithProviders(<LoginForm />);
    expect(screen.getByText("🔐 Iniciar sesión")).toBeInTheDocument();
  });

  it("muestra error si se envía vacío", () => {
    renderWithProviders(<LoginForm />);
    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

    expect(
  screen.getByText("El correo es obligatorio")
).toBeInTheDocument();

    expect(
      screen.getByText("La contraseña es obligatoria")
    ).toBeInTheDocument();
  });
});