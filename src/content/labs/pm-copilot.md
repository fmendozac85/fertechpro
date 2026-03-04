---
title: "PM Copilot — Asistente de priorización con IA"
description: "Conecta tu backlog con datos de soporte y uso para generar un score de prioridad automático. Probado con 3 equipos en fintechs latinas."
category: ia
status: live
startDate: 2025-10-01
updatedDate: 2026-03-01
techStack:
  - Python 3.11
  - OpenAI API
  - Streamlit
  - Linear SDK
  - Notion API
  - Intercom API
  - PostgreSQL
  - Railway
demoUrl: "https://pmcopilot.fertechpro.com"
githubUrl: "https://github.com/fernandomendoza/pm-copilot"
metrics:
  - value: "47"
    label: "PMs activos en 3 equipos fintech"
  - value: "3h"
    label: "Tiempo ahorrado por sesión de priorización"
  - value: "82%"
    label: "De los tickets procesados en <30 segundos"
  - value: "4.6/5"
    label: "Satisfacción promedio de los usuarios"
relatedArticle: "como-construi-pm-copilot"
featured: false
draft: true
---

## El problema que resuelve

Todo PM ha vivido esta situación: el lunes hay una reunión de priorización, el backlog tiene 60 tickets sin depurar, y la noche del domingo estás leyendo tickets uno a uno para tener alguna idea de qué defender.

El problema no es que falte información — es que la información está dispersa en tres sistemas diferentes: el backlog, las conversaciones de soporte, y los dashboards de producto. Ninguna herramienta la conecta sola.

> **La hipótesis:** Si un LLM puede leer simultáneamente los tickets de backlog, el volumen de soporte relacionado y las métricas de uso, puede generar un score de prioridad más objetivo que el instinto del PM — y en segundos.

## Cómo funciona

PM Copilot tiene tres pasos:

1. **Ingesta:** Conecta con Linear (o Jira) para traer el backlog. Con Intercom para traer conversaciones de soporte. Con Amplitude para métricas de uso por feature.
2. **Análisis:** El LLM genera un resumen estructurado de cada ticket con: problema real, usuarios afectados, frecuencia en soporte, impacto estimado en métricas.
3. **Score:** Aplica un modelo de scoring configurable (RICE, ICE, o custom) usando los datos anteriores como inputs, no opiniones.

## Lo que técnicamente fue interesante

El mayor challenge no fue el LLM — fue la normalización de datos de tres fuentes con formatos completamente distintos. Un ticket en Linear tiene un formato, una conversación en Intercom tiene otro, y los eventos de Amplitude son JSON crudos.

```python
def normalize_ticket(source: str, raw: dict) -> TicketSchema:
    """
    Normaliza datos de Linear, Jira o Notion a schema común.
    """
    if source == "linear":
        return TicketSchema(
            id=raw["id"],
            title=raw["title"],
            description=raw.get("description", ""),
            labels=[l["name"] for l in raw.get("labels", {}).get("nodes", [])],
            created_at=raw["createdAt"],
        )
```

## Lo que no funcionó

Intenté integrar Slack para detectar señales de dolor en canales de comunidad. El problema: demasiado ruido. Las conversaciones de Slack son demasiado informales para extraer señales confiables sin un filtro muy fino.

También probé generar drafts de PRD automáticamente. Técnicamente funciona, pero los PMs lo percibían como una amenaza. Aprendizaje: **la herramienta tiene que ampliar lo que el PM hace, no intentar reemplazarlo.**

## Aprendizajes clave

1. La normalización de datos entre herramientas es el 60% del trabajo real. La parte de IA es la más fácil.
2. Los PMs adoptan herramientas que les dan argumentos, no las que intentan tomar decisiones por ellos.
3. El scoring automático tiene más valor para equipos con backlog grande (+50 items).
4. Streamlit es suficiente para un MVP de herramienta interna. No necesitas un frontend completo para validar.
