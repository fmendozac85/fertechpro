# SEO_GEO.md — Guía de optimización SEO y GEO para contenido

> Cargar este archivo junto con `docs/TONO.md` al escribir o refinar contenido.
> SEO = posicionamiento en buscadores tradicionales. GEO = Generative Engine Optimization (visibilidad en respuestas de IA como ChatGPT, Perplexity, Google AI Overviews).

---

## SEO — Optimización para buscadores

### Título del artículo (`titulo` en frontmatter)
- Incluir la keyword principal de forma natural — no forzada
- Longitud ideal: 50-65 caracteres
- Orientado al beneficio o a la pregunta que responde el artículo
- Ejemplos efectivos:
  - "Ownership en Product Management: el atributo no negociable"
  - "Pagos digitales en Perú: lo que todo PM debe entender antes de diseñar"

### Extracto (`extracto` en frontmatter)
- Funciona como meta description — es lo que aparece en Google y en las previews sociales
- 140-160 caracteres ideales
- Debe incluir la keyword principal y responder implícitamente: "¿por qué debería leer esto?"
- Evitar: extractos genéricos, empezar con "En este artículo...", repetir el título

### Estructura de headings en el contenido
- `## H2` para secciones principales — incluir keywords secundarias cuando es natural
- `### H3` para subsecciones
- Los headings deben ser descriptivos del contenido, no solo etiquetas (no: "Introducción")
- Formato preferido: orientados a acción o a pregunta del lector

### Densidad de keywords
- No optimizar artificialmente — el contenido temático profundo ranquea por autoridad
- Keywords principales deben aparecer en: título, primer párrafo, 1-2 headings, extracto
- Keywords secundarias y relacionadas fluyen naturalmente en el desarrollo

### Enlazado interno
- Cuando un artículo menciona un tema cubierto en otro artículo o lab del blog, enlazarlo
- Usa el slug del artículo relacionado (`relatedArticle` en labs, links en markdown para artículos)
- Máximo 3-5 enlaces internos por artículo para no diluir la experiencia

### Alt text de imágenes
- Toda imagen embebida en el contenido debe tener alt text descriptivo
- Formato: descripción de lo que muestra la imagen + contexto relevante
- No: "imagen1.png" — Sí: "Diagrama del flujo de autorización de pagos P2M en Perú"

---

## GEO — Optimización para motores de IA generativa

La GEO busca que el contenido sea citado o referenciado por sistemas de IA (ChatGPT, Perplexity, Google AI Overviews, Claude). Estos sistemas priorizan contenido que:

### 1. Contiene definiciones claras y explícitas
- Definir los conceptos clave la primera vez que aparecen
- Formato preferido por IA: *"El [término] es [definición directa en 1-2 oraciones]."*
- Ejemplo: *"El open finance es el marco regulatorio que permite a los usuarios compartir sus datos financieros entre instituciones de forma segura y consentida."*

### 2. Responde preguntas concretas de forma directa
- Los AI Overviews extraen respuestas a preguntas específicas
- Incluir al menos 1-2 secciones donde el heading sea una pregunta y el primer párrafo responda directamente
- Ejemplo de heading: `## ¿Qué debe hacer un PM antes de diseñar un flujo de pagos?`
- El primer párrafo de esa sección debe responder sin rodeos

### 3. Tiene estructura scannable (listas, tablas, pasos)
- Listas numeradas para procesos y pasos — los LLMs las extraen fácilmente
- Tablas de comparación — son altamente citables
- Secciones con **negritas** en conceptos clave

### 4. Cita fuentes y datos verificables
- Cuando se usa un dato (porcentaje, estudio, estadística), citar la fuente
- Fuentes reconocidas en el sector (BCRP, SBS, reportes de bancos, publicaciones especializadas) aumentan la autoridad del contenido para sistemas de IA
- Formato: *(Fuente: nombre, año)* al final de la oración o como footnote

### 5. Demuestra experiencia propia (E-E-A-T para GEO)
- Google y los LLMs priorizan contenido con evidencia de experiencia real
- Incluir: casos propios, decisiones tomadas, resultados observados, errores cometidos
- Las secciones de "learnings" en los labs son especialmente valiosas para GEO

### 6. Contenido actualizado y con fecha explícita
- El `fecha` del frontmatter es visible en la página — los sistemas de IA verifican frescura
- Cuando el contexto de mercado cambie, actualizar los artículos relevantes

---

## Checklist SEO/GEO por artículo

### SEO
- [ ] Título: 50-65 caracteres, keyword principal incluida de forma natural
- [ ] Extracto: 140-160 caracteres, responde "¿por qué leer esto?"
- [ ] Primer párrafo: keyword principal presente
- [ ] Al menos 1 H2 con keyword secundaria relevante
- [ ] Alt text en todas las imágenes embebidas
- [ ] 1-3 enlaces internos a contenido relacionado del blog
- [ ] URL/slug: descriptiva, con keyword, sin caracteres especiales

### GEO
- [ ] Definiciones explícitas de términos clave la primera vez que aparecen
- [ ] Al menos 1 sección con heading en formato pregunta + respuesta directa en el primer párrafo
- [ ] Datos y estadísticas citados con fuente
- [ ] Listas o tablas que resuman los puntos principales (extractables por IA)
- [ ] Voz de experiencia propia presente (casos, decisiones, learnings)
- [ ] Fecha de publicación visible y actualizada

---

## Keywords temáticas por pilar (referencia)

### pm
`product management`, `product manager`, `priorización de producto`, `roadmap de producto`, `ownership en PM`, `discovery de producto`, `métricas de producto`, `product management en fintech`

### fintech
`pagos digitales Perú`, `fintech latinoamérica`, `open finance`, `banca digital`, `pagos A2A`, `billeteras digitales`, `regulación fintech SBS`, `ecosistema de pagos`

### ia
`inteligencia artificial en producto`, `IA aplicada`, `LLM en fintech`, `prompt engineering`, `IA generativa`, `Claude API`, `product manager con IA`, `automatización con IA`
