import { render, screen, fireEvent } from "@testing-library/react";
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter } from "react-router-dom";

const renderComponent = () =>
  render(
    <BrowserRouter>
      <ForgotPassword />
    </BrowserRouter>
  );

describe("ForgotPassword", () => {
  it("renderiza correctamente el título", () => {
    renderComponent();
    expect(screen.getByText(/Recuperar contraseña/i)).toBeInTheDocument();
  });

  it("muestra error si el email es inválido", async () => {
    renderComponent();
    fireEvent.change(screen.getByLabelText(/correo/i), {
      target: { value: "correo_invalido" },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /enviar enlace de recuperación/i })
    );
    expect(
      await screen.findByText("Por favor ingresa un correo válido.")
    ).toBeInTheDocument();
  });

  it("muestra mensaje de éxito si el correo es válido", async () => {
    renderComponent();
    fireEvent.change(screen.getByLabelText(/correo/i), {
      target: { value: "ejemplo@correo.com" },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /enviar enlace de recuperación/i })
    );
    expect(
      await screen.findByText("Te hemos enviado un enlace de recuperación.")
    ).toBeInTheDocument();
  });
});
