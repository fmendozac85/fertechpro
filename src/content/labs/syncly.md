---
title: "Syncly — App para alineamiento y conexión equipos de trabajo"
description: "Plataforma web B2B que simplifica rituales semanales de equipos de trabajo y fortalecer la conexión y alineamiento, minimizando complejidad del día a día."
category: ia
status: archived
startDate: 2025-07-01
updatedDate: 2025-07-28
techStack:
  - Bolt.new
  - ElevenLabs API
  - Groq API + LLaMA 3 70B
  - Supabase
  - React + TypeScript
  - Entri
  - Brevo
  - Netlify
demoUrl: "https://youtu.be/RlBOCIBWbfI"
metrics:
  - value: "Positivo"
    label: "Mood promedio en ult mes"
  - value: "+10%"
    label: "Tasa de tareas completadas"
  - value: "4.8/5"
    label: "Satisfacción promedio de los usuarios"
featured: true
---

## El problema que resuelve

¿Tu equipo tiene reuniones semanales, usa alguna herramienta de gestión y aun así sientes que algo no está funcionando? ¿La energía bajó, el reconocimiento no llega y las prioridades se sienten confusas?

No es un problema de procesos. Es un problema de conexión.

Lo viví de cerca en 2021, trabajando remoto durante la pandemia. Teníamos check-ins semanales — útiles, pero transaccionales. Hasta que nuestro líder hizo un cambio simple: empezó cada reunión preguntando ¿cómo llegas hoy? Eso fue todo. Ese gesto convirtió un reporte de estado en un ritual real, y al equipo en algo que genuinamente funcionaba junto.

La diferencia no estaba en la herramienta ni en el proceso. Estaba en si el equipo se sentía visto, alineado y con energía para la semana.

El problema es que ese tipo de rituales depende completamente del líder — de su tiempo, su energía, su iniciativa. Si el líder no lo hace, no pasa. Y en equipos híbridos o remotos, casi nunca pasa.

> **La hipótesis:** si le damos a cualquier equipo una estructura simple para ejecutar esos rituales — check-in emocional, reconocimiento entre pares, alineamiento de prioridades — en menos de 10 minutos semanales, ¿los adoptarán de forma sostenida? ¿Mejorará el clima y la productividad?
Eso fue lo que fui a descubrir.

## Qué es y cómo funciona

Syncly es una plataforma web liviana que ayuda a equipos a ejecutar rituales semanales con estructura — sin agregar complejidad a su día a día.

La idea no es reemplazar tus reuniones existentes sino mejorarlas. La magia ocurre durante la sesión en vivo, ya sea presencial, híbrida o remota. Syncly le da a esa reunión un hilo conductor claro: todos llegan preparados, todos participan, y el equipo sale con más energía de la que entró.

### ¿Cómo funciona en la práctica?
Durante la semana, cada miembro del equipo registra sus highlights de forma asíncrona — usando voz. La IA de Syncly toma ese audio, lo estructura y genera un resumen claro listo para compartir en la sesión. Sin formularios largos, sin preparación que se siente como tarea.

En la sesión, el equipo usa un dashboard compartido que centraliza todo lo que importa para el ritual:

- **Check-in de ánimo**: cómo llega cada persona esa semana, con seguimiento de tendencias en el tiempo
- **Highlights del equipo**: los avances más relevantes de cada miembro, ya estructurados por la IA
- **Reconocimientos y cumpleaños**: un espacio para celebrar contribuciones y momentos del equipo
- **Vacaciones y disponibilidad**: visibilidad inmediata de quién está y quién no la próxima semana
- **Eventos y anuncios**: lo relevante de la organización integrado al ritual, no en un correo que nadie lee

![Syncly-desktop_1](/imagenes/syncly/syncly-1.png)

![Syncly-desktop_1](/imagenes/syncly/syncly-2.png)

La experiencia varía según el rol. Los miembros del equipo preparan sus highlights durante la semana y usan el dashboard durante la sesión para participar y reconocer a sus pares. Los líderes gestionan la composición del equipo y facilitan el ritual desde el mismo dashboard — sin herramientas separadas ni vistas privilegiadas que rompan la dinámica.

Ambos roles comparten el mismo espacio. Eso no es un detalle menor — es parte del diseño. La transparencia y la participación igualitaria son lo que hace que el ritual funcione.

