---
titulo: "Unit Economics Financieros en pagos: guía para PMs de fintech"
fecha: 2026-04-19
pilar: fintech
extracto: "Entiende cómo funciona el MDR, el interchange y las métricas clave del ecosistema de pagos para tomar mejores decisiones como PM de fintech."
lectura: 8
destacado: false
imagen: /imagenes/unit-economic-financieros/featureImg-UEF.png
draft: false
---
# Contexto

Era sábado temprano así que me dispuse a pasear por el Jockey Plaza. Era un día tranquilo semanas previas a navidad, así que más me vale ir viendo regalos y no esperar a último minuto. De repente, personal de un banco se acercaron para ofrecerme tarjeta de crédito.

Con mucha amabilidad decliné y seguí mi camino. Horas más tarde volví a pasar por ahí y nuevamente intentaron que acepte la tarjeta. Me dije "Mmmm estaría bueno el beneficio de tener estacionamiento vip en el jockey peroo.... ya tengo tarjeta". Seguí mi camino. Por la tarde, en una tienda por departamento, otra vez me ofrecieron tarjeta de crédito. Me dije "mmm interesante este negocito de tarjetas. Se están ofreciendo con fuerza". Como no estaba interesado seguí mi camino y, como ya se hacía tarde y tenía hambre, me fui a un supermercado para comprar cosas para la cena. En mi camino hacia los panes, oh sorpresa, también una srta muy amable me ofrecía una tarjeta del supermercado para mis compras.

"Asu, la colocación de tarjetas está on fire", me dije. Y esto despertó mi curiosidad.

No era intuición: según el Reporte del Sistema Nacional de Pagos del BCRP (2025), el número de transacciones con tarjetas en Perú creció **28.1% en 2024**. El mercado no miente.

Si tantas entidades bancarias y no bancarias estaban promoviendo la colocación de sus tarjetas, un motivo importante debe haber. Me puse a investigar y efectivamente es un modelo de monetización excelente que resuelve necesidades de compra reales. No obstante, también abre en este contexto grandes oportunidades para más players del ecosistema de pagos. Vayamos por partes.

# El negocio detrás de la tarjeta

La primera pregunta es: ¿Por qué es útil para el usuario tener una tarjeta de crédito?

Simple: salvo que te guste guardarlas solo para coleccionar, es un instrumento de crédito y beneficios para utilizarla en tus compras. Resuelven una necesidad real:

- **Si necesitas hacer compras y no tienes efectivo**: la tarjeta de crédito te permite efectuarlas siempre que tu línea de crédito lo soporte.
- **Si te gusta viajar o acceder a beneficios**: la tarjeta puede ofrecerte millas, cashback, descuentos en productos y muchos más beneficios que la entidad financiera defina para satisfacer a sus usuarios.
- **Si eres un comercio que quiere vender más**: cuando tu cliente no tiene efectivo, o tendrías que esperar o financiarlo tú mismo (lo cual es riesgoso porque desconoces su historial crediticio). La tarjeta resuelve eso.

Podemos concluir que es útil tanto para el comprador como para el comercio. Ahora, ¿por qué es tan importante para los bancos colocar tarjetas en los usuarios?

Simple: porque cada vez que el usuario utiliza su tarjeta para comprar en un comercio, ese comercio paga un fee por el beneficio de recibir casi el 100% del precio del bien o servicio. Y digo "casi" porque un porcentaje se va en ese fee.

# El MDR y el rol del interchange

En la terminología de unit economics financieros, a ese fee se le conoce como **Merchant Discount Rate (MDR)**. Está compuesto de cuatro partes:

- 1️⃣ **Interchange** — típicamente la mayor porción del MDR
- 2️⃣ **Fee de la red** (Visa/Mastercard)
- 3️⃣ **Fee del adquirente / procesador**
- 4️⃣ **Fee del facilitador** (si existe en la cadena)

Vale precisar por qué el interchange es la parte más grande: es el mecanismo con el que el banco emisor —el banco que te dio la tarjeta— recupera el costo de financiarte la compra y fondea los beneficios que te ofrece (millas, cashback, descuentos). Dicho de otra forma: cada vez que usas tu tarjeta, el comercio le paga indirectamente al banco emisor por asumir tu riesgo crediticio y por haberte dado esos beneficios. El peso del interchange sobre el MDR varía según el tipo de tarjeta (crédito o débito), el segmento comercial y el mercado. En Perú, el BCRP regula las tasas de intercambio para tarjetas domésticas, lo que las diferencia de mercados sin regulación como EE.UU.

Volvamos al ejemplo del sábado. Semanas después fui a Metro a hacer las compras de la semana y pagué con mi tarjeta Visa del Banco Ripley. Esto es lo que pasó detrás de escena:

