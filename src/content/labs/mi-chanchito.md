---
title: "Mi Chanchito App"
description: "Herramienta para gestionar mis pagos grupales y mis finanzas personales."
category: fintech
status: live
startDate: 2026-03-20
updatedDate: 2026-03-24
techStack:
  - Claude code
  - Supabase
  - Netlify
featured: true
draft: false
---

## El problema que resuelve

Venia utilizando excel y apps de finanzas para gestionar mis gastos-ingresos, y apps de distribución de gastos para la gestión de gastos grupales con familia y amigos, pero caiga en los siguientes problemas, por mencionar algunos:

- Ingreso de pagos grupales limitado
- Falta visibilidad en demora de pagos grupales por persona
- Ingreso de gastos grupales por montos desiguales limitado
- Falta ingreso gastos fijos mensuales
- Publicidad reiterativa si no pago suscripción

Dados los avances de la IA en codificación, y teniendo previa experiencia en vibe coding con Syncly (proyecto anterior implementado en Hachathon con fines académicos) me propuse crear una app personalizada a mis problemas. 

Me pregunté: 
> Por qué pagar por suscripciones si puedo aterrizar problemas y conectarlos con soluciones? Por qué tener varias apps para resolver un único problema que es el de gestión de mi dinero?

Los planes de suscripcion te limitan en funcionalidades y capacidades. Ninguna app conoce mi problemática específica. 
En mi caso, yo necesitaba gestionar mis gastos grupales para hacerle seguimiento especialmente a gastos recurrentes mensuales y a la par organizar mis propias finanzas personales para optimizar gastos mes a mes. 

## Estrategia de solución

Mas que pedirle a claude code generar la solución, me enfoque al principio mucho en listar los problemas anteriormente definidos y pensar cómo podría solucionarlo. Generé un PRD base con mis pensamientos, ideas, restricciones, objetivos y mucho más.
Luego, trabajé con Claude Code como **copiloto** para complementar o precisar funcionalidades de mi PRD, logrando generar una versión "final" (entre comillas porque sabemos que todo es optimizable con el tiempo y feedback).
Solo cuando tuve una versión del PRD que consideraba estable, empece a generar el código.

## Qué es y cómo funciona

Mi chanchito es una webapp que gestiona mis gastos grupales y finanzas personales totalmente personalizada a mi realidad. 
Consta de 5 módulos:

**1. Inicio:** donde pueda rápidamente visualizar mi estado financiero en términos de a quién debo y quién me debe

![Página principal mi chanchito app](/imagenes/mi-chanchito/inicio.png)

**2. Mis Finanzas personales:** Espacio donde puedo gestionar mis finanzas personales. Entre las principales funcionalidades tenemos:
  - Dashboards Estado financiero: Donde pueda visualizar la evolución de gastos del mes actual, la evolución de lo que me toca pagar en gastos fijos del mes y cómo voy en gastos comparado al mes anterior
  - Sección gastos fijos del mes: para monitorear el detalle de sus pagos
  - Mis movimientos: listado con los gastos y pagos realizados
  - Registro de gasto o pago: donde se pueden ingresar los montos, participantes y distribución, sin limitación alguna.

![Página Mis finanzas mi chanchito app](/imagenes/mi-chanchito/finanzas.png)

**3. Grupos: Gestión de gastos y pagos de un grupo:** Entre las principales funcionalidades tenemos:
  - Resumen de cuánto debo y cuánto me deben
  - Gestión de miembros en cada grupo
  - Mis movimientos: listado con los gastos y pagos realizados
  - Registro de gasto o pago: donde se pueden ingresar los montos, participantes y distribución, sin limitación alguna.

![Página Grupo mi chanchito app](/imagenes/mi-chanchito/grupo.png)

**4. Reportes:** Diferenciado por reportes personales o grupales
  - Tendencias de gasto mensual
  - Top categorias por monto y por frecuencia
  - Distribución por categoria
  - Gasto promedio mensual por categoria
  - Demora de pago en gastos grupales fijos mensuales

![Página Reportes mi chanchito app](/imagenes/mi-chanchito/reportes.png)

**5. Mi Cuenta:** El típico espacio para actualizar los datos personales y password.

## Lo desafíos

La parte más desafiante, pienso ,fue en aterrizar los problemas primero y reflexionar sobre posibles soluciones.
Es fácil irse directo a construir pero genuinamente reservar tiempo para pensar qué cosas realmente valen la pena resolver es desafiante, especialmente con todos los avances de la IA.

Respecto a lo técnico, diría que el uso eficiente del context windows ayuda para evitar quedarse sin tokens.
Y respecto al modelo, en mi caso utilice el modelo Opus 4.6. Sí, es el que consume más tokens pero queria evaluar qué tan bueno puede llegar a ser esto y la verdad, no quede arrepentido. Si lo comparo a la web que construí 1 año atrás, **los avances son TREMENDOS!!**.

---

Finalmente, la reflexión está en que la tecnología está cada vez más al alcance de todos. Las barreras para construir productos siguen bajando y la pregunta *Build vs Buy** será muy frecuente no solo en el consumo personal de herramientas, sino también en las empresas. Por ello, es super importante tener un user-centric mindset y entender cláramente cuáles son las fortalezas de tu empresa para solucionar los problemas de tus clientes/usuarios, pues no se trata de construir todo solo porque ahora es más fácil, sino de construir con intención y donde hace sentido. La recomendación es una mezcla híbrida entre el build vs buy que evite pagar suscripciones de valor limitado y que a la vez evite tener soluciones in-house que consuman tiempo de tu equipo generando distracciones de lo que realmente importa: Adquisición - Activación - Retención - Recomendación - Revenue.