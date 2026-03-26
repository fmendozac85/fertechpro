---
titulo: "Pagos en Perú: lo que un PM debe resolver antes de que el usuario toque la pantalla"
fecha: 2026-03-26
pilar: fintech
extracto: "Lo que debe entender y resolver un PM antes de lanzar a producción una solución de pagos."
lectura: 13
destacado: true
imagen: /imagenes/pagos-pm/pagos-pm.png
draft: false
---

¿Cuántas veces has visto un flujo de pago que en demo funciona perfecto y en producción falla de formas que nadie sabe explicar?

El problema no lo encontrarás en el diseño de las pantallas sino en las decisiones que se tomaron bajo presión de tiempo, en el uso de arquitectura MVP que resolvía el lanzamiento pero no la escala, o la falta de una visión integral de qué pasa cuando el sistema falla: qué ocurre cuando el procesador no responde a tiempo, cómo distingue el sistema un pago duplicado de uno legítimo, quién define qué hacer cuando la respuesta llega tarde.

No es que el PM defina cómo se implementan esas decisiones pero sí debe entenderlas lo suficiente para influir en ellas.

Investigando el ecosistema de pagos en Perú, reconocí retos trabajados anteriormente en sistemas transaccionales y productos regulados. Lo que hace único a pagos es que todos esos retos suceden en el momento exacto en que el usuario decide pagar. Un fallo ahí pocas veces tiene segunda oportunidad.

¿Qué debe entender y resolver un PM antes de que eso pase? Empecemos por el contexto: el ecosistema donde va a operar.

## El ecosistema peruano es una variable de diseño

Construir pagos en Perú no es lo mismo que construir pagos en cualquier mercado. Y no me refiero a la complejidad, sino porque el ecosistema tiene una arquitectura particular que impacta directamente las decisiones de producto.

Primero, hay dos reguladores con roles distintos. El BCRP define la infraestructura y las reglas de interoperabilidad — fue quien impulsó la estrategia que conectó billeteras, transferencias y QR en fases desde 2023. La SBS supervisa a las entidades que operan dentro del sistema financiero. El PM debe distinguir quién regula qué, para saber qué aprobaciones necesita y sobre qué restricciones debe trabajar, argumentar y negociar.

Luego están los actores que mueven el dinero. Los bancos emisores autorizan las transacciones desde la cuenta del usuario. Los adquirentes habilitan a los comercios a recibir pagos con tarjeta. Los facilitadores de pago simplifican esa integración para merchants que no quieren conectarse directamente con un adquirente. Y las billeteras digitales, las empresas emisoras de dinero electrónico y los players BaaS completan un ecosistema donde hoy operan más de 237 Fintech registradas, un cuarto de las cuales actúa en el segmento de pagos y transferencias.

Las redes internacionales — Visa, Mastercard — son la infraestructura base para pagos con tarjeta. Pero en Perú, los pagos A2A (cuenta a cuenta) han ganado tanto terreno que hoy compiten directamente con la tarjeta en muchos contextos — y se proyectan como el método líder al 2030. Para un PM que construye sobre billeteras o transferencias inmediatas, entender que está operando sobre ese riel, y no sobre el de tarjetas, cambia las decisiones de integración, settlement y manejo de errores.

Y eso nos lleva a los métodos de pago. No todos se comportan igual ni sirven para los mismos casos de uso:

- **Las transferencias inmediatas** son el riel preferido para montos más altos y pagos planificados — B2B, facturas, pagos recurrentes.

- Las **billeteras digitales** dominan los pagos de bajo valor en comercios físicos. Son el método de mayor crecimiento y el que más está redefiniendo cómo se diseña la experiencia de pago en Perú.

- El **QR interoperable** es hoy infraestructura estándar operativa desde setiembre de 2023 — todos los players conectados al ecosistema lo soportan. No es un diferenciador, es un piso mínimo.

Las **tarjetas de crédito y débito** siguen siendo el método dominante en ecommerce, especialmente para tickets medios y altos.
Y los canales físico-digitales — agentes, PagoEfectivo — siguen siendo relevantes en un mercado donde el efectivo aún representa cerca del 31% de las compras físicas.

