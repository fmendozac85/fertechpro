---
titulo: "Strategic Intents: cómo pasar de ejecutar features a resolver lo que realmente importa"
fecha: 2026-04-13
pilar: pm
extracto: "El mayor riesgo para un PM no está en priorizar mal las features — está en priorizar features envés de problemas."
lectura: 8
destacado: true
imagen: /imagenes/strategic-intent/featureImg.png
draft: false
---

Empiezas tu lunes revisando si hay temas urgentes e intentas planificar la semana, pero ya empieza la agenda del día. Sesiones de checkpoint, pendientes de la semana pasada. Dices: "Bueno, después de almuerzo empiezo a planificar."

Llega la tarde y te agendan una sesión extraordinaria por una nueva solicitud. Tocará estimar, dices, pero antes buscas entender el problema y sus racionales. Te hacen sentido, y entre los tiempos ajustados de entregables de tu equipo, logras una estimación alto nivel. Cierras el día y te dices: "Ya mañana será un día más ordenado y de mayor claridad."

¿Cuánto de lo que hiciste esta semana acerca a tu producto a su máximo potencial?

Si bien hay días donde los pendientes y los no planificados se juntan sin previo aviso, la principal oportunidad no está en la complejidad de atender temas diversos y paralelizar trabajos. Está en preguntarte si, haciéndolo, estás generando el mayor valor para tu usuario y para tu organización.

El rol de orquestador y facilitador es importante para liderar iniciativas y llevarlas a buen puerto. Pero como Product Manager, mucho más importante que eso es el trabajo previo: **preguntarte si lo que estás priorizando genera el máximo impacto de tu producto.**

---

## La trampa de la feature factory

La dinámica más común en equipos de producto es la siguiente: llegan solicitudes de todas partes — comercial quiere el nuevo programa de fidelización, operaciones necesita el reporte de conciliación, compliance exige ajustes regulatorios, y el CEO vio una oportunidad en la competencia por explorar.

Cada área tiene sus razones. Cada solicitud tiene su urgencia. Y tú, como PM, terminas siendo el punto de convergencia de todas ellas.

El problema no está en recibir esas solicitudes — eso es inevitable y muchas veces tiene todo el sentido del mundo. El problema está en no tener un criterio estratégico con el cual evaluarlas. Si operas en modo reactivo, tu roadmap termina siendo una lista de features ordenada por quién hizo más push o quién tiene más peso político en la organización. A eso Melissa Perri lo llama una **feature factory**: una máquina que produce funcionalidades sin preguntarse si esas funcionalidades resuelven el problema correcto.

El riesgo real es disipar los esfuerzos técnicos, operativos y de negocio en muchas iniciativas que logran un impacto menor al que se podría lograr si los esfuerzos estuviesen alineados y enfocados en objetivos más estratégicos.

Vale aclarar que no toda iniciativa pasa por este filtro. Las obligaciones regulatorias, compromisos contractuales con clientes clave o temas de compliance tienen su propio carril — son costos de operar, no decisiones de producto. El Strategic Intent es el criterio para todo lo que sí tiene margen de elección. Y ese margen, en la mayoría de organizaciones, es más grande de lo que parece.

Entonces, si cambiamos de "¿qué construimos?" a "¿qué problema debemos resolver primero para acercarnos a la visión?".

---

## ¿Qué es un Strategic Intent y por qué cambia el campo de juego?

Un **Strategic Intent** es un área de foco de la organización, acotada en el tiempo, que nos acerca a la visión de producto. No es un objetivo de negocio genérico ni un KPI aislado — es la apuesta estratégica de dónde concentrar los esfuerzos del equipo en un período determinado.

La pregunta que lo activa es bastante simple: *"¿Qué es lo más importante que podemos hacer, según nuestra realidad actual, para lograr la visión?"*

Esa pregunta nos saca de un enfoque en funcionalidades y nos pone en uno de **outcomes**: resultados concretos para el usuario y el negocio, no entregables de software.

Según Joshua Arnold — en el contexto del trabajo de Melissa Perri en *Escaping the Build Trap* —, el framework para pensar en valor de una organización se divide en cuatro palancas:

- **Aumentar revenue**: Crecer los ingresos con clientes nuevos o existentes. Nuevos segmentos, expansión de uso, monetización de funcionalidades premium.
- **Proteger revenue**: Mejoras e innovación incremental para sostener la actual participación de mercado. Evitar que usuarios se vayan a la competencia.
- **Reducir costos**: Eficientar el margen de contribución. Automatizar procesos manuales, reducir fricción operativa interna.
- **Evitar costos**: Sostenimiento de la base de costos actual. Prepararse para escalar sin que los costos escalen proporcionalmente.

Definir un Strategic Intent es elegir en cuál de estas palancas concentrar el foco — y por qué, en este momento específico de la organización, esa palanca tiene el mayor retorno potencial.

---

## ¿Cómo identificar los Strategic Intents de tu organización?

En condiciones ideales, los Strategic Intents los define el liderazgo de producto (CPO, CEO) y se derivan directamente de la visión del producto y del contexto competitivo del momento. En la práctica, muchas organizaciones no los tienen articulados de forma explícita — o los tienen mezclados con los OKRs de una forma difícil de leer.

