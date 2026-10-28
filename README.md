# Portfolio de Marcos Lisoski

Portfolio personal responsive construido con Next.js App Router, React, TypeScript y Tailwind CSS. Incluye tema claro/oscuro, trayectoria filtrable, skills, proyectos, CV imprimible, formulario con validación y terminal interactiva.

## Desarrollo local

```bash
npm install
npm run dev
```

## Personalización

Editá `profile`, `experience`, `skills` y `projects` al comienzo de `src/app/page.tsx`.

- Configurá `email`, `github` y `linkedin` con tus enlaces reales y conectalos en los accesos de contacto. El formulario usa `mailto:` y el botón de descarga abre la vista de impresión del navegador, configurada para imprimir solo el CV.
- Reemplazá los proyectos de ejemplo por tus proyectos reales y completá sus enlaces de demo y repositorio en las tarjetas.
- Actualizá la bio, descripciones y tecnologías con la información que quieras publicar.

## CV en PDF

El botón **Descargar CV (PDF)** abre el diálogo de impresión. Elegí «Guardar como PDF» para generar el archivo; la hoja está preparada para imprimir en una página.