Finalmente, los flujos. P2P es persona a persona — el caso más simple y el más maduro del ecosistema. P2M es persona a comercio — donde está la mayor oportunidad de construcción de producto hoy, porque implica merchant onboarding, conciliación y liquidación. P2B es persona a empresa — pagos de servicios, facturas, cuotas — con lógicas de negocio más complejas y ciclos de reconciliación distintos.

¿Por qué importa todo esto antes de diseñar un flujo? Porque el método de pago que eliges, el actor con quien te integras y el regulador que te aplica no son decisiones de arquitectura solamente — son decisiones de producto que determinan qué puedes construir, a qué velocidad y con qué restricciones.

Y una vez que entiendes el ecosistema, la siguiente pregunta es: ¿qué pasa exactamente dentro de una transacción?

## El lifecycle no es igual para todos los flujos — Ojo con ello

Para entender por qué las decisiones de producto en pagos son distintas según el método, vale comparar dos flujos concretos: una transferencia inmediata P2P y un pago P2M con billetera digital. Comparten parte de la infraestructura, pero divergen en puntos que cambian todo.

Cuando un usuario inicia una transferencia P2P, el flujo es relativamente directo: ingresa el número de destino, confirma el monto, autoriza con su clave o biometría, y en segundos el dinero llega. Simple desde la pantalla. Por debajo, hay una cadena de eventos: la billetera valida la identidad del usuario, envía la instrucción a la CCE (Cámara de Compensación Electrónica — la infraestructura que procesa y liquida las transferencias entre entidades financieras en Perú), la CCE compensa entre las entidades involucradas, y el destinatario recibe la notificación. Todo en tiempo real, sin un comercio en el medio.

El P2M agrega una capa que cambia todo.

Ahora hay un merchant en la ecuación. Y eso no es solo un actor adicional — es un conjunto de decisiones de producto que en P2P no existían.

- ### Autorización

En ambos flujos, la transacción empieza con una solicitud de autorización: ¿tiene el usuario fondos suficientes? ¿Es una operación legítima? En P2P esa respuesta es casi inmediata. En P2M, la autorización puede involucrar validaciones adicionales del lado del comercio — límites de monto, categoría del merchant, restricciones del adquirente o facilitador. En el diseño del flujo de pago de un comercio, el PM necesita saber qué pasa si esa autorización tarda, o si llega un timeout antes de que el sistema confirme.

- ### Captura y asincronía

En P2P, autorización y transferencia ocurren prácticamente en simultáneo. En P2M, pueden estar desacopladas — especialmente en flujos donde el comercio confirma la orden antes de procesar el cobro. Eso introduce **asincronía**: el sistema inicia el pago, pero la confirmación puede llegar después. **¿Qué le muestras al usuario mientras tanto? ¿Qué pasa si nunca llega la confirmación? ¿Cómo sabe el comercio que puede entregar el producto o servicio?**

Estas no son preguntas de ingeniería — son preguntas de producto con consecuencias directas en experiencia y conversión.

- ### Idempotencia y reintentos

En sistemas transaccionales de alto volumen — y aquí el paralelo con ecommerce B2B es directo — uno de los problemas más frecuentes es el reintento no controlado: el sistema falla, el usuario vuelve a intentar, y si el backend no está preparado, se procesan dos pagos en lugar de uno. En pagos, ese error, además de ser un bug, es un problema financiero, regulatorio y de confianza.

La **idempotencia** es el mecanismo que previene eso: cada transacción tiene un identificador único que garantiza que aunque el request llegue dos veces, el pago se procese una sola vez. Un PM no necesita implementar esto, pero sí necesita exigirlo, entender cuándo puede fallar, y definir qué flujo ve el usuario cuando ocurre.

- ### Settlement y liquidación al comercio

Este es quizás el punto donde P2P y P2M divergen más. En P2P, el dinero llega al destinatario en tiempo real o casi real. En P2M, el settlement — la liquidación efectiva de los fondos al comercio — puede tomar horas o días, dependiendo del facilitador, el adquirente y los ciclos de corte definidos. Eso tiene implicancias de negocio que el PM debe entender: **¿cada cuánto liquida el comercio? ¿Quién asume el float mientras tanto? ¿Cómo se maneja una devolución si el dinero ya fue liquidado?**