- El precio final de mi carrito fue S/. 300.
- Yo pagué los S/. 300 con mi tarjeta.
- Metro no recibió los S/. 300 completos. Para un supermercado de alto volumen en Perú, un MDR referencial es ~1.5%, así que Metro recibió aproximadamente **S/. 295.50**.
- Los **S/. 4.50 del MDR** (~1.5%) se distribuyeron entre todos los participantes de la cadena:

| Participante | Recibe | Concepto |
|---|---|---|
| **Metro** (comercio) | S/. 295.50 | Precio cobrado menos MDR |
| **Banco Ripley** (banco emisor) | ~S/. 2.10 | Interchange |
| **Visa** (red de pago) | ~S/. 0.45 | Fee de red |
| **Niubiz** (adquirente) | ~S/. 1.95 | Fee de procesamiento |
| **MDR total** | **S/. 4.50** | **~1.5% sobre S/. 300** |

*(Cifras aproximadas e ilustrativas. El MDR del 1.5% es consistente con la tasa de intercambio promedio de 1.52% reportada por el BCRP para el sector retail en 2024.)*

Bingo. Aquí está el verdadero potencial de monetización. Al facilitar la compra al crédito —y asumir el riesgo de que el usuario no pague— el Banco Ripley cobró S/. 2.10 solo porque decidí usar su tarjeta en un supermercado. Multiplica eso por millones de transacciones diarias en todos los comercios afiliados a Visa en el Perú y el mundo. La oportunidad es gigante. Y ahora entiende por qué había promotores de tarjetas en cada esquina del Jockey Plaza.

# Entendiendo el modelo como un PM de Fintech

Ahora veamos el panorama completo. Este flujo de monetización forma parte de 4 métricas que toda entidad financiera planifica, monitorea y ajusta para darle viabilidad al negocio:

**TPV → Take Rate → Revenue → Margen**

- **TPV (Total Payment Volume)**: el volumen total de dinero que se mueve a través de la plataforma. Así como las tarjetas necesitan más comercios, más usuarios y más transacciones para escalar su capacidad de monetización, las empresas financieras buscan que en sus plataformas digitales se mueva cada vez más dinero. Ejemplo: si ya usas una app para tus pagos del día a día, es mucho más probable que contrates en esa misma app un crédito de consumo que en una plataforma nueva donde aún no confías.

- **Take Rate**: el porcentaje que la entidad financiera captura del TPV. No es fijo; varía por producto, segmento y poder de negociación.

- **Revenue**: los ingresos que genera la empresa, calculados como `TPV × Take Rate`. En la práctica, suelen crecer más con estrategias que aumentan el TPV que subiendo el Take Rate, porque el mercado de pagos es competitivo y subir tasas puede costarte merchants. Algunos ejemplos de revenue en este ecosistema:
    - Interchange (como vimos en el ejemplo de Metro)
    - Spread cambiario (en transacciones internacionales)
    - Intereses (en el financiamiento al usuario)
    - Suscripciones y comisiones
    - Trading

- **Margen**: no todo revenue es ganancia. Siempre hay costos para sostener el producto y gestionar el riesgo. En pagos, los principales son:

    - **Costos de procesamiento**: para que la transacción de S/. 300 en Metro se autorice en segundos, hay una infraestructura enorme detrás — servidores, sistemas de autorización en tiempo real, integraciones con redes como Visa. Todo eso tiene un costo por transacción.
    - **Default rate**: Niubiz ya liquidó los S/. 295.50 a Metro, y yo —como usuario— aún no le he pagado al banco. Si entro en impago, ese préstamo se convierte en un costo irrecuperable para el banco emisor.
    - **Fraudes**: imagina que alguien clonó los datos de mi tarjeta y realizó esa misma compra de S/. 300 en Metro sin mi autorización. El banco debe asumir ese costo sin haber recibido ni la transacción legítima ni el pago del cliente real.
    - **Chargebacks**: si yo como cliente disputo la transacción ante el banco ("esa compra no la hice yo"), el banco debe iniciar un proceso de reversión. Ese proceso tiene costos operativos y, dependiendo del resultado, también pérdidas directas.
    - **Costos de capital**: el banco financió mis S/. 300 a Metro antes de cobrarme a mí. Ese dinero disponible entre T+0 (el día de la transacción) y mi fecha de pago tiene un costo financiero real.
    - **Infraestructura, compliance y personal**: mantener la plataforma segura, cumplir con regulaciones de la SBS y el BCRP (certificaciones PCI-DSS, reportes, auditorías) y sostener los equipos de riesgo, fraude y soporte que hacen que todo funcione correctamente.

# Nuevas oportunidades en el ecosistema de pagos

Ahora que entendemos cómo funciona el modelo, veamos por qué el contexto actual abre oportunidades para todos los participantes del ecosistema:

