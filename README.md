# Celiacos Guatemala

Sitio web de [celiacos.com.gt](https://celiacos.com.gt), construido con [Astro](https://astro.build) y desplegado en [Vercel](https://vercel.com).

## Comandos

| Comando           | Acción                                     |
| ----------------- | ------------------------------------------ |
| `npm install`     | Instala dependencias                       |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Compila el sitio estático en `./dist/`     |
| `npm run preview` | Previsualiza el build localmente           |
| `npm run check`   | Build + chequeo de tipos                   |

## Despliegue

Cada push a `main` se despliega automáticamente en Vercel. El sitemap se genera en el build (`/sitemap-index.xml`) vía `@astrojs/sitemap`.

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
