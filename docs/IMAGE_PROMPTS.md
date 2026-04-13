# IMAGE_PROMPTS.md — Guía de prompts para imágenes en Nanobanana

> Cargar este archivo cuando se vaya a generar la feature image de un artículo o lab nuevo.

---

## Imágenes de referencia analizadas

- `/public/imagenes/AOE-banca/featureImg-AOE-banca.png` — Fintech / banca digital
- `/public/imagenes/ownership-pm/ownership-featureImage.png` — Product Management / liderazgo
- `/public/imagenes/pagos-pm/pagos-pm.png` — Pagos digitales / ecosistema
- `/public/imagenes/priorizacion-openfinance-pm/FeatureImg-openfinance-pm.png` — Open finance / PM

---

## Estilo visual identificado

### Paleta de colores predominante

Dos registros según el tono del artículo:

**Registro oscuro** (fintech técnico, IA, temas complejos):
- Fondo: dark teal profundo o navy oscuro (`#0d2b2e` / `#0a1628`)
- Acento principal: verde esmeralda brillante (elementos destacados, confirmaciones, CTAs)
- Acento secundario: blanco para texto/UI overlays
- Mood: sofisticado, tech-forward, nocturno

**Registro claro** (PM, liderazgo, ecosistemas, temas accesibles):
- Fondo: crema/beige cálido (`#f5f0e8` / `#ede8dc`)
- Acento principal: naranja ámbar cálido (nodos, detalles, energía)
- Acento secundario: verde esmeralda (confirmaciones, acciones completadas)
- Mood: accesible, educativo, warm

### Composición y elementos recurrentes

- **Siempre 16:9**, elemento central dominante ocupando 40-60% del frame
- **Smartphone como protagonista** en las 4 imágenes: pantalla visible con UI real (app bancaria, payment confirmed)
- **Redes/nodos conectados** radiando desde el elemento central (ecosistema de pagos, open finance)
- **Figura humana** en 3 de 4 imágenes: o avatar ilustrado de Fernando (gafas, camisa azul claro) o silueta fotorealista sosteniendo el teléfono
- **UI overlays flotantes**: tarjetas, bubbles, etiquetas de entidades (BCRP, PSP, CCE) como elementos secundarios en el espacio
- Texto mínimo en imagen: solo etiquetas cortas en nodos o cifras de UI; sin titulares

### Tipografía y texto en imagen

- Texto casi siempre dentro de elementos UI (pantallas de app, cards), no suelto sobre el fondo
- Etiquetas de nodos: sans-serif pequeña, sobre fondo oscuro con pill/badge
- Sin títulos del artículo en la imagen (el heading del blog los maneja por separado)

### Estilo fotográfico / ilustrativo

Dos estilos coexisten según el pilar:

**Flat illustration** (PM, ecosistemas):
- Vector cartoon, trazo limpio, sin sombras complejas
- Personaje recurrente: avatar ilustrado de Fernando (hombre latino, gafas cuadradas, camisa azul claro, expresivo)
- Fondo geométrico simple o texturizado suave
- Inspiración: estilo editorial de newsletters de producto

**Photo-realistic + digital overlay** (fintech, banca, IA):
- Foto de persona/mano sosteniendo smartphone, con iluminación dramática oscura
- Sobre la foto se montan elementos 3D o UI cards flotantes con efecto partículas/red
- Silueta oscura del sujeto contrasta con los elementos luminosos del overlay
- Inspiración: marketing de apps fintech (Nubank, Mercado Pago)

---

## Estructura base de prompt para Nanobanana

Usar la variante según el pilar del artículo:

### Registro oscuro (fintech técnico, banca, IA)
```
[Elemento central: persona/mano sosteniendo smartphone con UI visible] floating above a dark teal 
deep background, dramatic moody lighting, [UI cards/nodes floating around the phone with emerald 
green accents], particle network effect connecting elements, [contexto específico del tema: 
e.g. payment confirmation screen, banking app, AI interface], photorealistic style with 3D digital 
overlays, professional fintech aesthetic, high quality, blog feature image, 16:9 ratio
```

### Registro claro (PM, liderazgo, ecosistemas)
```
Flat vector illustration, [avatar: Latino man with square glasses and light blue shirt, expressive], 
[elemento central: smartphone con pantalla específica + diagrama de nodos radiando], warm cream 
beige background (#f5f0e8), amber orange accent nodes, emerald green for confirmed/success elements, 
[etiquetas en nodos: entidades del ecosistema del artículo], clean editorial style, 
high quality, blog feature image, 16:9 ratio
```

---

## Cómo generar los 3 prompts por artículo

Cuando se solicite, generar 3 variantes con diferente enfoque:

1. **Prompt literal**: representa visualmente el tema principal del artículo de forma directa
2. **Prompt conceptual**: representa la abstracción o la idea central del artículo (metáfora visual)
3. **Prompt de personas + contexto**: incluye figura humana interactuando con el tema (más warm, conecta emocionalmente)

---

## Checklist de imagen

- [ ] Formato 16:9 (requerido para feature image en el blog)
- [ ] Legible en mobile (elementos principales visibles en pantalla pequeña)
- [ ] Sin texto excesivo en la imagen (el título ya aparece en la página)
- [ ] Coherente con el pilar temático (pm / fintech / ia)
- [ ] Guardada en `/public/imagenes/{slug}/featureImg.png` y referenciada en el frontmatter