- ### Manejo de errores y experiencia del usuario

En P2P, un error casi siempre tiene una causa clara: fondos insuficientes, número incorrecto, límite excedido. En P2M, los errores pueden venir de múltiples puntos de la cadena — el comercio, el facilitador, la CCE, la billetera del usuario — y no siempre es obvio en cuál falló. **¿Qué mensaje le muestras al usuario? ¿Cómo evitas que abandone el flujo? ¿Cómo distingues un error recuperable de uno que requiere intervención manual?**

Diseñar bien el manejo de errores en P2M es una de las decisiones de producto con mayor impacto en conversión — y una de las que más frecuentemente se deja para después.

Vale mencionar que existe un tercer riel con su propia lógica: el de tarjetas. A diferencia del riel A2A, en tarjetas hay una etapa intermedia llamada clearance — el intercambio de información entre banco emisor y adquirente para confirmar los detalles de la transacción — que ocurre después de la autorización y antes del settlement. Es una etapa que no existe en transferencias inmediatas ni en billeteras sobre CCE, lo que hace al ciclo A2A más directo pero también con menos mecanismos de corrección intermedios. Otra razón por la que el método de pago que eliges no es solo una decisión comercial — es una decisión que cambia toda la arquitectura de producto detrás.

Entonces, el lifecycle no es un tema de ingeniería que el PM puede delegar completamente. Es el mapa que define dónde están las decisiones de producto que nadie más va a tomar si el PM no las toma. Y entendido el sistema, aparece la siguiente capa: **qué pasa cuando algo sale mal — y qué decide el PM al respecto.**

## Fraud & Risk: las decisiones que sí le corresponden al PM

Hablar de fraude en pagos desde el rol de PM no se refiere a modelos de machine learning ni a reglas de detección. Es hablar de decisiones de diseño que tienen consecuencias financieras, de experiencia y de confianza — y que nadie más va a tomar si el PM no las toma.

Quien haya trabajado en productos regulados — seguros, banca, cualquier industria donde una nueva funcionalidad requiere pasar por ciberseguridad, riesgo operacional y auditoría antes de salir a producción — reconoce que el riesgo no es solo un tema de compliance. Es una variable de diseño que aparece desde el primer día, no al final del sprint.

En pagos, esa lógica se intensifica. Estas son las decisiones concretas donde el PM tiene que tomar posición:

### ¿Cuánta fricción acepto para reducir fraude?

Cada capa de seguridad que agregas al flujo de pago — una confirmación adicional, una validación biométrica, un OTP — reduce el riesgo de fraude pero también reduce la conversión. No hay una respuesta correcta universal. Depende del ticket promedio, del perfil de usuario, del canal y del apetito de riesgo del negocio.

Quien haya trabajado mejoras de checkout en ecommerce reconoce esta tensión: agregar un paso de validación puede recuperar transacciones fraudulentas pero también puede hacer que usuarios legítimos abandonen el flujo. En pagos esa decisión tiene el mismo trade-off, solo que las consecuencias son más inmediatas y más visibles en los números.

El PM debe poder responder: ¿en qué punto la fricción que agrego para proteger el sistema empieza a costarle más al negocio que el fraude que previene?

### ¿Qué hago cuando el sistema bloquea a un cliente bueno?

Los modelos de riesgo cometen errores en dos direcciones: dejan pasar fraude que no deberían, y bloquean transacciones legítimas que no deberían. Los falsos positivos — clientes buenos bloqueados — que normalmente pasan desapercibidos porque el usuario afectado generalmente no reclama, simplemente se va.

El PM necesita definir qué pasa en ese momento: ¿el usuario recibe un mensaje claro que le explica qué ocurrió? ¿Tiene un camino alternativo para completar la transacción? ¿Existe un flujo de revisión manual para casos en el límite?

Diseñar mal ese momento no solo pierde una transacción — pierde un usuario. Y en un ecosistema donde la competencia entre billeteras y métodos de pago es alta, perder la confianza de un usuario es difícil de recuperar.

### ¿Cómo diseño el flujo de disputas antes de que el problema ocurra?

