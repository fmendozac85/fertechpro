# LAB_TEMPLATE.md — Template para nuevos labs

> Cargar este archivo al crear un lab nuevo desde cero.
> Complementar siempre con `docs/TONO.md` para mantener la voz del autor.
> La estructura narrativa sigue la lógica de cómo un PM senior presenta una solución.

---

## Frontmatter

```yaml
---
title: ""                         # Nombre del lab/proyecto — conciso y descriptivo
description: ""                   # Subtítulo de 1 línea para cards. Qué resuelve, en una frase.
category: ia                      # ia | fintech | pm
status: wip                       # live | wip | idea | archived
startDate: YYYY-MM-DD             # Cuándo empezaste a construirlo
updatedDate: YYYY-MM-DD           # Última actualización relevante (opcional)
techStack:                        # Tecnologías usadas
  - ""
  - ""
demoUrl: ""                       # URL demo en producción (opcional)
githubUrl: ""                     # URL repositorio público (opcional)
metrics:                          # Métricas de impacto para la grid (opcional)
  - value: ""
    label: ""
relatedArticle: ""                # Slug del artículo relacionado, si existe (opcional)
featured: false
draft: true
---
```

---

## Estructura del lab

### Párrafo de apertura
<!-- Presentación directa del lab: qué es y qué problema resuelve -->
<!-- Sin rodeos — el lector ya sabe que es un lab por el contexto de la página -->

[Nombre del lab] es [qué es en una oración]. Nació de [contexto personal o profesional que originó la idea].

---

## El contexto

<!-- Situación de mercado, entorno o necesidad que da pie al problema -->
<!-- No es el problema todavía — es el escenario donde el problema existe -->
<!-- 1-2 párrafos -->

[Descripción del entorno/contexto: qué pasa en el mercado, en el sector, o en el día a día que hace relevante este problema]

---

## El problema

<!-- Dolor concreto, bien delimitado, con impacto medible o percibido -->
<!-- Específico — evitar el problema genérico "las empresas necesitan X" -->
<!-- Puede ser personal o de un segmento de usuarios específico -->

[Descripción del problema concreto. Quién lo sufre, cuándo ocurre, qué consecuencia tiene no resolverlo.]

**Pain points específicos identificados:**
- [Pain point 1]
- [Pain point 2]
- [Pain point 3]

---

## La solución

<!-- Qué se construyó y cómo funciona — desde la perspectiva del usuario, no del código -->
<!-- Incluir las decisiones de producto clave y por qué se tomaron -->
<!-- Si hay arquitectura técnica relevante, mencionarla brevemente con justificación de negocio -->

### ¿Qué resuelve?

[Descripción funcional de la solución: qué puede hacer el usuario con ella]

### ¿Cómo funciona?

[Flujo principal o arquitectura de la solución — orientado a decisiones de producto, no a implementación técnica pura]

### Decisiones de producto clave

| Decisión | Alternativa descartada | Por qué se eligió esta |
|---|---|---|
| [Decisión 1] | [Alternativa] | [Razón] |
| [Decisión 2] | [Alternativa] | [Razón] |

---

## Aprendizajes clave

<!-- Lo más valioso del lab — honestidad sobre qué funcionó y qué no -->
<!-- No es una lista de logros: incluir fracasos, sorpresas y pivots -->
<!-- 3-5 aprendizajes con profundidad, mejor que 8 superficiales -->

**[Aprendizaje 1 — frase corta como título]**
[Explicación de 2-3 oraciones. Contexto de por qué sorprendió o importa.]

**[Aprendizaje 2]**
[Explicación]

**[Aprendizaje 3]**
[Explicación]

---

## Qué sigue

<!-- Estado actual y próximos pasos — solo si son concretos -->
<!-- Si está archived, puede ser una reflexión sobre por qué se cerró -->
<!-- Opcional: omitir si no hay nada relevante que agregar -->

[Próximos pasos concretos o reflexión sobre el estado actual del lab]

---

## Notas de edición para Claude

Al completar o refinar este template:
1. Verificar que el contexto → problema → solución fluya con lógica causal (uno lleva al otro)
2. El problema debe ser específico — si suena genérico, hacerlo más concreto
3. Los aprendizajes deben incluir al menos 1 cosa que no funcionó — la honestidad construye credibilidad
4. La tabla de decisiones de producto es el diferenciador vs. un portfolio técnico — no omitirla
5. Verificar que la longitud sea proporcional al lab (labs simples: 800-1,000 palabras; complejos: hasta 2,000)
6. Todo elemento visual debe ser legible en mobile