- **Los grandes bancos lideran la innovación en pagos digitales**: YAPE (BCP), Tunki (Interbank), Lukita (BBVA) y Plin son evidencia clara de que la banca no solo no se quedó atrás, sino que está construyendo infraestructura propia para ofrecer soluciones de pago complementarias a la tarjeta. Tienen el activo más difícil de replicar: la confianza del usuario y la base de clientes consolidada. El resultado es visible: al cierre del primer semestre de 2025, los peruanos realizaban más de **186 millones de transacciones digitales interoperables al mes** — un volumen 7 veces mayor al de hace cinco años (BCRP, 2025).

- **Fintech especializadas en pagos**: de las 237 fintech que operaban en Perú a diciembre de 2024, el **25% corresponde al segmento de pagos y transferencias** (BCRP, 2025). Buscan eficientar el MDR con propuestas de valor específicas, como mejores tasas de descuento para comercios o modelos de liquidación más ágiles. En la práctica, suelen integrarse como facilitadores o procesadores que complementan —no amenazan— la cadena de valor existente.

- **La cobranza inmediata como diferenciador**: el clearance y settlement tradicional —el proceso por el cual el dinero de una transacción llega efectivamente a la cuenta del comercio— puede tomar hasta T+2 (es decir, hasta 2 días hábiles después del día de la transacción). Esos días de espera representan capital inmovilizado para el comercio. Cualquier propuesta que reduzca ese plazo aporta liquidez real: a mayor liquidez, mayor rotación de inventario, y eso se traduce directamente en crecimiento del negocio.

- **Interoperabilidad y nueva Plataforma de Pagos Minoristas (BCRP)**: desde 2023, el BCRP desplegó por fases su estrategia de interoperabilidad, que permite a usuarios de distintas billeteras enviarse dinero sin importar qué app usen — YAPE a Plin, Plin a BIM, y así. El resultado: más de 119 millones de transacciones mensuales solo a través de wallets interoperables en diciembre de 2024, con un crecimiento de 11x en transferencias inmediatas desde que Banco de la Nación se integró (BCRP, 2025). El siguiente paso es la nueva Plataforma de Pagos Minoristas (PPM), inspirada en el modelo UPI de India, cuyo primer piloto ya arrancó. Para las organizaciones del ecosistema, esto cambia las reglas: por primera vez, bancos, fintech y nuevos entrantes pueden competir desde una infraestructura de pagos común y regulada.

# Lo que esto significa para un PM de pagos

El ecosistema de pagos peruano está en un momento de transformación real. La oportunidad está para todos: bancos, fintech y nuevos participantes. Cada uno tiene activos distintos y palancas diferentes, pero los objetivos son los mismos — más volumen, mejor margen y más valor para el usuario.

Como PM en una organización de pagos, estas 4 palancas son tu mapa de navegación:

1. **Crecimiento del TPV**: ¿qué features incrementan el volumen de transacciones? ¿Nuevos comercios afiliados, nuevos segmentos de usuario, nuevos casos de uso?
2. **Optimización del Take Rate**: ¿hay segmentos donde el pricing puede mejorarse sin perder merchants? ¿Productos de mayor margen que puedan potenciarse?
3. **Revenue mix**: ¿cómo diversificar más allá del interchange? Intereses, suscripciones, float, servicios de valor agregado para el comercio.
4. **Gestión del margen**: ¿qué costos operativos pueden reducirse con tecnología? Fraude, chargebacks, procesamiento, compliance.

Entender estas palancas no solo te hace un mejor PM — te permite hablar el idioma de negocio de tu organización y conectar cada decisión de producto con los objetivos que realmente mueven la aguja. Eso es lo que separa a un PM que ejecuta de uno que lidera con visión.

---

## Fuentes y referencias

- **BCRP** — *Reporte del Sistema Nacional de Pagos y del sector Fintech en Perú — Marzo 2025*. Banco Central de Reserva del Perú. [bcrp.gob.pe](https://www.bcrp.gob.pe/publicaciones/reporte-del-sistema-nacional-de-pagos/rspf-marzo-2025.html)
- **BCRP** — *Reporte del Sistema Nacional de Pagos y del sector Fintech en Perú — Setiembre 2025*. Banco Central de Reserva del Perú. [bcrp.gob.pe](https://www.bcrp.gob.pe/publicaciones/reporte-del-sistema-nacional-de-pagos/rspf-setiembre-2025.html)
- **BCRP** — *Ley N.° 29985: Ley que regula las características básicas del dinero electrónico como instrumento de inclusión financiera* (2013).
- **BCRP** — *Estrategia de Interoperabilidad de los Pagos Minoristas*. [bcrp.gob.pe](https://www.bcrp.gob.pe/sistema-de-pagos/interoperabilidad/estrategia-de-interoperabilidad-de-los-pagos-minoristas.html)
- **BIS / CPMI** — *Statistics on payment, clearing and settlement systems in the CPMI countries* ("Red Book"). Bank for International Settlements. [bis.org](https://www.bis.org)
- **Visa** — *Visa Core Rules and Visa Product and Service Rules*. Documentación técnica disponible para entidades afiliadas a la red Visa.
