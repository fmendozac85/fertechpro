---
titulo: "Open Finance llegó al Perú: ¿qué construirías primero si fueras el PM?"
fecha: 2026-03-10
pilar: fintech
extracto: "La oportunidad de Open Finance en el Perú y cómo abordaria el reto que los usuarios acepten compartir sus datos."
lectura: 6
destacado: true
imagen: /imagenes/priorizacion-openfinance-pm/FeatureImg-openfinance-pm.png
draft: false
---

La SBS acaba de publicar su Hoja de Ruta de Finanzas Abiertas. Hay fechas reales, fases definidas y una ventana concreta: el primer intercambio de datos tiene que estar operativo hacia finales de 2027. Eso significa que en algún banco, fintech o startup peruana, hay un PM que ya tiene — o pronto tendrá — que responder una pregunta muy interesante: ¿qué construimos primero?

Su importancia no es menor. Es la decisión que va a determinar si Open Finance en el Perú despega con tracción real o se convierte en otro sistema bien diseñado de poco uso.

## Primero, veamos el contexto
Open Finance es el modelo que le permite al usuario compartir su información financiera, con su consentimiento, entre distintas instituciones a través de APIs. La diferencia con lo que existe hoy es simple: ahora tus datos están atrapados en cada banco por separado. Con Open Finance, tú decides quién los puede leer y para qué.

El Perú ya tiene cosas avanzadas. El BCRP viene modernizando el sistema de pagos, Yape y Plin tienen decenas de millones de usuarios, y más del 75% de las entidades financieras ya tienen APIs para uso externo. La infraestructura base existe. Si bien el diagnóstico completo, la regulación y especificaciones técnicas de los primeros grupos de datos se realizarán a lo largo de 2026 e inicios de 2027, me adelanto en reflexionar sobre lo vital que es decidir qué se construye primero sobre ella.
Y ahí es donde entra el PM.

## Lo que la industria priorizó y por qué tiene sentido
Cuando la SBS consultó al mercado sobre qué casos de uso consideraban prioritarios, la respuesta fue clara: colocación de créditos, personalización de productos y mejora de modelos de scoring crediticio.
Los tres casos apuntan al mismo segmento: el usuario que ya tiene huella digital activa pero está subvalorado por los modelos tradicionales de scoring. No es un usuario moroso, sino que su actividad financiera ocurre en plataformas que los modelos convencionales desconocen. Y ese segmento es enorme. 

> solo el 33% de adultos peruanos tiene un crédito en el sistema financiero formal, y solo el 28% de las MYPEs accede a crédito formal. (Fuente SBS)

Aquí vale una precisión importante. Open Finance no es una solución de inclusión financiera desde cero. El usuario que opera 100% en efectivo, sin ninguna huella digital, sigue siendo invisible para el sistema con o sin Open Finance. El candidato natural de este modelo es otro: el que ya usa Yape, Plin, recibe pagos en billetera digital o tiene cuenta de ahorros, pero que los modelos crediticios tradicionales no logran evaluar bien porque su actividad está fragmentada entre plataformas que no se comunican entre sí.

De hecho, el modelo ya funciona en versión limitada. Yape hoy otorga créditos basándose en el historial transaccional de sus propios usuarios. Rappi y Mercado Pago hacen lo mismo. La prueba de concepto existe y genera resultados reales en el mercado peruano.

El problema es que cada plataforma solo ve sus propios datos. Yape te evalúa con lo que mueves en Yape, sin saber lo que tienes en Interbank, Caja Piura o en otras entidades. El scoring es real, pero incompleto.
Open Finance no inventa el scoring transaccional, lo consolida. Permite unificar ese historial fragmentado con el consentimiento del usuario, dando una visión mucho más completa y justa de su perfil financiero real. Entonces, la pregunta ya no es si el modelo funciona. La pregunta es cómo pasamos del scoring en silos que ya existe al scoring consolidado que Open Finance habilita.

