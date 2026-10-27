# FitZone

Sitio web de ejercicios en gym y en casa, con un entrenador IA (Gemini).

## Páginas
- `index.html` – Inicio
- `ejercicios.html` – Todos los ejercicios
- `gym.html` – Ejercicios en gym
- `casa.html` – Ejercicios en casa
- `buscar.html` – Buscador
- `entrenador-ia.html` – Entrenador IA

## Uso
Abre `index.html` en el navegador. Para GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.

## Entrenador IA
Basado en Gemini. Pide al usuario su propia API key (se guarda solo en su navegador, en `localStorage`) y arma una lista de ejercicios con series, repeticiones, descanso y consejos de técnica.

> **Importante:** la API key **no** debe escribirse nunca en el código del sitio: cualquier visitante podría leerla desde el navegador y consumir la cuota. La constante `GEMINI_KEY` en `app.js` debe quedarse vacía; si quieres que nadie tenga que pegar una clave, la llamada tiene que hacerse desde un servidor propio (proxy) que guarde la clave y no la exponga.

## Diseño
- **Temas:** oscuro por defecto y claro con el botón ☀/☾ de la navegación. Se recuerda en `localStorage` y respeta `prefers-color-scheme`. Hay un script en el `<head>` que aplica el tema antes de pintar para evitar el parpadeo.
- **Tokens:** todos los colores viven en variables CSS (`:root` y `[data-theme="light"]`). Para cambiar la paleta, edita solo esos dos bloques.
- **Microinteracciones:** aparición escalonada al desplazar (`.reveal` con `--d`), zoom de imagen en las tarjetas, subrayado animado en los títulos, deslizador en el selector Gym/Casa del inicio, flechas en los accesos del inicio y contadores animados en las cifras.
- **Barra de progreso** de lectura y sombra en la navegación al bajar.
- **Accesibilidad:** todo se puede usar con teclado, el modal se cierra con `Esc` y se navega con ←/→, y `prefers-reduced-motion` desactiva todas las animaciones.

## Imágenes
Guarda las imágenes de ejercicios en la carpeta `img/`. El favicon es `img/favicon.svg`.
