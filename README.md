# SRAP - Realidades Crudas

Una aplicación de autoevaluación brutalmente honesta potenciada por Gemini para eliminar el autoengaño.

## Descripción

SRAP es una herramienta que te ayuda a enfrentar las realidades crudas de tu vida, analizando tus sacrificios y el centro que más sufre (Cabeza, Corazón, Cuerpo).

## Instalación

1.  Clona el repositorio.
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Crea un archivo `.env` basado en `.env.example` y añade tu `GEMINI_API_KEY`.

## Desarrollo Local

Para correr el proyecto localmente:

```bash
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

## Build y Deploy

Para generar la versión de producción:

```bash
npm run build
```

El resultado estará en la carpeta `dist`.

Este proyecto está listo para ser desplegado en Vercel. Asegúrate de configurar la variable de entorno `GEMINI_API_KEY` en el dashboard de Vercel.

## Estructura del Proyecto

- `src/components`: Componentes de React.
- `src/services`: Servicios para conectar con la API de Gemini.
- `vite.config.ts`: Configuración de Vite.