## La oportunidad
El usuario con el perfil más valioso para el scoring consolidado, el que tiene movimientos en Yape, pagos en Mercado Pago y una cuenta en una caja municipal, es también el que todavía no tiene una razón concreta y visible para autorizar que esas plataformas compartan su información entre sí. No porque no pueda entenderlo, sino porque nadie le ha mostrado aún qué obtiene a cambio.
Esa es la paradoja central que un PM tiene que resolver: el usuario con el perfil más valioso para el scoring consolidado aún no tiene motivos para activarlo.
Y si no resuelves eso primero, el modelo más sofisticado del mundo no va a funcionar, porque no vas a tener usuarios dispuestos a cruzar ese puente.

Antes de lanzar el caso de uso del scoring consolidado, necesitas que ese usuario haya vivido al menos una experiencia donde compartir sus datos entre plataformas le trajo algo tangible e inmediato. Una experiencia simple, de bajo riesgo percibido, que le dé una razón propia para querer seguir participando.

¿Cuál podría ser esa experiencia? Algo que le muestre al usuario, en segundos, que sus datos valen y que él tiene el control. No un comparador genérico de tasas —eso ya existe sin Open Finance— sino algo que solo sea posible con sus datos reales: una vista consolidada de todos sus movimientos en distintas billeteras y cuentas, o una estimación personalizada de su capacidad de ahorro basada en su comportamiento real, no en promedios del mercado.

El objetivo no es el caso de uso en sí. El objetivo es que el usuario salga de esa primera experiencia pensando: "esto me sirve, entiendo para qué comparto mis datos, y quiero más de esto."
Ese usuario ya está listo para el siguiente paso.

## La secuencia que yo construiría
Si fuera el PM de una fintech o banco digital en el Perú hoy, mi foco estaría en diseñar una secuencia de adopción, no solo en priorizar casos de uso de forma aislada.

1. **Primer momento — construir confianza**: Un caso de uso simple, de valor inmediato y bajo riesgo percibido. Diseñado específicamente para el usuario con huella digital pero sin crédito formal. Un ejemplo concreto: una vista de salud financiera personal. El usuario autoriza compartir sus movimientos de Yape y su cuenta de ahorros. A cambio recibe, en segundos, un resumen de cuánto ingresó, cuánto gastó y cuánto podría ahorrar ese mes, basado en su comportamiento real, no en promedios del mercado. No le estás pidiendo que solicite un crédito. Solo le estás mostrando que sus datos tienen valor y que él tiene el control. Este caso además es imposible de replicar sin Open Finance, porque necesita consolidar datos de múltiples plataformas.

  **Métrica de éxito:** tasa de activación del consentimiento en el primer intento, es decir, cuántos usuarios que llegan a la pantalla de consentimiento efectivamente lo otorgan sin abandonar.

2. **Segundo momento — activar el impacto real**: Con esa base de confianza construida, lanzar el scoring alternativo con microsegmentación. No un score genérico, sino uno que entienda que el vendedor de mercado que recibe pagos diarios en Yape tiene un perfil de riesgo completamente distinto al freelancer que factura mensualmente, aunque ambos tengan el mismo ingreso anual. 

  **Métrica de éxito:** tasa de aprobación de créditos a usuarios que previamente habían sido rechazados o no evaluados por modelos tradicionales.

La Hoja de Ruta de la SBS deja espacio para construir exactamente en ese orden. El primer grupo de datos habilitado hacia finales de 2027 y el segundo hacia mediados de 2028 son la ventana para diseñar esa secuencia con intención.

## Futuro prometedor
Open Finance en el Perú tiene todos los ingredientes para ser transformador. La infraestructura digital está avanzada, la regulación está en marcha y la brecha de inclusión financiera es enorme y real.
Pero el éxito va a depender, en gran medida, de si los PMs que están en esas salas de decisión piensan solo en el caso de uso, o si piensan en la experiencia que le muestra al usuario el valor antes de pedirle que actúe.

La pregunta que yo me haría en su lugar es simple: ¿estoy diseñando para el usuario que ya sabe lo que gana al compartir sus datos, o para el que todavía no tiene razones para hacerlo?
En un mercado donde 7 de cada 10 personas están fuera del crédito formal, y una parte significativa de ellas ya tiene la huella digital para ser evaluadas, esa distinción es muy relevante analizar.