En el riel de tarjetas existe un mecanismo formal llamado chargeback: el usuario disputa un cargo con su banco emisor, y si la disputa prospera, el banco revierte el cobro al comercio. Es un proceso regulado por las redes internacionales, con plazos y evidencias definidas. Para el comercio, cada chargeback tiene un costo directo — el monto disputado, una comisión por gestión — y uno indirecto: si la tasa de chargebacks supera ciertos umbrales, el adquirente puede suspender la cuenta del comercio.

En el riel A2A — transferencias inmediatas y billeteras sobre CCE — el mecanismo no se llama chargeback formalmente, pero la consecuencia de negocio es similar: reversiones, disputas, pérdida de revenue y costo operativo de resolución.

Es importante que el PM diseñe el flujo pensando en cómo minimizar disputas antes de que ocurran — no solo en cómo resolverlas después. Eso incluye: comunicación clara del estado de la transacción en tiempo real, confirmaciones que el usuario pueda verificar, y un flujo de atención que resuelva rápido sin requerir que el usuario escale.

### La decisión que conecta todo

Fraude, falsos positivos y disputas no son problemas separados — son síntomas de la misma pregunta de fondo: ¿qué nivel de riesgo está dispuesto a asumir el negocio, y cómo se refleja eso en el diseño del producto?

Esa pregunta no la responde el equipo de riesgo solo. La responde el PM junto con riesgo, con el negocio y con el equipo legal — igual que ocurre en cualquier producto regulado donde cada decisión de diseño tiene una contraparte en compliance.

Un PM que entiende esa dinámica no espera que le digan qué restricciones aplican. Las anticipa, las incorpora al diseño desde el inicio, y sabe cuándo una decisión de producto necesita pasar por más de una mesa antes de implementarse.

## El PM que entiende el sistema toma decisiones distintas

El ecosistema de pagos en Perú está en un momento particular. La Fase 4 de la estrategia de interoperabilidad del BCRP está abriendo el mercado a nuevos actores — fintechs y bigtechs que podrán iniciar pagos en nombre de usuarios con su consentimiento. Eso significa que en los próximos años van a ingresar players que van a construir sobre el mismo riel que hoy usan las billeteras y los bancos.

Algunos de esos productos van a funcionar bien. Otros van a romperse en producción de formas que nadie supo anticipar.

La diferencia casi nunca va a estar en la tecnología. Va a estar en si el PM que lideró el producto entendía lo que pasaba por debajo de la pantalla — el lifecycle de la transacción, las decisiones de riesgo que impactan la experiencia, las restricciones del ecosistema que no son negociables y las que sí.

Construir pagos en Perú hoy es una oportunidad muy interesante. Pero es una oportunidad que requiere un tipo de pensamiento de producto específico: uno que conecte la experiencia del usuario con la complejidad del sistema, que anticipe los puntos de falla antes de que ocurran, y que sepa navegar un ecosistema regulado sin perder el foco en el problema que está resolviendo.

¿Tu equipo de producto tiene ese perfil hoy?

---

## Fuentes

- BCRP — Estrategia de Interoperabilidad de los Pagos Minoristas (2022–2025): bcrp.gob.pe/sistema-de-pagos/interoperabilidad
- BCRP — Reporte del Sistema Nacional de Pagos y del sector Fintech en Perú, Marzo 2025: bcrp.gob.pe/publicaciones/reporte-del-sistema-nacional-de-pagos
- BCRP — Reporte del Sistema Nacional de Pagos y del sector Fintech en Perú, Setiembre 2025: bcrp.gob.pe/publicaciones/reporte-del-sistema-nacional-de-pagos
- PCMI — Métodos de pago más utilizados en América Latina 2025: paymentscmi.com
- FinDev Gateway — Perú: Pagos digitales superan los 186 millones de transacciones mensuales en 2025: findevgateway.org
- Inside PayTech — Estrategia de Interoperabilidad en Perú: el nuevo motor de los pagos digitales: insidepaytech.com
- ComexPerú — Avances en la estrategia de interoperabilidad del BCRP en los pagos digitales: comexperu.org.pe
- AmericaRetail — Evolución del ecosistema de pagos digitales peruano: americaretail-malls.com
