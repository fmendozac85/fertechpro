# ARTICULO_TEMPLATE.md — Template para nuevos artículos

> Cargar este archivo al crear un artículo nuevo desde cero.
> Complementar siempre con `docs/TONO.md` para mantener la voz del autor.

---

## Frontmatter

```yaml
---
titulo: ""                  # Título en español — claro, directo, orientado al valor para el lector
fecha: YYYY-MM-DD           # Fecha de publicación
pilar: pm                   # pm | fintech | ia
extracto: ""                # 1-2 oraciones. Qué problema resuelve o qué aprende el lector. Sin spoiler.
lectura: 0                  # Minutos estimados (referencia: ~200 palabras/min de lectura)
imagen: "/imagenes/{slug}/featureImg.png"
destacado: false
draft: true                 # Mantener en true hasta aprobación final
---
```

---

## Estructura del artículo

### Hook de apertura
<!-- Pregunta retórica, situación concreta o dato que incomoda al lector -->
<!-- Objetivo: que el lector sienta que el artículo fue escrito para él -->
<!-- Largo: 2-3 párrafos máximo -->

¿[Pregunta que conecta con el problema del lector]?

[Párrafo de contexto personal o situacional que valida la pregunta]

[Tesis del artículo: qué vas a desarrollar y por qué importa]

---

## [Número]. [Título de sección — orientado al argumento, no al tema]

[Desarrollo de la idea con ejemplos concretos. Evitar la abstracción sin ancla real.]

**[Concepto clave]**: [Explicación directa]

> [Cita, dato o caso de uso que refuerza el punto — opcional]

---

## [Número]. [Título de sección]

[Continúa el argumento. Cada sección debe avanzar la tesis, no solo agregar información.]

### Subsección (cuando aplique)

[Detalle o caso específico dentro de la sección]

---

## Framework / síntesis

<!-- Tabla, checklist o modelo que condense lo desarrollado -->
<!-- Hace el artículo más scannable y shareble -->

| Elemento | Sin [X] | Con [X] |
|---|---|---|
| [Variable 1] | [Estado actual] | [Estado deseado] |
| [Variable 2] | [Estado actual] | [Estado deseado] |

---

## Cierre

[Reflexión personal sobre el tema — no un resumen del artículo]

[Invitación al lector: qué puede hacer, pensar o probar a partir de lo leído]

---

## Notas de edición para Claude

Al completar o refinar este template:
1. Verificar que cada sección avanza el argumento central — eliminar lo que solo "rellena"
2. Asegurar que los ejemplos sean concretos y verificables (no "algunas empresas hacen...")
3. Revisar que el hook cree urgencia o curiosidad real
4. Confirmar que el cierre no repite lo ya dicho — debe agregar una capa de reflexión
5. Estimar `lectura` al final: contar palabras / 200, redondear al entero más cercano
6. Verificar que tablas y elementos visuales sean legibles en mobile