Aquí es donde el PM puede agregar un valor enorme, **no esperando que bajen del C-level, sino facilitando la conversación para hacerlos emerger.**

Algunas señales de que los Strategic Intents no están claros en tu organización:
- El roadmap tiene más de 5 iniciativas "prioritarias" en paralelo
- Las áreas de negocio traen solicitudes sin referencia a un objetivo común
- Los criterios de priorización cambian según quién está en la sala

Si ese es tu contexto, la forma de salir no es hacer política para imponer tu criterio. Es **llevar datos**: ¿dónde estamos perdiendo usuarios? ¿qué métrica de negocio está más por debajo de la esperada? ¿qué parte del funnel tiene la mayor caída? Esos datos son los que permiten articular, con argumento, cuál debería ser el foco estratégico.

Una vez identificado el Strategic Intent, las solicitudes de features no desaparecen — pero ahora tienes un criterio claro para evaluarlas: ¿esto nos acerca al objetivo estratégico o no?

---

## Caso práctico: cuando la solución llega antes del diagnóstico

Evaluemos un caso hipotético de una billetera digital — a propósito de que cada vez más ingresan o se hacen un re-brand en Perú.

**Visión de la organización:**
> "Ser tu asistente financiero personal haciendo que el dinero trabaje para ti 24x7"

**Strategic Intent definido:**
Aumentar el crecimiento de revenue en 2X en usuarios naturales en los próximos 12 meses.

Con este contexto, el área comercial llega con una propuesta: *"Queremos implementar cashback condicional. La competencia lo tiene y estamos perdiendo usuarios."*

### PM sin Strategic Intent claro

Recibe la solicitud, la agrega al backlog, la evalúa en el próximo sprint planning por impacto/esfuerzo. El equipo empieza a estimar el flujo de cashback. Se arman maquetas, se alinean dependencias con el área de finanzas. Dos sprints después, el cashback está en construcción.

### PM con Strategic Intent claro

Antes de avanzar una sola estimación, se hace la pregunta de fondo: **¿Por qué no estamos creciendo en revenue hoy?**

Revisa datos: tasa de activación de nuevos usuarios, drop-off por pantalla en el onboarding, tiempo promedio hasta la primera transacción. Supongamos que encuentra que el mayor problema no está en la retención — está en la activación. De cada 10 usuarios que se registran, 6 abandonan el proceso de onboarding antes de completarlo.

El proceso es engorroso porque existen restricciones regulatorias a cumplir (válidas, no negociables). Pero hay un margen enorme de mejora en el wording y en la UX del flujo actual — hipótesis que se puede validar rápido y barato.

El PM va donde comercial con datos: *"El cashback puede ser una buena iniciativa para retención, pero no resuelve el problema que más está frenando el crecimiento ahora mismo. Propongo que antes de construir eso, validemos mejoras en el onboarding — el potencial de impacto en activation rate es significativamente mayor."*

Eso es un PM estratega. No bloqueó la solicitud. La puso en el contexto correcto.

---

## El cambio real: de feature-taker a estratega

La diferencia entre ambos modos no es de habilidad técnica ni de seniority. Es de enfoque.

| Dimensión | PM feature-taker | PM estratega con SI |
|---|---|---|
| Input principal | Solicitudes de áreas de negocio | Problemas de usuario + objetivos estratégicos |
| Pregunta que se hace | "¿Cómo lo construimos?" | "¿Por qué no estamos logrando X objetivo hoy?" |
| Cómo prioriza | Impacto/esfuerzo sobre features | Problemas a resolver según Strategic Intent |
| Cómo habla con stakeholders | "Lo analizamos y estimamos" | "¿Esto nos acerca al objetivo estratégico definido?" |
| Qué entrega al equipo | Lista de features a construir | Problemas priorizados con contexto de negocio |

El cambio no es fácil ni rápido. Requiere altísimo conocimiento de tu usuario, de sus dolores, y de data que sustente cómo esos dolores atentan contra los objetivos que tu producto debe aportar al negocio.

---

## Reflexión final

Todo esto suena muy bien pero no es para nada simple. Está sujeto a la existencia de los Strategic Intents en tu organización — y, más importante, a tu aporte en buscar esa claridad en pro de tus usuarios y la organización misma.

Aquí está la verdadera esencia del product management: de aquí parten las inversiones de tu tiempo y el de los equipos para conseguir los objetivos esperados. No es solo una cuestión de frameworks. Es una cuestión de criterio, de datos y de la disposición a tener conversaciones incómodas cuando el camino que el negocio quiere tomar no es el que más impacto generaría.

Una advertencia importante: de aquí no deberías ir directo a construir. Hasta este punto ya tienes priorizados los problemas a atender para acercarte a los objetivos de negocio, pero aún hay incertidumbre sobre cómo resolverlos. Aquí la etapa de **discovery** entra con fuerza: es el momento de validar hipótesis de forma rápida y empática, antes de comprometer el esfuerzo del equipo. Con la IA disponible hoy, ese proceso es mucho más ágil que antes. Más de esto en un siguiente artículo. 

Mientras tanto: paciencia, claridad y enfoque en tus usuarios.

---

## Fuentes

- *Escaping the Build Trap* — Melissa Perri
- Framework de palancas de valor: Joshua Arnold (en contexto del trabajo de Melissa Perri)
