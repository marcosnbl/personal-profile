# Marcos Lisoski · Portfolio profesional

Portfolio personal para presentar mi trayectoria en desarrollo de software y QA Automation, mi formación y mis proyectos. Una experiencia responsive con foco en frontend, backend, calidad de software y herramientas de IA aplicadas al desarrollo.

[GitHub](https://github.com/marcosnbl) · [LinkedIn](https://www.linkedin.com/in/marcosnbl/)

## Funcionalidades

- **Presentación y biografía:** perfil profesional, intereses y enfoque de trabajo.
- **Navegación persistente:** acceso directo a las secciones durante el scroll y menú hamburguesa en móvil.
- **Trayectoria interactiva:** experiencia y educación filtrables, con detalles desplegables.
- **Stack tecnológico:** lenguajes, frameworks, automatización, metodologías, control de versiones e IA.
- **Proyectos destacados:** descripción, tecnologías y enlaces a demos y repositorios disponibles.
- **CV en PDF:** vista de impresión específica para guardar el currículum desde el navegador.
- **Contacto directo:** accesos a WhatsApp, GitHub y LinkedIn.
- **Tema claro y oscuro:** selector disponible en la navegación.
- **Terminal interactiva:** comandos para explorar el perfil desde el footer.

## Stack del proyecto

| Tecnología              | Uso                                       |
| ----------------------- | ----------------------------------------- |
| Next.js 14 · App Router | Estructura de la aplicación y compilación |
| React 18                | Componentes e interacciones               |
| TypeScript              | Tipado del código                         |
| Tailwind CSS y CSS      | Estilos, temas y diseño responsive        |
| Lucide React            | Iconos de la interfaz                     |
| Inter y JetBrains Mono  | Tipografía mediante `next/font`           |
| Prettier                | Formato consistente del código            |

## Ejecutar en local

Necesitás Node.js y npm. Se recomienda Node.js 22.

Desde la carpeta del proyecto:

```bash
npm ci
npm run dev -- --port 3001
```

Abrí [http://localhost:3001](http://localhost:3001). El puerto 3001 permite trabajar con este portfolio mientras otro proyecto utiliza el 3000.

Para comprobar la versión de producción:

```bash
npm run build
npm start -- --port 3001
```

Detené antes el servidor de desarrollo si está utilizando el mismo puerto. Durante la compilación, `next/font` necesita acceso a Google Fonts para descargar las fuentes si todavía no están en caché.

## Comandos disponibles

| Comando                | Descripción                                     |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Inicia el servidor de desarrollo                |
| `npm run build`        | Genera la compilación de producción             |
| `npm start`            | Sirve la compilación de producción              |
| `npm run lint`         | Ejecuta el comando de ESLint de Next.js         |
| `npm run format`       | Formatea los archivos del proyecto con Prettier |
| `npm run format:check` | Comprueba el formato sin modificar archivos     |

## Estructura

```text
src/app/
├── page.tsx          # Contenido, secciones e interacciones
├── layout.tsx        # Layout, metadatos, fuentes y estilos
├── icon.svg          # Favicon del portfolio
├── globals.css       # Estilos base, variables y responsive
├── about.css         # Biografía
├── contact.css       # Contacto
├── cv.css            # Tarjeta y vista de impresión del CV
├── hero.css          # Presentación y snippet visual
├── navigation.css    # Barra persistente y navegación móvil
├── projects.css      # Tarjetas y vista previa de proyectos
├── skills.css        # Grid del stack tecnológico
├── social.css        # Iconos y enlaces sociales
└── typography.css    # Alineación y legibilidad de los párrafos
```

## Personalización

Los datos principales están al comienzo de `src/app/page.tsx`:

| Bloque       | Contenido                                                 |
| ------------ | --------------------------------------------------------- |
| `profile`    | Nombre, ubicación y enlaces profesionales                 |
| `experience` | Experiencia laboral y formación académica                 |
| `skills`     | Categorías y tecnologías del stack                        |
| `projects`   | Títulos, descripciones, tecnologías, demos y repositorios |
| `nav`        | Etiquetas y destinos de la navegación                     |

La biografía y los textos de presentación se editan en las secciones correspondientes del mismo archivo. Los colores de ambos temas se definen en `globals.css`; los metadatos, en `layout.tsx`.

La primera tarjeta destaca [Personal Planner](https://personal-planner-dusky.vercel.app/), la segunda presenta este portfolio y la tercera queda reservada para un próximo proyecto.

### CV en PDF

Los botones de CV abren el diálogo de impresión del navegador. Elegí **Guardar como PDF** para generar el documento. Los estilos de impresión muestran la hoja del CV y ocultan la interfaz del portfolio.

### Terminal

Desde **Abrir terminal**, en el footer, se pueden ejecutar:

```text
help · about · skills · projects · contact · clear
```

## Despliegue en Vercel

1. Subí el código fuente a tu repositorio de GitHub.
2. Importá ese repositorio como un proyecto en Vercel.
3. Seleccioná **Next.js** como framework y mantené los valores predeterminados de compilación y salida.
4. Publicá el proyecto. Los siguientes cambios en la rama de producción se desplegarán mediante la integración con GitHub.

La configuración actual utiliza Next.js sin exportación estática. No es necesario generar ni subir una carpeta `out/`, ni configurar GitHub Pages.

El proyecto actual no requiere variables de entorno. `.gitignore` excluye dependencias, archivos generados y configuraciones locales, incluidos `node_modules/`, `.next/`, `.vercel/` y `.env*`.
