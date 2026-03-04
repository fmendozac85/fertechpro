---
title: "Fintech Onboarding Analyzer"
description: "Herramienta que analiza flujos de onboarding de apps fintech usando visión computacional y genera recomendaciones de mejora."
category: fintech
status: wip
startDate: 2026-02-01
techStack:
  - Python
  - Claude Vision
  - Playwright
  - FastAPI
featured: false
draft: false
---

## El problema

El onboarding es el momento más crítico en cualquier producto fintech — y también el más difícil de auditar. Revisar manualmente 40 pantallas de flujo KYC lleva horas.

## Solución en progreso

Un script que toma screenshots automáticos de un flujo de onboarding y usa visión computacional para evaluar: fricción por pantalla, consistencia de diseño, claridad de mensajes de error, y comparación con benchmarks del sector.

## Estado actual

Tengo el crawler funcionando con Playwright. El challenge ahora es el prompting para que la evaluación sea consistente entre distintos tipos de apps.
