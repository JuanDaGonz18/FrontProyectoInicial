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

## Integración Exitosa con el Backend

Una parte fundamental del desarrollo fue conectar correctamente este frontend con los microservicios del backend, desplegados en un entorno cloud seguro y escalable.

Durante las pruebas finales, se logró una integración **completa y estable** con los siguientes servicios:

- **Auth Service**: para login, validación de credenciales y gestión de tokens JWT.
- **Notificaciones y Email**: para recuperación de contraseñas mediante correo electrónico.
- **Servicios clínicos (médicos, citas, reportes)**: se simuló acceso autenticado a los módulos de gestión médica directamente desde el dashboard protegido.

La conexión se validó en tiempo real con flujos de extremo a extremo y respuestas reales del backend, garantizando así que los datos fluyan correctamente entre cliente y servidor. Todas las rutas protegidas se comportan como se espera, respetando los mecanismos de sesión y autorización definidos.

> Esta integración se logró configurando adecuadamente las variables de entorno, adaptando los `fetch` de los servicios y ejecutando pruebas automatizadas que confirman la conexión exitosa con los endpoints backend desplegados.

---

## Conclusión

Este frontend no solo es visualmente atractivo y fácil de usar, sino que también fue construido con bases sólidas de arquitectura, pruebas rigurosas y conexión real a servicios backend.

Su diseño modular, pruebas automatizadas, flujo de autenticación y validación de sesión, lo convierten en una **solución lista para producción** o como punto de partida para proyectos de mayor escala.

> En resumen: no es solo una interfaz bonita, es un sistema robusto, probado y conectado, listo para servir a usuarios reales.

---
