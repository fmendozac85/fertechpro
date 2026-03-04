---
title: "Risk Score Simulator"
description: "Simulador interactivo que permite a equipos de crédito entender el impacto de variables en el score de riesgo."
category: fintech
status: live
startDate: 2026-01-15
techStack:
  - React
  - D3.js
  - FastAPI
  - scikit-learn
demoUrl: "https://risksim.fertechpro.com"
githubUrl: "https://github.com/fernandomendoza/risk-score-simulator"
metrics:
  - value: "200+"
    label: "Usuarios activos en equipos de crédito"
  - value: "12"
    label: "Variables de riesgo configurables"
featured: false
---

## El problema

Los equipos de crédito toman decisiones sobre el modelo de scoring sin poder ver en tiempo real cómo cada variable afecta el resultado final. Esto crea una brecha entre los data scientists que construyen el modelo y los product managers que definen las reglas de negocio.

## Solución

Una interfaz visual donde puedes mover sliders de variables (ingresos, historial, edad del bureau, etc.) y ver instantáneamente cómo cambia el score y la probabilidad de aprobación. Incluye comparación side-by-side de diferentes perfiles.

## Aprendizajes clave

1. La visualización en tiempo real reduce el tiempo de calibración del modelo de semanas a días.
2. Los PMs de crédito no necesitan entender el modelo matemático — necesitan entender el impacto de sus decisiones.
