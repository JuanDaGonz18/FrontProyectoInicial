# Frontend - Sistema de Agendamiento Médico

Este repositorio contiene el **frontend del sistema de agendamiento médico**, desarrollado como parte del proyecto final de la asignatura **Diseño y Arquitectura de Software**. Este sistema está orientado a mejorar los procesos administrativos en centros de salud, permitiendo a pacientes y personal médico gestionar citas de forma eficiente, segura y automatizada.

La aplicación se desarrolló con **React + Vite**, aplicando principios de arquitectura moderna como **composición de componentes**, **gestión centralizada del estado**, **separación de responsabilidades**, pruebas automatizadas y un diseño visual limpio, accesible y profesional. Está preparada para integrarse con un backend basado en microservicios desplegado en la nube.

---

## Arquitectura del Proyecto

El frontend está estructurado de forma modular, siguiendo buenas prácticas de arquitectura de software para facilitar el mantenimiento, la escalabilidad y la testabilidad del sistema. La organización del código es la siguiente:

```
src/
├── assets/               # Recursos estáticos como logotipos e imágenes
├── components/           # Componentes reutilizables del sistema
│   └── forms/            # Formularios: inicio de sesión y recuperación
├── context/              # Contexto global para autenticación y sesión
├── integration/          # Pruebas de integración de flujos completos
├── pages/                # Vistas completas del sistema (Login, Dashboard, etc.)
├── router/               # Configuración de rutas y navegación
├── services/             # Abstracciones para comunicación con APIs
├── App.jsx               # Componente principal de la aplicación
├── main.jsx              # Punto de entrada de React
└── setupTests.js         # Configuración global para pruebas
```

---

## Tecnologías Utilizadas

El frontend fue construido con un stack moderno enfocado en rendimiento, experiencia de usuario y facilidad de pruebas.

- **React 18** – Biblioteca principal para construcción de interfaces dinámicas.
- **Vite** – Bundler ligero y ultra rápido para desarrollo con hot reload.
- **TailwindCSS** – Sistema de clases utilitarias para estilización rápida, modular y responsiva.
- **React Router DOM** – Manejador de rutas y navegación con control de acceso.
- **Context API** – Mecanismo para gestión de estado global (autenticación).
- **Vitest + Testing Library** – Ecosistema de pruebas para validar componentes y flujos.
- **Preparado para Azure** – Compatible con despliegue en Azure App Services como frontend desacoplado.

---

## Funcionalidades Implementadas

### Autenticación de Usuarios

- Formulario de login con validación de campos obligatorios.
- Verificación del formato del correo electrónico.
- Simulación de sesión activa y navegación protegida mediante Context API.
- Redirección automática al dashboard tras login exitoso.

### Recuperación de Contraseña

- Formulario para recuperación de cuenta por correo electrónico.
- Validación del formato del email.
- Feedback visual al usuario tras el envío exitoso.

### Navegación Segura y Protegida

- Definición de rutas públicas y privadas.
- Acceso controlado a vistas protegidas.
- Redirección automática si no hay sesión activa.

### Diseño e Interfaz de Usuario

- Estilo limpio y profesional con TailwindCSS.
- Uso de gradientes, sombras, transiciones y layout centrado.
- Interfaz responsiva y centrada visualmente.
- Preparación para escalado y extensiones visuales futuras.

---

## Pruebas Automatizadas

Para garantizar la calidad del software, el sistema cuenta con pruebas automatizadas unitarias y de integración, que validan tanto componentes aislados como flujos reales de interacción del usuario.

### Pruebas Unitarias

Estas pruebas validan el comportamiento interno de componentes individuales:

| Componente        | Archivo                  | Descripción |
|------------------|--------------------------|-------------|
| `LoginForm`      | `LoginForm.test.jsx`     | Verifica campos vacíos y formato incorrecto en login. |
| `ForgotPassword` | `ForgotPassword.test.jsx`| Valida ingreso de correos inválidos y muestra de mensajes. |

### Pruebas de Integración

Estas pruebas simulan flujos completos del usuario interactuando con varios componentes:

| Flujo                     | Archivo                      | Qué valida |
|--------------------------|------------------------------|------------|
| Inicio de sesión         | `LoginFlow.test.jsx`         | Simula login completo y redirección al dashboard. |
| Recuperación de cuenta   | `ForgotPasswordFlow.test.jsx`| Simula envío exitoso de email y feedback correcto. |

### Ejecutar las pruebas

Para correr toda la suite de pruebas:

```bash
npm install
npx vitest run
```

Para correr en modo interactivo (con watcher):

```bash
npx vitest
```

---

## Instalación y Uso

1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/frontend-sad.git
cd frontend-sad
```

2. Instalar las dependencias:

```bash
npm install
```

3. Ejecutar el entorno de desarrollo:

```bash
npm run dev
```

La aplicación se ejecutará en `http://localhost:5173/`.

---

## Cumplimiento de Requisitos del Proyecto

El frontend implementado cumple con los requisitos técnicos y de calidad definidos en el documento de arquitectura de solución (SAD):

- Estructura modular y mantenible.
- Integración con React Context para autenticación.
- Navegación protegida por estado de sesión.
- Interfaz moderna, clara y accesible.
- Pruebas unitarias e integradas completas y funcionales.
- Preparación para integración directa con microservicios backend (auth-service, paciente-service, etc.).
- Documentación técnica clara y precisa.

---
