/* Catálogo de artefactos del portfolio.
   estado: "ok" (hay archivo o texto) | "pendiente" (todavía no se cargó)
   doc: ruta a un PDF (se abre en ver.html)  ·  pagina: página HTML propia */
const GRUPO = ["Juan Ignacio Arano", "Natalia Soledad Cirillo", "Martín Federico Elola", "Matías Ezequiel Lignac", "Diego Maximiliano Mendoza"];

const UNIDADES = [
  { n: 1, titulo: "Software: producto y proceso" },
  { n: 2, titulo: "Ingeniería de Requerimientos" },
  { n: 3, titulo: "Obtención de requerimientos" },
  { n: 4, titulo: "Especificación de requerimientos" },
  { n: 5, titulo: "Validación de requerimientos" },
];

const ARTEFACTOS = [
  // ---------------- Unidad 1
  { id: "A-01", unidad: 1, clase: 1, fecha: "2026-08-13", tipo: "grupal", categoria: "actividad",
    titulo: "El software como producto y como proceso",
    resumen: "Comparación del software con otros productos de ingeniería (puente, automóvil, novela, investigación) y selección justificada de dos cualidades que toda organización debería incorporar en sus sistemas.",
    temas: ["Naturaleza del software", "Cualidades"], doc: "trabajos/A-01.pdf", integrantes: "Grupo 9: Juan Ignacio Arano, Natalia Soledad Cirillo y Martín Federico Elola", estado: "ok" },

  // ---------------- Unidad 2
  { id: "A-02", unidad: 2, clase: 2, fecha: "2026-08-25", tipo: "individual", categoria: "investigacion",
    titulo: "Investigación: lenguaje natural e Ingeniería de Requerimientos",
    resumen: "Síntesis de la tesis de maestría «Proceso de validación de requerimientos aplicando técnicas de procesamiento de lenguaje natural en un entorno colaborativo»: resumen, autora, institución, fecha de publicación y enlace.",
    temas: ["Lenguaje natural", "Estado del arte"], doc: "trabajos/A-02.pdf", estado: "ok" },
  { id: "A-03", unidad: 2, clase: 3, fecha: "2026-08-27", tipo: "individual", categoria: "actividad",
    titulo: "Requerimientos en el ciclo de vida",
    resumen: "Cómo se articulan los requerimientos en el ciclo de vida (proceso, técnica y producto), su relación con la calidad y el impacto positivo o negativo de las prácticas de requerimientos, con un ejemplo concreto.",
    temas: ["Ciclo de vida", "Calidad"], pagina: "trabajos/A-03.html", estado: "ok" },
  { id: "A-04", unidad: 2, clase: 4, fecha: "2026-09-04", tipo: "grupal", categoria: "actividad",
    titulo: "Sistema de biblioteca de una Facultad de Informática",
    resumen: "Ejercitación grupal sobre el caso de ejemplo del trabajo práctico: necesidades, deseos y expectativas; diferencia entre requerimientos del usuario y del sistema; e identificación de los stakeholders de la biblioteca.",
    temas: ["Necesidades y deseos", "RU / RS", "Stakeholders"], pagina: "trabajos/A-04.html", integrantes: "Grupo 9", estado: "ok" },
  { id: "A-05", unidad: 2, clase: 5, fecha: "2026-09-14", tipo: "grupal", categoria: "actividad",
    titulo: "Procesos de la IR: turnos del sanatorio «Salud Plena»",
    resumen: "Recorrido completo de los procesos de la IR sobre un caso de turnos médicos: elicitación (stakeholders, preguntas, RF y RNF), especificación formal, validación y gestión de un cambio con trazabilidad.",
    temas: ["Elicitación", "Especificación", "Validación", "Gestión del cambio"], doc: "trabajos/A-05.pdf", integrantes: "Grupo 9: Arano, Cirillo, Elola, Lignac y Mendoza", estado: "ok" },

  // ---------------- Unidad 3
  { id: "A-06", unidad: 3, clase: 6, fecha: "2026-09-16", tipo: "grupal", categoria: "actividad",
    titulo: "Especificación: app de bicicletas compartidas",
    resumen: "Redacción de RF con formato normalizado, RNF verificables, detección y corrección de requerimientos ambiguos y un mini glosario para la comprensión compartida.",
    temas: ["RF / RNF", "Ambigüedad", "Glosario"], doc: "trabajos/A-06.pdf", integrantes: "Grupo 9: Arano, Cirillo, Elola, Lignac y Mendoza", estado: "ok" },

  // ---------------- Unidad 4
  { id: "A-07", unidad: 4, clase: 9, fecha: "2026-10-09", tipo: "grupal", categoria: "investigacion",
    titulo: "Informe: «Técnicas de elicitación de requerimientos» (parte 1)",
    resumen: "Informe grupal —introducción, desarrollo y conclusión— sobre la ponencia «Técnicas de elicitación de requerimientos» de Oliveros y Antonelli, propuesta por la cátedra.",
    temas: ["Investigación", "Especificación"], doc: "trabajos/A-07.pdf", integrantes: "Grupo 9: Arano, Cirillo, Elola, Lignac y Mendoza", estado: "ok" },
  { id: "A-08", unidad: 4, clase: 9, fecha: "2026-10-14", tipo: "individual", categoria: "investigacion",
    titulo: "Técnicas de elicitación: trabajo de investigación (parte 2)",
    resumen: "Aporte individual: artículo científico de 2024 de dos universidades nacionales, «Procesamiento de la información elicitada: buenas prácticas en la ingeniería de requisitos», sobre los errores que aparecen al volcar una entrevista a un modelo en lenguaje natural.",
    temas: ["Técnicas de elicitación", "Estado del arte"], doc: "trabajos/A-08.pdf", estado: "ok" },
  { id: "A-09", unidad: 4, clase: 10, fecha: "2026-10-14", tipo: "individual", categoria: "simulacion",
    titulo: "Entrevista I con IA: Martín Ferraro, CEO de Mercury S.A.",
    resumen: "Simulación de elicitación con un personaje de IA. Rol de analista funcional de una consultora: entrevista, minuta y especificación de requerimientos según ISO/IEC/IEEE 29148.",
    temas: ["Entrevista", "Minuta", "ISO/IEC/IEEE 29148"], pagina: "trabajos/A-09.html", doc: "trabajos/A-09.pdf", estado: "ok" },
  { id: "A-10", unidad: 4, clase: 10, fecha: "2026-10-21", tipo: "individual", categoria: "actividad",
    titulo: "Uso del lenguaje natural en la especificación",
    resumen: "Un término del dominio que generó ambigüedad («siniestro», en un sistema de reclamos de una aseguradora) y la reescritura de una especificación original en lenguaje natural, sin ambigüedades, en voz activa y con sujeto explícito.",
    temas: ["Lenguaje natural", "Ambigüedad"], pagina: "trabajos/A-10.html", estado: "ok" },
  { id: "A-11", unidad: 4, clase: 11, fecha: "2026-10-22", tipo: "individual", categoria: "actividad",
    titulo: "Autoevaluación de cierre: LEL de una boletería",
    resumen: "Diferencias entre diccionario, glosario y ontología; idioma, lenguaje y dialecto; y un LEL de una boletería con símbolos clasificados en sujeto, objeto, verbo y estado.",
    temas: ["LEL", "Glosario", "Ontología"], pagina: "trabajos/A-11.html", estado: "ok" },
  { id: "A-12", unidad: 4, clase: 11, fecha: "2026-10-24", tipo: "individual", categoria: "actividad",
    titulo: "Aplicación del LEL en un dominio técnico",
    resumen: "Informe síntesis del caso de estudio de LEL en un dominio técnico, con ejemplos de cada tipo de símbolo (sujeto, objeto, verbo, estado), y búsqueda de otro caso de aplicación publicado.",
    temas: ["LEL", "Noción e impacto"], pagina: "trabajos/A-12.html", estado: "ok" },
  { id: "A-13", unidad: 4, clase: 11, fecha: "2026-10-25", tipo: "individual", categoria: "simulacion",
    titulo: "Entrevista II con IA: Lucía San Juan, Administración y Finanzas",
    resumen: "Segunda entrevista del caso Mercury S.A.: facturación, conciliación de pagos, mora, reportes y roles. Minuta y especificación de requerimientos funcionales y no funcionales.",
    temas: ["Entrevista", "Conflictos entre actores", "ISO/IEC/IEEE 29148"], pagina: "trabajos/A-13.html", estado: "ok" },

  // ---------------- Unidad 5
  { id: "A-14", unidad: 5, clase: 13, fecha: "2026-11-10", tipo: "individual", categoria: "actividad",
    titulo: "Casos de uso, historias de usuario y escenarios",
    resumen: "Sobre el caso del TP integrador (Centro «Equilibrio»): ejemplos de caso de uso, historia de usuario con criterios de aceptación y escenario.",
    temas: ["Casos de uso", "Historias de usuario", "Escenarios"], pagina: "trabajos/A-14.html", estado: "ok" },
  { id: "A-15", unidad: 5, clase: 14, fecha: "2026-11-18", tipo: "individual", categoria: "simulacion",
    titulo: "Desafío final: Alberto Torres, Jefe de Sistemas",
    resumen: "Juego de roles con IA con el perfil técnico de Mercury S.A.: integraciones, seguridad, disponibilidad, rendimiento y restricciones. Minuta y especificación según ISO/IEC/IEEE 29148.",
    temas: ["Entrevista", "RNF", "ISO/IEC/IEEE 29148"], pagina: "trabajos/A-15.html", estado: "ok" },

  // ---------------- TP integrador
  { id: "TP-1", unidad: 2, clase: 4, fecha: "2026-10-13", tipo: "grupal", categoria: "tp",
    titulo: "Entrega 1 · Enunciado del dominio",
    resumen: "Contexto del Centro de Rehabilitación Kinésica «Equilibrio», entidades, áreas y actores, dependencias funcionales y objetivo del sistema.",
    temas: ["Dominio"], doc: "trabajos/tp-entrega-1.pdf", estado: "ok" },
  { id: "TP-2", unidad: 3, clase: 7, fecha: "2026-11-03", tipo: "grupal", categoria: "tp",
    titulo: "Entrega 2 · Stakeholders, elicitación y cualidades",
    resumen: "Stakeholders con sus motivaciones, matriz de poder e interés, estrategia de elicitación con seis técnicas y cualidades priorizadas según ISO/IEC 25010. Incluye el Episodio 1.",
    temas: ["Stakeholders", "Elicitación", "ISO/IEC 25010"], doc: "trabajos/tp-entrega-2.pdf", estado: "ok" },
  { id: "TP-3", unidad: 5, clase: 14, fecha: "2026-11-17", tipo: "grupal", categoria: "tp",
    titulo: "Entrega 3 · Requerimientos, especificación y validación",
    resumen: "Necesidades, deseos y expectativas; requerimientos del usuario y del sistema; RF y RNF; etapas de la IR; gap semántico y LEL; casos de uso, historias de usuario y LEL del dominio. Incluye el Episodio 2.",
    temas: ["RU / RS", "Casos de uso", "Historias de usuario", "LEL"], doc: "trabajos/tp-entrega-3.pdf", estado: "ok" },
];

const EPISODIOS = [
  { n: 1, titulo: "¿Quién pide qué? Stakeholders, elicitación y cualidades", dur: "5:34",
    audio: "assets/audio/episodio-1.mp3", portada: "assets/img/portada-ep1.jpg", youtube: "", entrega: "TP-2" },
  { n: 2, titulo: "De lo que nos dicen a lo que especificamos", dur: "5:59",
    audio: "assets/audio/episodio-2.mp3", portada: "assets/img/portada-ep2.jpg", youtube: "", entrega: "TP-3" },
];
