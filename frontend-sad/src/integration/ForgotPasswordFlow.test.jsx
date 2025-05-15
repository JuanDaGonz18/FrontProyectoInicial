import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";

describe("Flujo de recuperación de contraseña (integración)", () => {
  it("muestra mensaje de éxito al enviar un correo válido", async () => {
    render(
      <MemoryRouter initialEntries={["/forgot-password"]}>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </MemoryRouter>
    );

    // Simula el ingreso de un correo válido
    fireEvent.change(screen.getByLabelText(/correo/i), {
      target: { value: "usuario@ejemplo.com" },
    });

    // Clic en el botón de envío
    fireEvent.click(
      screen.getByRole("button", { name: /enviar enlace de recuperación/i })
    );

    // Espera a que aparezca el mensaje de éxito
    expect(
      await screen.findByText(/Te hemos enviado un enlace de recuperación/i)
    ).toBeInTheDocument();
  });
});