## Lo desafíos

Todo producto tiene una brecha entre lo que imaginas y lo que terminas construyendo. En Syncly esa brecha apareció rápido y en varios frentes a la vez.

1. **La complejidad multiusuario es fácil de subestimar**
En papel, dos roles sobre un mismo dashboard suena simple. En la práctica, gestionar estado de sesión entre roles, dispositivos y pestañas simultáneas generó edge cases que no anticipamos en el diseño inicial. El aprendizaje: en productos colaborativos en tiempo real, la gestión de sesiones no es un detalle técnico — es una decisión de producto que hay que tomar desde el día uno.

2. **Cuando el producto tiene muchas piezas, el debugging se vuelve una habilidad crítica**
Syncly combinaba IA, audio, dashboards, mood tracking y gestión de usuarios. Cada feature nueva potencialmente rompía algo en otra capa. Aprendí que en proyectos de este tipo no alcanza con saber construir — hay que saber diagnosticar rápido. Terminamos con un flujo de debugging estructurado usando Bolt.new y ChatGPT como segunda opinión, lo que nos permitió mantener velocidad sin acumular deuda técnica invisible.

3. **La experiencia de voz es más difícil de lo que parece**
Pedirle a alguien que grabe su voz para un highlight semanal es un cambio de comportamiento no trivial. El usuario tiene que confiar en que el sistema va a procesar bien su input y devolverle algo útil. Iteramos varias veces el diseño del prompt para LLaMA 3 70B, el feedback visual durante la grabación y la latencia del procesamiento. La lección: en features basadas en IA generativa, el prompt engineering y la UX son igual de importantes que la integración técnica.

4. **El modelo de datos correcto simplifica tu producto**
Las decisiones de base de datos que tomamos en Supabase no eran solo técnicas — definían qué podía hacer el producto y qué no. Modelar rituales, highlights, check-ins y reconocimientos con la flexibilidad suficiente para evolucionar, sin perder control de acceso por rol, fue donde más tiempo invertimos. Y valió la pena: un modelo de datos mal diseñado al inicio habría limitado el producto más que cualquier otro factor.

## Aprendizajes clave

Syncly fue mi laboratorio más honesto hasta ahora. Lo que aprendí no fue solo técnico — fue sobre cómo pienso el producto. Si bien fue un producto de calidad, y en modalidad experimentacion para ver hasta donde se podia llegar con Vibe Coding en Bolt.new en aquel entonces, hubiera sido mejor construir un producto donde la necesidad está mas claramente desatendida. Siendo estrictos, esta necesidad se puede atender parcialmente utilizando un excel o power point compartido, entonces el dolor no es tan grave. Pienso que ahí está mi principal aprendizaje.

Además considero importantes estos aprendizajes:
1. **La IA es tan buena como el criterio de quien la dirige**
La calidad del output de IA depende directamente de la claridad con la que defines el problema. Iterar prompts con casos de uso reales me enseñó algo que aplica más allá de la IA: la ambigüedad en el input siempre produce ambigüedad en el output. Como PM, tu trabajo es eliminar esa ambigüedad antes de que llegue al equipo — o en este caso, al modelo.

2. **La UX es lo que hace que una feature funcione o muera**
Es fácil enamorarse de la capacidad técnica — en este caso, procesar voz con IA. Pero la adopción no depende de que la feature exista sino de que el usuario confíe en ella. Invertir tiempo en hacer la experiencia de voz simple y predecible fue más valioso que cualquier mejora al modelo. La lección: una feature que nadie usa no resuelve nada.

3. **Simplicidad es la decisión más difícil**
Mantener el producto liviano mientras gestionas múltiples roles, flujos en tiempo real y edge cases requiere más esfuerzo que agregar funcionalidad. Siempre es más fácil sumar que quitar. Cada vez que consideramos agregar algo nuevo, la pregunta era: ¿esto reduce carga cognitiva para el usuario o se la agrega? Esa pregunta sola eliminó varias ideas que parecían buenas en papel.

4. **El debugging bien hecho es una ventaja competitiva**
En un proyecto con tantas capas, saber diagnosticar rápido marca la diferencia entre mantener velocidad o perderla. Estructurar el proceso de troubleshooting — en lugar de resolverlo de forma reactiva cada vez — fue lo que nos permitió avanzar sin acumular problemas invisibles.