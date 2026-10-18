export interface ClassSection {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  relatedQuiz: string;
  estimatedPages: string;
  summary: string;
  concepts: {
    title: string;
    description: string;
    formula?: string;
    details?: string[];
  }[];
  explanation: string;
  practicalUse: string;
  procedures: {
    title: string;
    objective: string;
    formulaOrPrinciple: string;
    steps: {
      step: number;
      action: string;
      justification: string;
    }[];
    resultAndInterpretation: string;
    commonError: string;
  }[];
  keyExample: {
    title: string;
    problem: string;
    givenData: string[];
    resolution: string[];
    result: string;
    interpretation: string;
    warning: string;
  };
  diagramType: 'audio_chain' | 'balanced' | 'power_supply' | 'regulators' | 'relays' | 'valves_transistors' | 'passive_filters' | 'opamps';
  comparativeTable?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  examKeys: {
    point: string;
    tip: string;
    frequentTrap: string;
  }[];
}

export const CLASSES_DATA: ClassSection[] = [
  {
    id: 1,
    slug: 'clase-1-microfonos-conectores',
    title: 'Clase 1 — Micrófonos, Niveles de Señal y Conexiones Balanceadas',
    shortTitle: 'Clase 1: Mics y Conexiones',
    subtitle: 'Cadena electroacústica, transductores, niveles de audio, normas de cableado y cancelación de ruido en modo común',
    relatedQuiz: 'Cuestionario N° 1 (36 preguntas)',
    estimatedPages: '2 páginas A4',
    summary: 'Estudio de la cadena electroacústica, funcionamiento físico de los 5 tipos de micrófonos (carbón, dinámico, cinta, condensador y electret), clasificación estricta de niveles de señal de audio (micrófono, línea +4dBu/-10dBV, potencia), principio físico del audio balanceado con amplificador diferencial, alimentación Phantom (+48V) y normas universales de adaptación de conectores (XLR, TS, TRS, TRRS, RCA).',
    concepts: [
      {
        title: 'Cadena Electroacústica Básica',
        description: 'Conjunto interconectado de dispositivos que capturan, procesan, amplifican y reproducen ondas sonoras. Secuencia obligatoria: Fuente sonora → Micrófono (transductor acústico-eléctrico) → Preamplificador / Mezcladora (eleva mic a línea) → Procesador (línea a línea, ej. ecualizador/compresor) → Amplificador de potencia (línea a potencia) → Parlante/Altavoz (transductor eléctrico-acústico) → Sistema auditivo.',
        details: [
          'Cada etapa está diseñada para recibir un nivel de señal específico y entregar el nivel que la etapa siguiente requiere.',
          'Conectar una etapa en un nivel inadecuado provoca distorsión por saturación (clipping) o una relación señal/ruido pésima.'
        ]
      },
      {
        title: 'Clasificación de Cápsulas de Micrófono',
        description: 'Un micrófono es un transductor que convierte variaciones de presión sonora (acústica) en una tensión analógica proporcional (eléctrica).',
        details: [
          'Micrófono de Carbón: Gránulos de carbón conductor en una carcasa. La presión comprime los granos reduciendo su resistencia eléctrica (R variable en serie con una batería). Requiere corriente continua externa. Obsoleto, ruidoso, pero entrega gran voltaje sin amplificador previo.',
          'Micrófono Dinámico (Bobina Móvil): Principio de inducción electromagnética de Faraday. Una bobina solidaria a la membrana vibra dentro del campo de un imán permanente. No usa fuente de energía externa (pasivo). Es el análogo inverso exacto de un parlante.',
          'Micrófono de Cinta (Ribbon): Familia electrodinámica. Fina cinta corrugada de aluminio suspendida entre los polos de un imán. Muy sensible y suave, pero señal extremadamente débil que requiere transformador elevador interno.',
          'Micrófono de Condensador (Capacitor): Funciona por variación de campo electrostático (V = Q / C). La cápsula la forman una placa fija perforada y un diafragma móvil muy ligero. Requiere polarización DC constante (fuente Phantom +48V o pilas) y preamplificador de ultra-alta impedancia (FET o válvula) dentro del cuerpo del micrófono. NO posee imán ni bobina.',
          'Micrófono Electret: Variante del de condensador donde el material dieléctrico posee polarización permanente integrada de fábrica. NO requiere fuente externa para polarizar la cápsula, pero SÍ necesita alimentación (batería interna o phantom/bias) para alimentar su circuito preamplificador interno de estado sólido (FET).'
        ]
      },
      {
        title: 'Niveles de Tensión de Audio',
        description: 'En audio profesional se definen tres grandes estratos de tensión e impedancia.',
        details: [
          'Nivel Micrófono / Instrumento: Señales muy débiles, del orden de 1 mV en promedio (rango de 0.2 mV a 20 mV). Micrófonos son de baja impedancia (150 - 600 Ω). Los instrumentos pasivos (guitarras, bajos) entregan voltaje similar pero con muy alta impedancia (10 kΩ - 1 MΩ), requiriendo entradas Hi-Z o cajas directas (DI).',
          'Nivel de Línea: Señal estándar entregada por equipos activos (consolas, procesadores, reproductores). Típicamente ~1 V. Existen dos normas: Profesional (+4 dBu = 1.23 V RMS) y Hogareña/Semiprofesional (-10 dBV = 0.316 V RMS). +4 dBu es unas 1230 veces mayor que mic; -10 dBV es unas 316 veces mayor.',
          'Nivel de Potencia: Salida de etapas de amplificación hacia los altavoces. Maneja voltajes elevados (> 10 V, hasta 40 V o más) y alta corriente (amperes) para desplazar mecánicamente la bobina del parlante. NUNCA es balanceada.'
        ]
      },
      {
        title: 'Transmisión Balanceada vs Desbalanceada',
        description: 'La transmisión desbalanceada (2 hilos: Vivo + Malla) es vulnerable a interferencias electromagnéticas. La transmisión balanceada utiliza 3 conductores (Masa, Señal Positiva o "Hot", Señal Invertida 180° o "Cold").',
        formula: 'V_out = (V_{hot} + V_{ruido}) - (V_{cold} + V_{ruido}) = (V - (-V)) + 0 = 2V',
        details: [
          'En el destino, un amplificador diferencial resta ambas señales. El ruido inducido por igual en ambos cables (modo común) se cancela por completo.',
          'La señal útil se duplica (+6 dB de ganancia).',
          'IMPORTANTE PARA EXAMEN: El sistema balanceado rechaza interferencias electromagnéticas (EMI/RFI, transformadores cercanos, cables de red), pero NO atenúa el ruido acústico ambiental captado por la cápsula (ej. murmullos o martillazos).'
        ]
      },
      {
        title: 'Alimentación Phantom (Phantom Power +48V DC)',
        description: 'Tensión continua de +48V enviada desde la consola o preamplificador a través de las mismas dos líneas de audio (pines 2 y 3 respecto al pin 1) mediante dos resistencias apareadas de precisión (6.8 kΩ).',
        details: [
          'Alimenta la cápsula y la electrónica de los micrófonos de condensador y el preamplificador FET de los electrets.',
          'Un micrófono dinámico profesional conectado a phantom NO sufre ningún daño y funciona perfectamente, porque ambos pines (2 y 3) están al mismo potencial de +48V, por lo que la diferencia de tensión entre extremos de la bobina es 0V.',
          '¡PELIGRO!: NUNCA desbalancear un cable si en esa entrada está encendida la phantom power, ya que se pondría en cortocircuito los +48V directamente a masa.'
        ]
      }
    ],
    explanation: 'Imagina la cadena electroacústica como un sistema de transporte con diferentes "anchos de vía": el micrófono genera un hilo diminuto de energía (1 milivolt). Si lo transportas por un cable largo desbalanceado, cualquier motor o transformador cercano le meterá un zumbido mayor que la propia voz. Por eso se balancea: duplicamos la señal invertida en un segundo conductor. Como el cable viaja trenzado y blindado, el ruido electromagnético se cuela por igual en ambos conductores. Al llegar al preamplificador, este resta ambas señales: el ruido menos el ruido da CERO, y la voz se suma duplicándose. Una vez dentro de la consola, el preamplificador eleva la señal de 1 mV a 1 Volt (nivel de línea), donde los ecualizadores y compresores pueden procesarla cómodamente. Finalmente, la potencia la amplifica a decenas de voltios con alta corriente para hacer oscilar mecánicamente los conos de los bafles.',
    practicalUse: 'Interconexión de escenarios, estudios de grabación, broadcast y refuerzo sonoro. Permite tirar mangueras de 100 metros de micrófonos sin zumbidos de 50 Hz ni interferencias de dimmer, alimentar micrófonos de estudio sin depender de pilas internas y conectar equipos hogareños a consolas profesionales sin quemar circuitos.',
    procedures: [
      {
        title: 'Procedimiento 1: Adaptación de Salida Desbalanceada a Entrada Balanceada',
        objective: 'Conectar un instrumento o reproductor desbalanceado (TS/RCA) a una consola con entrada balanceada (TRS/XLR).',
        formulaOrPrinciple: 'Unión de referencia negativa con masa para fijar potencial.',
        steps: [
          {
            step: 1,
            action: 'Verificar rigurosamente que la alimentación Phantom (+48V) esté APAGADA en la entrada de la consola.',
            justification: 'Si la phantom está encendida y unimos el pin negativo a masa, se cortocircuita la fuente de 48V de la consola, pudiendo dañar el preamplificador.'
          },
          {
            step: 2,
            action: 'Conectar el TIP de la salida desbalanceada al TIP (Pin 2 en XLR) de la entrada balanceada.',
            justification: 'Transporta la señal viva / positiva del audio.'
          },
          {
            step: 3,
            action: 'Conectar el SLEEVE de la salida al SLEEVE (Pin 1 en XLR) de la entrada.',
            justification: 'Establece la masa y blindaje común de referencia.'
          },
          {
            step: 4,
            action: 'Puentear el RING (Pin 3 en XLR) con el SLEEVE (Pin 1 en XLR) del lado de la entrada balanceada.',
            justification: 'Al conectar la entrada inversora a masa (0V), el amplificador diferencial resta (V - 0) = V, evitando que el pin inversor quede "al aire" actuando como una antena que capture zumbidos.'
          }
        ],
        resultAndInterpretation: 'El sistema funciona de forma desbalanceada de manera limpia y sin captar ruidos flotantes. Todo el enlace pasa a considerarse desbalanceado.',
        commonError: 'Dejar el Ring suelto en la entrada balanceada (provoca zumbidos de masa por entrada flotante) o puentear con Phantom de 48V activado.'
      },
      {
        title: 'Procedimiento 2: Adaptación de Salida Balanceada a Entrada Desbalanceada',
        objective: 'Conectar una consola o interfaz con salida balanceada a un grabador, amplificador o pedal con entrada desbalanceada.',
        formulaOrPrinciple: 'Diferenciación entre salida electrónicamente balanceada y salida con transformador.',
        steps: [
          {
            step: 1,
            action: 'Conectar TIP con TIP (Pin 2 de XLR al Tip de TS) y SLEEVE con SLEEVE (Pin 1 de XLR a Sleeve de TS).',
            justification: 'Transfiere la señal activa y la masa.'
          },
          {
            step: 2,
            action: 'Evaluar el tipo de circuito de salida del equipo emisor: ¿electrónica activa o transformador de audio?',
            justification: 'Tienen comportamientos eléctricos completamente opuestos.'
          },
          {
            step: 3,
            action: 'Si la salida es Electrónica Activa (la gran mayoría): Dejar el RING (Pin 3 de XLR) LIBRE y aislado.',
            justification: 'El operacional interno que genera la señal negativa trabaja como generador de tensión. Si lo mandamos a masa, cortocircuitamos su salida contra tierra, lo que provoca calentamiento excesivo y posible rotura del circuito integrado.'
          },
          {
            step: 4,
            action: 'Si la salida tiene Transformador de Audio: Es OBLIGATORIO conectar el RING (Pin 3) a TIERRA / MASA.',
            justification: 'El secundario de un transformador es una bobina flotante. Si no se une un extremo a masa, el circuito queda abierto y NO circula ninguna corriente, por lo que no se escuchará absolutamente nada.'
          },
          {
            step: 5,
            action: 'Regla de taller para cuando se desconoce el equipo: Primero probar con el RING SUELTO.',
            justification: 'Si suena normalmente, la salida es activa. Si no sale nada de audio, posee transformador y recién en ese momento se conecta el RING a masa.'
          }
        ],
        resultAndInterpretation: 'Conexión segura que protege los circuitos operacionales activos y permite la continuidad del flujo de señal.',
        commonError: 'Puentear siempre por defecto el Ring/Pin 3 a masa en salidas activas sin comprobar si tienen transformador.'
      }
    ],
    keyExample: {
      title: 'Comparación Numérica de Niveles de Tensión en la Cadena',
      problem: 'Un sonidista recibe una señal de micrófono dinámico de 1 mV (-60 dBu) y debe entregarla a un procesador con nivel de línea profesional (+4 dBu = 1.23 V) y luego a una etapa de potencia que entrega 28.28 V RMS a un bafle de 4 Ω. Calcular las relaciones de amplificación de tensión y potencia.',
      givenData: [
        'V_mic = 1 mV = 0.001 V',
        'V_linea (+4 dBu) = 1.23 V',
        'V_potencia = 28.28 V sobre carga de 4 Ω'
      ],
      resolution: [
        'Paso 1: Ganancia requerida en el preamplificador (de Mic a Línea):',
        'A_pre = V_linea / V_mic = 1.23 V / 0.001 V = 1230 veces.',
        'a_pre(dB) = 20 * log10(1230) ≈ 61.8 dB de ganancia.',
        'Paso 2: Ganancia requerida en el amplificador de potencia (de Línea a Potencia):',
        'A_pot = V_potencia / V_linea = 28.28 V / 1.23 V = 23 veces.',
        'a_pot(dB) = 20 * log10(23) ≈ 27.2 dB.',
        'Paso 3: Potencia entregada al altavoz:',
        'P = (V^2) / R = (28.28^2) / 4 = 800 / 4 = 200 Watts RMS.'
      ],
      result: 'El preamplificador debe ganar 1230 veces (~62 dB); el amplificador de potencia gana 23 veces (~27 dB) para entregar 200 W a 4 Ω.',
      interpretation: 'Muestra por qué el nivel de micrófono es tan susceptible al ruido: una interferencia de apenas 0.5 mV en el cable sería amplificada 1230 veces, generando un ruido ensordecedor de más de 0.6 V en la consola si no fuera por el blindaje y el balanceado.',
      warning: 'No conectar nunca una salida de potencia (>28V) a una entrada de línea (1V) o de micrófono (1mV), pues quemará instantáneamente los componentes de entrada.'
    },
    diagramType: 'balanced',
    comparativeTable: {
      title: 'Cuadro Comparativo: Cápsulas de Micrófono',
      headers: ['Tipo de Micrófono', 'Principio Físico', '¿Lleva Imán?', '¿Lleva Bobina?', '¿Requiere Fuente DC?', 'Nivel de Tensión'],
      rows: [
        ['Carbón', 'Variación de resistencia mecánica', 'NO', 'NO', 'SÍ (en serie con carga)', 'Medio-Alto (sin amp)'],
        ['Dinámico (Bobina móvil)', 'Inducción electromagnética (Faraday)', 'SÍ', 'SÍ', 'NO (100% pasivo)', 'Bajo (~1 mV)'],
        ['Cinta (Ribbon)', 'Electrodinámico (cinta en campo B)', 'SÍ', 'NO (cinta de Al)', 'NO (100% pasivo)', 'Muy bajo (< 1 mV)'],
        ['Condensador (True)', 'Variación electrostática (V = Q/C)', 'NO', 'NO', 'SÍ (+48V Phantom o batería)', 'Medio (requiere pre interno)'],
        ['Electret', 'Electrostático pre-polarizado', 'NO', 'NO', 'SÍ (alimenta su FET interno)', 'Medio (con FET interno)']
      ]
    },
    examKeys: [
      {
        point: 'Pines de conectores XLR',
        tip: 'Pin 1 = Masa / Blindaje; Pin 2 = Positivo (Hot / +); Pin 3 = Negativo (Cold / -). Regla: "1 Tierra, 2 Vivo, 3 Retorno". Ficha Hembra = Entrada; Ficha Macho = Salida.',
        frequentTrap: 'Confundir el pin 2 con masa o creer que el pin 3 lleva alimentación phantom separada. La phantom va por 2 y 3 juntos respecto a 1.'
      },
      {
        point: 'Phantom en micrófono dinámico',
        tip: 'Un micrófono dinámico profesional NO se quema con Phantom de 48V porque los 48V llegan por igual a ambos extremos de su bobina (diferencia de potencial = 0V).',
        frequentTrap: 'Decir que el micrófono dinámico se polariza o se quema la bobina. Solo se daña si el cable está mal soldado o en cortocircuito.'
      },
      {
        point: 'Conector RCA',
        tip: 'El conector RCA es exclusivamente MONOFÓNICO DESBALANCEADO (2 contactos: pin central vivo, corona externa masa).',
        frequentTrap: 'Creer que una ficha RCA puede llevar señal estéreo o balanceada. Para estéreo se necesitan dos cables RCA separados (rojo y blanco).'
      },
      {
        point: 'Micrófono vs Instrumento',
        tip: 'Tienen niveles de tensión similares (~1 mV a decenas de mV), pero se separan porque sus IMPEDANCIAS son completamente distintas (Mic es baja ~200 Ω, Instrumento es alta ~1 MΩ).',
        frequentTrap: 'Responder que se diferencian en la frecuencia o que los instrumentos no tienen cápsula.'
      }
    ]
  },
  {
    id: 2,
    slug: 'clase-2-fuentes-de-alimentacion',
    title: 'Clase 2 — Fuentes de Alimentación Lineales y Conmutadas',
    shortTitle: 'Clase 2: Fuentes de Alimentación',
    subtitle: 'Topologías lineal vs switching, transformador, rectificación de media onda y puente de diodos, filtrado con capacitores electrolíticos y cálculo de ripple',
    relatedQuiz: 'Cuestionario N° 2 (20 preguntas)',
    estimatedPages: '2 páginas A4',
    summary: 'Análisis profundo de la conversión de CA de red (220V/50Hz) en CC estable. Comparativa detallada entre fuentes lineales y conmutadas (switching). Las 4 etapas consecutivas de una fuente lineal: Transformador (reducción y aislamiento galvánico), Rectificación (media onda vs puente de diodos KBL10 / 1N400x), Filtrado capacitivo (almacenamiento de carga, rizado / ripple y polaridad de electrolíticos) y Regulación. Principio y diseño de Fuentes Partidas con transformador de toma central (Center Tap).',
    concepts: [
      {
        title: 'Definición y Misión de la Fuente de Alimentación',
        description: 'Dispositivo electrónico que transforma la tensión alterna de la red eléctrica en una o más tensiones continuas constantes, limpias y estabilizadas para alimentar circuitos electrónicos. Actúa como una "batería artificial".',
        details: [
          'Todos los equipos electrónicos (consolas, computadoras, pedales, amplificadores) requieren corriente continua interna para que sus transistores y circuitos integrados funcionen.',
          'Llamar simplemente "transformador" a una fuente completa es un error técnico grave: el transformador es únicamente la primera etapa de una fuente lineal.'
        ]
      },
      {
        title: 'Comparativa de Familias: Lineal vs Conmutada (Switching)',
        description: 'Dos formas radicalmente distintas de realizar la conversión CA-CC.',
        details: [
          'Fuente Lineal: Funciona a la frecuencia de red (50 Hz). Usa transformador bobinado de chapa de hierro silicio (pesado y voluminoso), rectificador, capacitor grande y regulador que disipa el excedente de tensión en calor. Ventajas: Cero ruido de conmutación (muy silenciosa para audio de alta fidelidad), circuito sencillo y fácil de reparar. Desventaja: Muy pesada, grande y de baja eficiencia energética (30-50%).',
          'Fuente Conmutada: Rectifica la red directamente a 311 V DC sin aislamiento inicial. Un transistor conmuta a muy alta frecuencia (20 kHz a 500 kHz) con modulación PWM alimentando un transformador de núcleo de ferrita diminuto. Ventajas: Extremadamente liviana, compacta, económica y de alta eficiencia (>85%). Desventajas: Genera interferencias de RF y armónicos audibles si no está bien blindada; es un circuito altamente complejo y peligroso de reparar.'
        ]
      },
      {
        title: 'Etapa 1: El Transformador y el Aislamiento Galvánico',
        description: 'Modifica la amplitud de la tensión alterna por inducción magnética según la relación de espiras: Vp / Vs = Np / Ns. Recibe CA eficaz y entrega CA eficaz.',
        details: [
          'Aislamiento Galvánico: El bobinado primario y el secundario NO tienen contacto físico ni eléctrico; están acoplados exclusivamente mediante el campo magnético del núcleo.',
          '¿Por qué NO usar un divisor resistivo conectado directo a los 220V? 1) Es extremadamente peligroso (riesgo inminente de electrocución al tocar la masa del chasis), 2) La tensión de salida varía al conectarle cualquier carga (efecto de carga), 3) Desperdicia enorme potencia en forma de calor inútil.'
        ]
      },
      {
        title: 'Etapa 2: Rectificación (Media Onda vs Puente de Graetz)',
        description: 'Aprovecha la propiedad unidireccional del diodo semiconductor (conduce solo en polarización directa, con el ánodo más positivo que el cátodo).',
        details: [
          'Media Onda (1 diodo): Conduce solo en el semiciclo positivo. Desperdicia por completo el semiciclo negativo. Frecuencia del ripple = 50 Hz (requiere capacitores gigantescos).',
          'Onda Completa (Puente de 4 diodos / KBL10): En el semiciclo positivo conducen 2 diodos en serie con la carga; en el semiciclo negativo conducen los otros 2 diodos, haciendo circular la corriente por la carga exactamente en el mismo sentido. Frecuencia del ripple = 100 Hz (mucho más fácil de filtrar).',
          'Caída de tensión en diodos de silicio: Cada diodo en conducción tiene una caída de ~0.7 V. En un puente rectificador, como la corriente atraviesa siempre dos diodos en serie en cada instante, la caída total es de 2 * 0.7 V = 1.4 V.'
        ]
      },
      {
        title: 'Etapa 3: Filtrado Capacitivo y Rizado (Ripple)',
        description: 'Un capacitor electrolítico en paralelo se carga hasta el valor pico de la onda rectificada y, durante los valles, entrega su energía almacenada a la carga.',
        formula: 'V_{dc} \\approx V_{pico} - 1.4\\text{ V} = V_{rms} \\cdot \\sqrt{2} - 1.4\\text{ V}',
        details: [
          'La tensión continua obtenida después del filtrado no es el valor eficaz, sino que tiende hacia el VALOR PICO.',
          'Ripple (Rizado): Pequeña oscilación residual de voltaje en forma de diente de sierra sobre la continua.',
          'A mayor capacidad (μF) del capacitor, menor será el ripple.',
          'A mayor corriente exigida por la carga, más rápido se descarga el capacitor y mayor será el ripple.',
          'Si se coloca un capacitor de muy poca capacidad, la fuente no filtra adecuadamente el rizado (se cuela un zumbido de 100 Hz en audio).'
        ]
      },
      {
        title: 'Fuente Partida (Dual o Bipolar: +Vcc, 0V, -Vcc)',
        description: 'Fuente capaz de suministrar simultáneamente dos tensiones continuas iguales pero de polaridad opuesta respecto a una masa central (0V). Imprescindible para alimentar amplificadores operacionales y etapas de audio de alta fidelidad sin capacitores de acoplo.',
        details: [
          'Requiere un transformador con TOMA CENTRAL (Center Tap).',
          'La toma central se conecta a la MASA (0V). Los dos extremos del secundario tienen un desfase relativo de 180° entre sí respecto a la toma central.',
          'Utiliza un puente rectificador y DOS capacitores electrolíticos: C1 conectado entre +Vcc y masa (positivo al riel positivo, negativo a masa), y C2 conectado entre masa y -Vcc (¡positivo a masa y negativo al riel negativo!).'
        ]
      }
    ],
    explanation: 'La red eléctrica de tu casa te entrega corriente alterna a 220V que oscila como una montaña rusa 50 veces por segundo, pero tus pedales o chips necesitan un flujo plano de electrones como el de una pila de 9V o 12V. Para lograrlo en una fuente lineal se hace una posta de 4 atletas: Primero, el transformador baja los 220V a un valor seguro (por ejemplo 12V o 22V) y aísla el circuito para que no te quedes pegado a la corriente. Segundo, el puente de 4 diodos endereza la onda: los semiciclos que iban para atrás son forzados a circular en la misma dirección, obteniendo una corriente que palpita a 100 Hz pero siempre hacia adelante. Tercero, el capacitor actúa como un tanque de reserva: cuando la ola de tensión sube se llena, y cuando la ola cae el capacitor se vacía manteniendo el nivel alto, dejando solo un pequeño oleaje llamado ripple. Finalmente, el regulador "recorta" ese oleaje superior y entrega una línea perfectamente horizontal y plana de tensión continua.',
    practicalUse: 'Alimentación de preamplificadores de micrófono valvulares y a transistores, mesas de mezclas de estudio, interfaces de audio USB, pedales de efectos y amplificadores de monitores donde el silencio y la ausencia de zumbidos de conmutación son prioritarios.',
    procedures: [
      {
        title: 'Procedimiento: Cálculo Completo de Tensiones en una Fuente Lineal',
        objective: 'Determinar la tensión continua aproximada antes de la regulación a partir de la tensión del transformador.',
        formulaOrPrinciple: 'V_pico = V_rms * 1.414 ; V_dc = V_pico - V_diodos',
        steps: [
          {
            step: 1,
            action: 'Calcular la tensión RMS del secundario a partir de la relación de transformación Np:Ns.',
            justification: 'V_s(RMS) = V_red(RMS) / (Np/Ns). Por ejemplo, 220V con relación 10:1 entrega 22V RMS.'
          },
          {
            step: 2,
            action: 'Multiplicar la tensión RMS del secundario por raíz de 2 (≈ 1.4142) para hallar el valor pico de la onda senoidal.',
            justification: 'V_pico = 22 V * 1.414 = 31.1 V.'
          },
          {
            step: 3,
            action: 'Restar la caída de tensión en los diodos rectificadores.',
            justification: 'En rectificador de onda completa en puente conducen dos diodos en serie simultáneamente: caída = 2 * 0.7 V = 1.4 V.'
          },
          {
            step: 4,
            action: 'Obtener la tensión continua sobre el capacitor de filtrado.',
            justification: 'V_dc = 31.1 V - 1.4 V = 29.7 V ≈ 29 V de continua con ripple.'
          },
          {
            step: 5,
            action: 'Verificar el margen para el regulador (Dropout).',
            justification: 'Si queremos regular a 12V o 15V, necesitamos que V_dc sea al menos V_out + 3V. Con 29V tenemos margen de sobra para regular hasta 24V.'
          }
        ],
        resultAndInterpretation: 'Una fuente con transformador 10:1 (secundario de 22V RMS) genera aproximadamente 29V de continua en vacío sobre el capacitor de filtrado.',
        commonError: 'Creer que la continua sobre el capacitor es igual a los 22V del transformador (olvidar multiplicar por raíz de 2).'
      }
    ],
    keyExample: {
      title: 'Diagnóstico y Reemplazo de Componentes en Taller (Casos de Examen)',
      problem: 'Un técnico tiene una fuente lineal donde se quemó el puente rectificador KBL10 y el capacitor de filtrado de 4700 μF / 25V. En el taller dispone de diodos 1N4002, 1N4004, 1N4007 y capacitores de 4700 μF / 16V y 4700 μF / 50V. El secundario entrega 12V RMS. Analizar qué componentes puede utilizar.',
      givenData: [
        'Transformador: 12V RMS secundario.',
        'V_pico = 12 * 1.414 = 16.97 V.',
        'V_dc sobre capacitor = 16.97 - 1.4 = 15.57 V.',
        'Puente original: KBL10 (4A, 1000V).'
      ],
      resolution: [
        '1. Análisis del puente rectificador:',
        '- El puente puede reconstruirse con 4 diodos sueltos conectándolos en configuración de puente de Graetz.',
        '- El 1N4002 soporta 100V pico; el 1N4004 soporta 400V; el 1N4007 soporta 1000V. Como la tensión del secundario es de solo 16.97 V pico, cualquiera de los tres soporta sobradamente la tensión inversa.',
        '- Sin embargo, los 1N400x soportan hasta 1 A de corriente promedio. Si la carga consume menos de 1 A, el reemplazo con 4 diodos 1N4004 o 1N4007 es totalmente válido.',
        '2. Análisis del capacitor de filtrado:',
        '- La tensión en el capacitor es de 15.6V DC.',
        '- Si se coloca el capacitor de 16V de aislación, está operando peligrosamente al 97.5% de su límite máximo: una subida de red de 220V a 230V elevará el pico a más de 16.5V y el capacitor reventará. NO se puede usar.',
        '- Si se coloca el capacitor de 50V (mayor tensión nominal con misma capacidad), la fuente funcionará PERFECTAMENTE e incluso más confiable, ya que la tensión nominal es el máximo que soporta el dieléctrico sin dañarse.'
      ],
      result: 'Se puede reemplazar el puente con 4 diodos discretos (ej. 1N4004/1N4007) y el capacitor con el de 4700 μF / 50V.',
      interpretation: 'Regla de oro: En capacitores electrolíticos de reemplazo, NUNCA usar menor voltaje de aislación que el original. Sí se puede usar igual o mayor voltaje de aislación.',
      warning: 'Conectar un capacitor electrolítico con polaridad invertida en el secundario causará su explosión térmica inmediata con emisión de humo y electrólito corrosivo.'
    },
    diagramType: 'power_supply',
    comparativeTable: {
      title: 'Cuadro Comparativo: Fuentes Lineales vs Fuentes Conmutadas',
      headers: ['Parámetro', 'Fuente Lineal', 'Fuente Conmutada (Switching)'],
      rows: [
        ['Frecuencia de trabajo', 'Baja (50 Hz / 60 Hz de la red)', 'Muy alta (20 kHz a 500 kHz)'],
        ['Transformador', 'Grande, pesado, núcleo de hierro silicio', 'Diminuto, ultraliviano, núcleo de ferrita'],
        ['Eficiencia energética', 'Baja (30% - 50%), disipa exceso en calor', 'Alta (80% - 95%), mínima pérdida calórica'],
        ['Ruido en audio (RFI / EMI)', 'Nulo / Mínimo (ideal para preamplificadores)', 'Alto (requiere filtros EMI estrictos)'],
        ['Complejidad del circuito', 'Baja, componentes accesibles y robustos', 'Muy alta, lazo de control PWM complejo'],
        ['Facilidad de reparación', 'Muy fácil de diagnosticar y reparar', 'Difícil y peligrosa (311V DC flotantes)']
      ]
    },
    examKeys: [
      {
        point: 'Diodo 1N4007 - Especificaciones del Datasheet',
        tip: 'Tensión máxima pico inverso (Peak Reverse Voltage) = 1000 V. Tensión eficaz máxima (RMS Reverse Voltage) = 700 V. Corriente promedio rectificada = 1000 mA (1 A).',
        frequentTrap: 'Confundir el valor pico (1000V) con el RMS (700V), o marcar 4007V como tensión máxima por culpa del código del componente.'
      },
      {
        point: 'Puente integrado KBL10 - Conexiones y Corriente',
        tip: 'Corriente promedio rectificada máxima = 4 Amperes. Patas 2 y 3 = Entrada de alterna (~ / secundario). Pata 1 = Salida Positiva (+). Pata 4 = Salida Negativa (-).',
        frequentTrap: 'Invertir la pata 1 y 4 o conectar la alterna en los extremos.'
      },
      {
        point: 'Capacitor de filtrado de reemplazo',
        tip: 'Si vas a la casa de electrónica y te ofrecen un capacitor de la misma capacidad pero MAYOR tensión de aislación, la fuente funcionará igual de bien (VERDADERO). Si tiene MENOR tensión de aislación, NO funcionará igual y se romperá (FALSO).',
        frequentTrap: 'Creer que un capacitor de 50V entrega 50V. La tensión nominal es lo que soporta, no lo que genera.'
      },
      {
        point: '¿Tener puente de diodos implica fuente partida?',
        tip: 'NO (FALSO). Una fuente común simple de una sola rama (+Vcc y GND) también usa un puente de diodos completo. Para ser partida necesita un transformador con toma central.',
        frequentTrap: 'Asociar erróneamente "puente" con "fuente partida".'
      }
    ]
  },
  {
    id: 3,
    slug: 'clase-3-reguladores-de-tension',
    title: 'Clase 3 — Reguladores de Tensión Fijos y Variables',
    shortTitle: 'Clase 3: Reguladores de Tensión',
    subtitle: 'Familia 78xx (positivos) y 79xx (negativos), encapsulados TO-220 vs TO-92, LM317 (positivo variable) y LM337 (negativo variable), fórmulas de diseño y Dropout',
    relatedQuiz: 'Cuestionario N° 3 (12 preguntas de examen)',
    estimatedPages: '2 páginas A4',
    summary: 'Estudio de la etapa final de estabilización en fuentes de alimentación. Análisis del regulador como resistencia variable activa que recorta el ripple. Estudio de reguladores fijos: 78xx (positivos) y 79xx (negativos), distribución de pines y diferencias de corriente entre encapsulados TO-220 (1A) y TO-92 (78Lxx, 100mA). Estudio de reguladores variables: LM317 y LM337, tensión de referencia interna (1.25V), deducción rigurosa de la fórmula de salida, cálculo de resistencias de ajuste y consideración obligatoria de la caída de tensión mínima (Dropout >= 3V).',
    concepts: [
      {
        title: 'Misión del Regulador Lineal y Principio del Dropout',
        description: 'Circuito integrado que actúa como un amortiguador activo de tensión. Mantiene la salida constante frente a cambios en la tensión de entrada (de la red eléctrica) o en la corriente de carga.',
        details: [
          'Elimina el ripple remanente del filtro capacitivo recortando la tensión.',
          'Regla del Dropout (Tensión de caída mínima): Para que un regulador lineal funcione correctamente, la tensión de entrada debe ser como mínimo 3V superior a la tensión de salida regulada deseada: Vin >= Vout + 3V.',
          'Rango típico recomendado de entrada en 78xx: Vin entre (Vout + 3V) y (Vout + 15V). Por ejemplo, un 7812 (12V) requiere entre 15V y 27V a su entrada.',
          'Son reguladores reductores (step-down): NUNCA pueden elevar la tensión. Si ingresan 10V, un LM317 jamás podrá entregar 18V ni 20V.'
        ]
      },
      {
        title: 'Reguladores Fijos: Familia 78xx y 79xx',
        description: 'Entregan una tensión de salida fija e inalterable determinada por los dos últimos dígitos de su código.',
        details: [
          'Familia 78xx (Positivos): 7805 (+5V), 7808 (+8V), 7809 (+9V), 7812 (+12V), 7815 (+15V), 7818 (+18V), 7824 (+24V).',
          'Distribución de patas en TO-220 (78xx): Pin 1 = Entrada (Vin), Pin 2 = Masa (GND), Pin 3 = Salida (Vout). Disipador metálico unido al Pin 2 (Masa).',
          'Familia 79xx (Negativos): 7905 (-5V), 7912 (-12V), 7915 (-15V). Utilizados para la rama negativa de fuentes partidas.',
          '¡DIFERENCIA CRÍTICA EN PINES TO-220 (79xx)!: Pin 1 = Masa (GND), Pin 2 = Entrada (Vin negativa), Pin 3 = Salida (Vout negativa). ¡Los pines 1 y 2 están intercambiados respecto al 78xx! Conectar un 78xx en lugar de un 79xx destruye el integrado de forma instantánea.',
          'Encapsulados: TO-220 entrega hasta 1 A (o 1.5 A con buen disipador). TO-92 (serie 78Lxx, ej. 78L12 o 78L18) entrega como máximo 100 mA.'
        ]
      },
      {
        title: 'Regulador Variable Positivo: LM317',
        description: 'Regulador ajustable de 3 terminales capaz de suministrar más de 1.5 A en un rango de salida de 1.25 V a 37 V.',
        formula: 'V_{out} = 1.25\\text{ V} \\cdot \\left(1 + \\frac{R_1}{R_2}\\right)',
        details: [
          'Pines en encapsulado TO-220: Pin 1 = Ajuste (ADJ), Pin 2 = Salida (Vout), Pin 3 = Entrada (Vin). La lengüeta metálica está unida al Pin 2 (Vout).',
          'Tensión de referencia interna fija: Vref = 1.25 V generada entre la pata de Salida (2) y la pata de Ajuste (1).',
          'Resistencia R2: Conectada entre Pin 2 (Salida) y Pin 1 (Ajuste). El fabricante recomienda 240 Ω (o 220 Ω).',
          'Resistencia R1 (o potenciómetro): Conectada entre Pin 1 (Ajuste) y Masa.',
          'Corriente máxima: 1.5 Amperes.',
          'Tensión máxima admisible de entrada: 40 V.'
        ]
      },
      {
        title: 'Regulador Variable Negativo: LM337',
        description: 'El gemelo complementario del LM317 para regular tensiones negativas variables desde -1.25 V hasta -37 V.',
        formula: '-V_{out} = -1.25\\text{ V} \\cdot \\left(1 + \\frac{R_2}{120\\ \\Omega}\\right)',
        details: [
          'Pines en TO-220: Pin 1 = Ajuste (ADJ), Pin 2 = Entrada (Vin negativa), Pin 3 = Salida (Vout negativa).',
          'El fabricante recomienda una resistencia fija de 120 Ω entre Salida y Ajuste (en lugar de los 240 Ω del LM317).'
        ]
      }
    ],
    explanation: 'Un regulador de tensión fijo como el 7812 es como un grifo termostático prefijado de fábrica: le entra agua caliente y tibia a diferente presión, pero te la saca siempre a 12 grados exactos. Para que funcione, el agua que entra tiene que tener al menos 3 grados más de presión (15V). El LM317, por su parte, es un regulador inteligente: no tiene terminal de masa fijo. En su lugar, tiene una pata de "Ajuste" y un corazón electrónico que se asegura de que entre la salida y el ajuste haya SIEMPRE 1.25 Voltios. Al poner una resistencia R2 fija entre salida y ajuste, obligas a circular una corriente fija. Esa corriente baja por la resistencia R1 hasta masa, creando una caída de tensión controlada. Si cambias el valor de R1 (o mueves un potenciómetro), la tensión de salida cambia como tú quieras.',
    practicalUse: 'Fuentes de alimentación de laboratorio ajustables (1.25V a 30V), fuentes estabilizadas para preamplificadores de consolas (±15V fijas con 7815 y 7915), fuentes de 48V para Phantom Power, pedales analógicos (9V limpios) y circuitos digitales de audio (5V con 7805).',
    procedures: [
      {
        title: 'Procedimiento: Cálculo y Selección de Resistencias para el LM317',
        objective: 'Calcular el valor exacto de la resistencia conectada entre la pata de Ajuste y Masa (R1) para obtener una tensión deseada Vout.',
        formulaOrPrinciple: 'Vout = 1.25 * (1 + R1 / R2)  ==>  R1 = R2 * (Vout / 1.25 - 1)',
        steps: [
          {
            step: 1,
            action: 'Identificar la tensión deseada de salida (Vout) y el valor de la resistencia fija entre salida y ajuste (R2, típicamente 240 Ω o 220 Ω).',
            justification: 'Son los datos base del diseño.'
          },
          {
            step: 2,
            action: 'Dividir la tensión de salida deseada por la referencia interna de 1.25V.',
            justification: 'Vout / 1.25 nos indica cuántas veces la referencia debe multiplicarse.'
          },
          {
            step: 3,
            action: 'Restar 1 al resultado anterior.',
            justification: 'Despeje algebraico de (1 + R1/R2).'
          },
          {
            step: 4,
            action: 'Multiplicar por R2 para despejar R1.',
            justification: 'R1 = R2 * (Vout / 1.25 - 1).'
          },
          {
            step: 5,
            action: 'Verificar la tensión mínima requerida a la entrada: Vin(min) >= Vout + 3V.',
            justification: 'Garantiza que el regulador no caiga en zona de saturación o pérdida de regulación.'
          }
        ],
        resultAndInterpretation: 'Se obtiene el valor óhmico exacto que debe colocarse entre el pin de ajuste y tierra.',
        commonError: 'Confundir las resistencias en la fórmula: llamar R1 a la fija entre salida y ajuste en lugar de llamarla R2, o no sumar los 3V de margen de entrada.'
      }
    ],
    keyExample: {
      title: 'Diseño de Fuente Regulada de 20V con LM317 (Ejemplo de Clase)',
      problem: 'Se desea diseñar una fuente estabilizada de 20V en su salida utilizando un LM317. A) Si la resistencia fija R2 entre salida y ajuste es de 220 Ω, calcular la resistencia R1 entre ajuste y masa. B) ¿Cuál es la tensión mínima que debe ingresar al regulador? C) Indicar la relación de transformación adecuada partiendo de 220V de red.',
      givenData: [
        'V_out deseado = 20 V',
        'R2 (fija entre pata 2 y 1) = 220 Ω',
        'V_ref interna = 1.25 V',
        'V_red = 220 V CA'
      ],
      resolution: [
        'Parte A: Cálculo de R1:',
        '20 V = 1.25 * (1 + R1 / 220)',
        '20 / 1.25 = 1 + R1 / 220  ==>  16 = 1 + R1 / 220',
        '16 - 1 = R1 / 220  ==>  15 = R1 / 220',
        'R1 = 15 * 220 = 3300 Ω (3.3 kΩ).',
        'Parte B: Tensión mínima a la entrada Vin(min):',
        'Vin(min) = Vout + 3V = 20 V + 3 V = 23 V continuos mínimos.',
        'Parte C: Relación de transformador requerida:',
        'Un transformador con relación 10:1 entrega en el secundario: 220 / 10 = 22 V RMS.',
        'La tensión continua rectificada y filtrada será: V_dc ≈ 22 V * 1.414 = 31.1 V (o ~29.7V restando 1.4V de diodos).',
        'Como 29.7 V > 23 V, existe un margen holgado superior a los 3V requeridos (más de 9V de margen), garantizando regulación estable incluso si la red baja a 200V.'
      ],
      result: 'R1 = 3300 Ω (3.3 kΩ); Vin mínima = 23 V; Transformador recomendado = 10:1 (22V secundario).',
      interpretation: 'El diseño garantiza regulación impecable sin rizado incluso ante caídas de tensión de red eléctrica.',
      warning: 'Si la entrada cayera por debajo de 23V, la salida dejará de ser 20V y comenzará a caer copiando el rizado de entrada.'
    },
    diagramType: 'regulators',
    comparativeTable: {
      title: 'Cuadro Comparativo: Reguladores Fijos y Variables Clave',
      headers: ['Código', 'Tipo de Tensión', 'Rango / Valor', 'Corriente Máx.', 'Encapsulado', 'Pin 1', 'Pin 2', 'Pin 3'],
      rows: [
        ['7812', 'Positiva fija', '+12 V', '1.0 A', 'TO-220', 'Input (Entrada)', 'GND (Masa)', 'Output (Salida)'],
        ['78L18', 'Positiva fija', '+18 V', '100 mA (0.1A)', 'TO-92', 'Output (Salida)', 'GND (Masa)', 'Input (Entrada)'],
        ['7912', 'Negativa fija', '-12 V', '1.0 A', 'TO-220', 'GND (Masa)', 'Input (Entrada)', 'Output (Salida)'],
        ['LM317', 'Positiva variable', '1.25 V a 37 V', '1.5 A', 'TO-220', 'ADJ (Ajuste)', 'Output (Salida)', 'Input (Entrada)'],
        ['LM337', 'Negativa variable', '-1.25 V a -37 V', '1.5 A', 'TO-220', 'ADJ (Ajuste)', 'Input (Entrada)', 'Output (Salida)']
      ]
    },
    examKeys: [
      {
        point: 'Pines del 79xx vs 78xx (¡Trampa clásica!)',
        tip: 'En el 78xx el pin 1 es Entrada y el 2 es Masa. En el 79xx el pin 1 es MASA y el pin 2 es ENTRADA. ¡Están invertidos!',
        frequentTrap: 'Conectar la entrada negativa al pin 1 del 7912. Se quema al instante.'
      },
      {
        point: 'Encapsulado TO-92 (78Lxx) vs TO-220 (78xx)',
        tip: 'La "L" significa Low power (baja corriente): entrega solo 100 mA frente a 1 A del TO-220. Su tensión viene dada por los dígitos finales (78L18 entrega 18V, 78L12 entrega 12V).',
        frequentTrap: 'Creer que el 78L18 entrega 180mA o que se ajusta con resistencias.'
      },
      {
        point: 'Pestaña metálica del LM317',
        tip: 'La pestaña trasera de montaje del LM317 NO está conectada a masa: está conectada a la Pata 2 (SALIDA). Si se monta al chasis metálico sin aislante de mica, cortocircuita la salida a masa.',
        frequentTrap: 'Creer que en todos los integrados TO-220 la chapa metálica es masa (en el 78xx sí es masa, en el LM317 es la salida).'
      },
      {
        point: '¿El LM317 puede elevar tensión?',
        tip: 'NO. Es un regulador exclusivamente reductor. Aunque pongas una R1 de 27.000 Ω que por cálculo matemático dé 140V, la salida nunca puede superar a la entrada.',
        frequentTrap: 'Calcular matemáticamente la fórmula sin verificar si Vin es mayor a Vout.'
      }
    ]
  },
  {
    id: 4,
    slug: 'clase-4-conceptos-de-amplificacion',
    title: 'Clase 4 — Conceptos de Amplificación, Relé y Decibeles',
    shortTitle: 'Clase 4: Amplificación y dB',
    subtitle: 'Naturaleza de la amplificación, por qué el relé y el transformador NO son amplificadores, cálculo de ganancia de tensión en veces (A) y en decibeles (a)',
    relatedQuiz: 'Cuestionario N° 4 (14 preguntas completas)',
    estimatedPages: '1.5 páginas A4',
    summary: 'Fundamentos físicos de la amplificación de señales analógicas. Distinción conceptual estricta: por qué un relé electromagnético NO es un amplificador (mecanismo binario on/off con inercia incapaz de reproducir senoidales de 20 Hz a 20 kHz) y por qué un transformador NO es un amplificador (conserva la potencia pasivamente, aumentando tensión a costa de reducir corriente). Definición matemática de ganancia lineal (A = Vout / Vin), ganancia logarítmica en decibeles (a = 20 log |A|) y despeje inverso (A = 10^(a/20)). Casos clave de duplicación (+6 dB), atenuación a la mitad (-6 dB), y potencias de diez.',
    concepts: [
      {
        title: 'Definición de Amplificación',
        description: 'Proceso activo mediante el cual se genera una copia de una señal de entrada con mayor (o menor) escala de tensión y corriente en su salida, extrayendo energía de una fuente externa de corriente continua.',
        details: [
          'La señal de salida no surge "mágicamente" de la señal de entrada, sino que es modelada a partir de la energía entregada por la fuente de alimentación.',
          'La corriente de salida dependerá de la carga conectada y no de la corriente disponible en la entrada.'
        ]
      },
      {
        title: 'Por qué el Relé (Relay) NO es un Amplificador',
        description: 'Componente electromagnético consistente en una bobina (electroimán) y un juego de contactos mecánicos (interruptor).',
        details: [
          'Ventaja del relé: Una pequeña potencia en la bobina (ej. 12V * 25mA = 300 mW) puede conmutar una carga muy grande (ej. 220V * 1A = 220 W). Divide el circuito en etapa de control y etapa de potencia.',
          '¿Por qué NO amplifica audio?: 1) Es un interruptor de solo DOS estados discretos (Abierto o Cerrado); no tiene valores intermedios. 2) Su principio de movimiento es mecánico (inercia física de la armadura metálica); no puede conmutar miles de veces por segundo como exige el audio (20 Hz a 20.000 Hz). 3) Es incapaz de "copiar" la forma continua de una onda senoidal.'
        ]
      },
      {
        title: 'Por qué el Transformador NO es un Amplificador',
        description: 'Dispositivo pasivo que transfiere energía entre dos circuitos mediante inducción magnética.',
        details: [
          'En un transformador ideal se cumple estrictamente la conservación de la potencia: P_entrada = P_salida (V_p * I_p = V_s * I_s).',
          'Si un transformador con relación 1:10.000 eleva una señal de micrófono de 1 mV a 10 V (multiplica la tensión 10.000 veces), la corriente disponible disminuye exactamente 10.000 veces.',
          'Para que exista amplificación real debe haber aumento de POTENCIA (elevar tensión manteniendo o aumentando la capacidad de corriente mediante una fuente de energía externa).'
        ]
      },
      {
        title: 'Fórmulas de Ganancia de Tensión: Veces (A) y Decibeles (a)',
        description: 'Medida cuantitativa de la magnitud con la que un circuito amplifica o atenúa una señal.',
        formula: 'A = \\frac{V_{salida}}{V_{entrada}} \\quad \\Longleftrightarrow \\quad a = 20 \\cdot \\log_{10}(|A|)',
        details: [
          'Ganancia lineal (A): Relación adimensional de voltajes. Si A > 1 hay amplificación; si A < 1 hay atenuación.',
          'Ganancia en decibeles (a): Escala logarítmica que comprime amplios rangos dinámicos y modela la respuesta del oído humano. "20" se debe a que se evalúan amplitudes de tensión (en potencia se usa 10 log P).',
          'Uso de valor absoluto |A|: Evita el error matemático de aplicar logaritmo a números negativos (en amplificadores inversores con desfase de 180°).',
          'Conversión inversa: A = 10^(a / 20).'
        ]
      }
    ],
    explanation: 'Piensa en un amplificador como en la dirección asistida de un auto: tú con un solo dedo mueves el volante (señal de entrada débil), pero la fuerza bruta que tuerce las ruedas gigantescas sobre el asfalto no proviene de tu dedo, sino del motor hidráulico del auto (fuente externa de energía). Tu dedo solo le indica al mecanismo CÓMO debe moverse la rueda. Si usaras un relé, solo tendrías dos opciones: o el volante está trabado a la izquierda o a la derecha, sin puntos intermedios. Y si usaras una palanca (un transformador), podrías mover más peso pero tendrías que desplazar el brazo diez veces más lejos. Un amplificador real toma la forma exacta de la señal de tu micrófono y la reproduce con toda la potencia de la red eléctrica.',
    practicalUse: 'Cálculo de niveles de ganancia en consolas, escalamiento de impedancias y sensibilidad en micrófonos e instrumentos, ajuste de faders y estructuración de ganancia (Gain Staging) en grabación profesional.',
    procedures: [
      {
        title: 'Procedimiento 1: Cálculo de Ganancia a partir de Tensiones Medidas',
        objective: 'Determinar la ganancia en veces (A) y en decibeles (a) conociendo Vin y Vout.',
        formulaOrPrinciple: 'A = Vout / Vin ; a = 20 * log10(|A|)',
        steps: [
          {
            step: 1,
            action: 'Homogeneizar las unidades de tensión (pasar todo a Volts o todo a milivolts).',
            justification: 'Evita errores de factor 1000. Ej: Vin = 2 mV = 0.002 V; Vout = 4 V.'
          },
          {
            step: 2,
            action: 'Dividir Vout entre Vin para obtener la ganancia en veces A.',
            justification: 'A = 4 V / 0.002 V = 2000 veces.'
          },
          {
            step: 3,
            action: 'Calcular el logaritmo en base 10 del valor absoluto de A.',
            justification: 'log10(2000) ≈ 3.301.'
          },
          {
            step: 4,
            action: 'Multiplicar por 20 para obtener los decibeles.',
            justification: 'a = 20 * 3.301 ≈ 66 dB.'
          }
        ],
        resultAndInterpretation: 'Un amplificador que eleva 2 mV a 4 V tiene una ganancia de 2000 veces (+66 dB).',
        commonError: 'Dividir directamente 4 / 2 sin convertir los milivolts (daría A = 2 en lugar de 2000).'
      },
      {
        title: 'Procedimiento 2: Cálculo de Tensión de Salida a partir de Decibeles',
        objective: 'Hallar Vout conociendo Vin y la ganancia a en dB.',
        formulaOrPrinciple: 'A = 10^(a/20) ; Vout = A * Vin',
        steps: [
          {
            step: 1,
            action: 'Dividir los dB entre 20: (a / 20).',
            justification: 'Despeje del exponente logarítmico.'
          },
          {
            step: 2,
            action: 'Elevar 10 a esa potencia: A = 10^(a/20).',
            justification: 'Función inversa (antilogaritmo base 10).'
          },
          {
            step: 3,
            action: 'Multiplicar la ganancia lineal A obtenida por la tensión de entrada Vin.',
            justification: 'Vout = A * Vin. ¡NUNCA multiplicar directamente los dB por Vin!'
          }
        ],
        resultAndInterpretation: 'Por ejemplo, si a = 10 dB y Vin = 1 mV: A = 10^(10/20) = 10^0.5 ≈ 3.16. Vout = 3.16 * 1 mV = 3.16 mV.',
        commonError: '¡ERROR GRAVE EN EXAMEN!: Multiplicar a(dB) * Vin (ej. calcular 10 * 1mV = 10 mV). Los decibeles jamás se multiplican por voltios.'
      }
    ],
    keyExample: {
      title: 'Atenuación de Señal en Decibeles Negativos (Caso de Examen)',
      problem: 'Un circuito pasivo recibe 4 V a la entrada y entrega 2 V a la salida. A) Calcular su ganancia A en veces. B) Calcular su ganancia a en decibeles. C) Si se encadenan dos etapas iguales, ¿cuál es la ganancia total?',
      givenData: [
        'V_entrada = 4 V',
        'V_salida = 2 V'
      ],
      resolution: [
        'Paso 1: Ganancia en veces: A = V_salida / V_entrada = 2 V / 4 V = 0.5 veces (reduce a la mitad).',
        'Paso 2: Ganancia en dB: a = 20 * log10(0.5) = 20 * (-0.30103) = -6.02 dB ≈ -6 dB.',
        'Interpretación: El signo negativo indica que el circuito ATENÚA (reduce el nivel en 6 dB).',
        'Paso 3: Dos etapas en cascada:',
        '- Ganancia lineal: A_total = A1 * A2 = 0.5 * 0.5 = 0.25 veces (reduce a la cuarta parte).',
        '- Ganancia en dB: a_total = a1 + a2 = (-6 dB) + (-6 dB) = -12 dB.',
        'Verificación: 20 * log10(0.25) = 20 * (-0.602) = -12 dB.'
      ],
      result: 'A = 0.5 veces; a = -6 dB; En dos etapas: A_total = 0.25 veces y a_total = -12 dB.',
      interpretation: 'Regla fundamental: Las ganancias en veces se MULTIPLICAN; las ganancias en decibeles se SUMAN.',
      warning: 'No confundir: -6 dB es reducir la mitad de tensión. Duplicar la tensión es +6 dB.'
    },
    diagramType: 'relays',
    comparativeTable: {
      title: 'Tabla de Equivalencias Rápidas para Memorizar (Examen)',
      headers: ['Relación de Tensión', 'Ganancia en Veces (A)', 'Ganancia en Decibeles (a)', 'Acción'],
      rows: [
        ['Salida = 1000 × Entrada', '1000', '+60 dB', 'Amplificación fuerte'],
        ['Salida = 100 × Entrada', '100', '+40 dB', 'Amplificación media'],
        ['Salida = 10 × Entrada', '10', '+20 dB', 'Multiplica por 10'],
        ['Salida = 4 × Entrada', '4', '+12 dB', 'Doble del doble (+6 + 6)'],
        ['Salida = 2 × Entrada', '2', '+6 dB', 'Duplica la tensión'],
        ['Salida = Entrada', '1', '0 dB', 'Sin cambio (seguidor/buffer)'],
        ['Salida = 0.5 × Entrada', '0.5 (1/2)', '-6 dB', 'Reduce a la mitad'],
        ['Salida = 0.25 × Entrada', '0.25 (1/4)', '-12 dB', 'Reduce a la cuarta parte'],
        ['Salida = 0.1 × Entrada', '0.1 (1/10)', '-20 dB', 'Divide por 10']
      ]
    },
    examKeys: [
      {
        point: '¿Por qué el relé no amplifica audio?',
        tip: 'Porque solo tiene 2 estados mecánicos (abierto/cerrado) y por inercia física no puede seguir frecuencias de 20 Hz a 20 kHz.',
        frequentTrap: 'Decir que no amplifica porque consume mucha potencia o porque funciona con corriente continua.'
      },
      {
        point: '¿Por qué el transformador no amplifica?',
        tip: 'Porque no aumenta la POTENCIA: al elevar la tensión disminuye la corriente en igual proporción. Es un elemento pasivo.',
        frequentTrap: 'Creer que elevar la tensión significa haber amplificado.'
      },
      {
        point: '¡El error más grave de toda la materia!',
        tip: 'NUNCA calcular V_salida = a(dB) * V_entrada. La fórmula correcta es SIEMPRE V_salida = A(veces) * V_entrada.',
        frequentTrap: 'Si te dan 20 dB y 1V, multiplicar 20 * 1 = 20V (INCORRECTO). Lo correcto es: 20 dB equivale a A = 10, luego V_salida = 10 * 1V = 10V.'
      }
    ]
  },
  {
    id: 5,
    slug: 'clase-5-historia-amplificacion-valvulas-transistores',
    title: 'Clase 5 — Historia de la Amplificación: Válvulas, Transistores e Impedancia',
    shortTitle: 'Clase 5: Válvulas, Transistores y Bafles',
    subtitle: 'Válvula diodo (Fleming), triodo (De Forest), analogía transistor-válvula, códigos y encapsulados (TO-3, 2N3055, TIP142) y adaptación de impedancia de altavoces',
    relatedQuiz: 'Cuestionario N° 5 (28 preguntas completas)',
    estimatedPages: '2 páginas A4',
    summary: 'Evolución histórica de los dispositivos activos. Válvula diodo (Fleming 1904) y efecto Edison; Válvula triodo (Lee De Forest 1906), principio de la grilla de control como canilla y polarización. El transistor de estado sólido (1947): ventajas, analogías con la válvula (Grilla=Base, Placa=Colector, Cátodo=Emisor), familias (TBJ, JFET, MOSFET) y encapsulados emblemáticos (TO-3 con colector al chasis, Darlington TIP142). Estudio crítico de la conexión de altavoces (4Ω, 8Ω, 16Ω): regla de impedancia mínima en transistores, modo Bridge (duplica requisito mínimo) y la estricta adaptación por transformador de salida en válvulas (peligro letal de desconectar el parlante).',
    concepts: [
      {
        title: 'Válvula Diodo (Fleming, 1904) y Efecto Edison',
        description: 'Tubo de vidrio al vacío con dos electrodos principales y un filamento calefactor.',
        details: [
          'Efecto Edison: Un filamento metálico al rojo vivo emite espontáneamente una nube de electrones libres en el vacío (emisión termoiónica).',
          'Conducción: Como los electrones tienen carga negativa y solo ellos pueden moverse en el vacío, si la Placa (Ánodo) se conecta a potencial positivo, atrae a los electrones y circula corriente de placa a filamento (polarización directa).',
          'Bloqueo: Si la placa se pone negativa, repele los electrones y la corriente es CERO (polarización inversa). Funciona como rectificador.',
          '¿Un diodo puede amplificar?: NO. Solo rectifica o conduce en un único sentido.'
        ]
      },
      {
        title: 'Válvula Triodo (Audión - Lee De Forest, 1906)',
        description: 'Agrega un tercer electrodo entre el cátodo y la placa: la Grilla o Rejilla de control (Grid).',
        details: [
          'Principio de la "Canilla": La placa está siempre a altísima tensión positiva (+100V a +400V) y el cátodo a masa. La grilla se polariza con voltajes negativos pequeños (entre 0V y -V_corte).',
          'Grilla en 0V: No opone resistencia; los electrones pasan libremente como en un diodo en directa (corriente máxima de placa).',
          'Grilla en -0.5V: El campo eléctrico negativo de la grilla frena parcialmente el paso de electrones. La corriente de placa disminuye.',
          'Grilla en -1V (corte/saturación): El campo negativo de la grilla anula por completo la atracción de la placa; ningún electrón cruza la rejilla y la corriente se corta a cero.',
          'Amplificación: Una variación minúscula de 1V en la grilla controla enormes corrientes de 400V en la placa.',
          'Circuito de polarización: Imprescindible para que la señal alterna de audio (que tiene semiciclos positivos y negativos) oscile dentro de la zona lineal del triodo sin recortarse.'
        ]
      },
      {
        title: 'El Transistor de Estado Sólido (1947)',
        description: 'Dispositivo semiconductor cristalino (silicio o germanio) que reemplazó a las válvulas de vacío.',
        details: [
          'Ventajas sobre la válvula: 1) Todo en estado sólido sobre silicio (sin ampolla de vidrio frágil). 2) No requiere calentar ningún filamento (no desperdicia energía en calor para arrancar). 3) Menor distorsión en señal lineal. 4) Fabricación microscópica integrada.',
          'Analogía funcional TBJ <--> Válvula Triodo:',
          '• Base (TBJ) <==> Grilla (Válvula) [Entrada de control]',
          '• Colector (TBJ) <==> Placa / Ánodo (Válvula) [Salida de alta tensión]',
          '• Emisor (TBJ) <==> Cátodo / Filamento (Válvula) [Emisor de portadores]'
        ]
      },
      {
        title: 'Clasificación de Transistores y Encapsulados Clave de Examen',
        description: 'Familias de transistores y sus códigos industriales más evaluados.',
        details: [
          'TBJ (Transistor Bipolar de Juntura): NPN (flecha emisor hacia afuera) y PNP (flecha emisor hacia adentro). Ejemplos: BC548 (NPN), BC560 (PNP).',
          'JFET (Junction FET): Canal N (flecha hacia adentro en la puerta) y Canal P. Ejemplo: BF245 (JFET Canal N).',
          'MOSFET: Con compuerta aislada. Canal N y Canal P. Ejemplo: IRF9530 (MOSFET Canal P).',
          'Transistor 2N3055: Clásico TBJ NPN de gran potencia para amplificadores y fuentes. Encapsulado metálico TO-3 (forma ovalada con 2 orejas). Solo tiene 2 patas abajo: Base y Emisor. ¡El propio cuerpo/chasis metálico es el Colector!',
          'Transistor TIP142: Transistor Darlington NPN (dos transistores integrados en cascada para obtener ultra alta ganancia de corriente). Encapsulado TO-247/TO-218: Pata 1 = Base, Pata 2 = Colector, Pata 3 = Emisor.'
        ]
      },
      {
        title: 'Adaptación de Impedancia de Altavoces (Transistores vs Válvulas)',
        description: 'Impedancias nominales comerciales de bafles: 4 Ω, 8 Ω, 16 Ω. El comportamiento ante cargas no coincidentes es completamente diferente según la tecnología.',
        details: [
          'AMPLIFICADORES A TRANSISTORES:',
          '• La impedancia indicada (ej. "4 Ω MIN LOAD") es un MÍNIMO recomendado.',
          '• Conectar impedancia MAYOR (ej. 8 Ω en salida de 4 Ω): El equipo entrega MENOR potencia pero funciona más HOLGADO y frío. NO se daña.',
          '• Conectar impedancia MENOR a la mínima (ej. 2 Ω en salida de 8 Ω): La carga exige un exceso destructivo de corriente (I = V/R), elevando la temperatura hasta quemar los transistores de salida.',
          '• MODO BRIDGE (PUENTE): Suma los dos canales estéreo en contrafase. La impedancia mínima REQUERIDA SE DUPLICA (ej. de 4 Ω estéreo pasa a exigir 8 Ω mínimo en Bridge).',
          'AMPLIFICADORES A VÁLVULAS:',
          '• Las válvulas tienen muy alta impedancia interna (ej. 5.000 Ω) y baja corriente. Requieren obligatoriamente un TRANSFORMADOR DE SALIDA para acoplar a los 8 Ω del parlante.',
          '• En válvulas la impedancia DEBE RESPETARSE ESTRICTAMENTE (por eso traen salidas separadas de 4, 8 y 16 Ω).',
          '• Si conectas 4 Ω en salida de 8 Ω: La impedancia reflejada al primario cae a 2500 Ω, sobreexigiendo en corriente a la válvula de salida.',
          '• ¡PELIGRO LETAL!: Si DESCONECTAS EL PARLANTE (impedancia infinita ∞): La impedancia reflejada en el primario se dispara a cientos de miles de ohms (ej. 500.000 Ω). La energía de la bobina genera picos de altísima tensión por autoinducción (flyback) que queman el transformador de salida y las válvulas.'
        ]
      }
    ],
    explanation: 'Las válvulas fueron las reinas del siglo XX: lámparas de vidrio al vacío donde un filamento al rojo vivo lanzaba electrones hacia una placa metálica positiva. La genialidad de Lee De Forest fue poner una rejilla en el medio: como una persiana que con apenas un voltio negativo frena o deja pasar el torrente de cientos de voltios. Pero las válvulas eran frágiles, calentaban como estufas y requerían transformadores pesadísimos para mover los parlantes. En 1947 nació el transistor: un grano de silicio sólido que hace exactamente lo mismo (la Base hace de grilla, el Colector de placa y el Emisor de cátodo), sin calentar filamentos y pudiendo miniaturizarse a miles de millones por chip. En cuanto a los parlantes: un amplificador de transistores es como un atleta que te pide "no me cargues con una mochila más pesada que 4 kilos" (si le pones 8 kilos camina más despacio pero no se muere; si le pones 2 kilos se revienta el corazón). En cambio, el amplificador valvular es como una bicicleta de pista con cambios fijos: si le quitas la cadena pedaleando a fondo (desconectar el bafle), el plato vuela por el aire destrozando los engranajes por picos de tensión inductiva.',
    practicalUse: 'Mantenimiento de amplificadores de guitarra y bajo valvulares (Marshall, Fender, Vox), etapas de potencia para sonido en vivo (Crown, QSC, Peavey), configuración de cajas en serie/paralelo y conexionado seguro en modo Bridge.',
    procedures: [
      {
        title: 'Procedimiento: Verificación de Carga y Conexión de Altavoces',
        objective: 'Conectar cajas acústicas de forma segura en amplificadores de transistores y de válvulas sin riesgo de rotura.',
        formulaOrPrinciple: 'Transistores: Z_parlante >= Z_minima ; Válvulas: Z_parlante == Z_salida_elegida',
        steps: [
          {
            step: 1,
            action: 'Verificar si el amplificador es de salida a transistores o a válvulas.',
            justification: 'Determina si la regla de impedancia es un límite inferior o una adaptación estricta con transformador.'
          },
          {
            step: 2,
            action: 'Si es a transistores: Leer la impedancia mínima en el panel (ej. 4 Ω).',
            justification: 'Si se opera en modo Bridge, duplicar el valor (exigirá 8 Ω mínimo).'
          },
          {
            step: 3,
            action: 'Calcular la impedancia total del bafle o conjunto de bafles (serie: Zt = Z1 + Z2; paralelo: 1/Zt = 1/Z1 + 1/Z2).',
            justification: 'Dos parlantes de 8 Ω en paralelo dan 4 Ω. Dos de 4 Ω en serie dan 8 Ω.'
          },
          {
            step: 4,
            action: 'Si es a válvulas: Conectar el bafle en la bornera o jack de impedancia idéntica (ej. bafle de 8 Ω en jack de 8 Ω).',
            justification: 'Adapta los 5 kΩ de la placa a través del transformador sin desbalancear la impedancia reflejada.'
          },
          {
            step: 5,
            action: 'NUNCA encender ni desconectar el cable de altavoz con el amplificador valvular encendido.',
            justification: 'La impedancia infinita genera picos de alta tensión por autoinducción que destruyen el bobinado primario del transformador.'
          }
        ],
        resultAndInterpretation: 'Operación confiable con máxima transferencia de potencia sin sobrecalentamiento de transistores ni arco inductivo en válvulas.',
        commonError: 'Desconectar el bafle de un amplificador valvular mientras está encendido para "probar si sale sonido".'
      }
    ],
    keyExample: {
      title: 'Cálculo de Corriente y Potencia en Amplificador Peavey 500W (Diapositivas 33-35)',
      problem: 'Un amplificador de transistores entrega 44.7 V RMS y especifica una impedancia mínima de 4 Ω. A) Calcular la potencia a 4 Ω. B) ¿Qué ocurre si se conecta un bafle de 8 Ω? C) ¿Qué ocurre si se conecta un bafle de 2 Ω?',
      givenData: [
        'V_max = 44.7 V RMS',
        'Z_min recomendada = 4 Ω'
      ],
      resolution: [
        'Caso A: Con bafle de 4 Ω (carga nominal recomendada):',
        'I = V / R = 44.7 V / 4 Ω = 11.175 A ≈ 11.2 Amperes.',
        'P = V * I = 44.7 V * 11.175 A ≈ 500 Watts RMS.',
        'Resultado: El amplificador rinde al 100% de su potencia especificada.',
        'Caso B: Con bafle de 8 Ω (mayor que la mínima):',
        'I = 44.7 V / 8 Ω = 5.59 A.',
        'P = 44.7 V * 5.59 A ≈ 250 Watts RMS.',
        'Resultado: Entrega la mitad de potencia (~250 W). El equipo funciona más holgado y frío; no sufre ningún daño.',
        'Caso C: Con bafle de 2 Ω (menor que la mínima permitida):',
        'I = 44.7 V / 2 Ω = 22.35 A.',
        'P_teórica = 44.7 V * 22.35 A = 999 Watts.',
        'Resultado: El parlante "pide" el doble de corriente de la que el circuito fue diseñado para entregar. Los transistores elevan su temperatura abruptamente y se destruyen térmicamente en pocos minutos.'
      ],
      result: 'A 4 Ω: 500W (óptimo). A 8 Ω: 250W (seguro, holgado). A 2 Ω: 1000W exigidos (destrucción por sobrecorriente).',
      interpretation: 'En transistores la impedancia mínima es la barrera que limita la corriente máxima del equipo.',
      warning: 'No confundir: en transistores subir la impedancia no quema el equipo; bajarla sí lo quema. En válvulas cambiarla en cualquier sentido es perjudicial y desconectarlo lo destruye.'
    },
    diagramType: 'valves_transistors',
    comparativeTable: {
      title: 'Cuadro Comparativo: Transistores vs Válvulas ante la Impedancia de Carga',
      headers: ['Situación de Carga', 'Amplificador a Transistores', 'Amplificador a Válvulas'],
      rows: [
        ['Carga recomendada (ej. 8 Ω)', 'Máxima potencia nominal segura', 'Operación óptima y punto de trabajo exacto'],
        ['Carga mayor (ej. 16 Ω)', 'Entrega menos potencia, trabaja más frío', 'Aumenta impedancia reflejada en primario (riesgoso)'],
        ['Carga menor (ej. 4 Ω)', 'Exceso de corriente; sobrecalienta y quema transistores', 'Disminuye impedancia reflejada; sobreexige en corriente a la válvula'],
        ['Desconectar parlante (Z = ∞)', 'No pasa nada (corriente cero, totalmente seguro)', '¡PELIGRO EXTREMO! Picos de alta tensión por autoinducción queman el transformador'],
        ['Modo Bridge (Puente)', 'La impedancia mínima se DUPLICA', 'Rara vez aplicable (depende del diseño de transformadores)']
      ]
    },
    examKeys: [
      {
        point: 'Transistor 2N3055 - Encapsulado TO-3',
        tip: 'El 2N3055 es un TBJ NPN con encapsulado metálico TO-3. Solo tiene dos pines (Base y Emisor). La pata faltante es el COLECTOR, que es la propia carcasa metálica exterior.',
        frequentTrap: 'Decir que el cuerpo metálico es la Base o el Emisor.'
      },
      {
        point: 'Transistor Darlington TIP142',
        tip: 'Pata 1 = Base; Pata 2 = Colector; Pata 3 = Emisor. Regla mnemotécnica: B-C-E de izquierda a derecha mirando de frente con la chapa hacia atrás.',
        frequentTrap: 'Confundir el orden con E-C-B o C-B-E.'
      },
      {
        point: 'Modo Bridge (Puente) en amplificadores estéreo',
        tip: 'Al conmutar a modo Bridge, el requisito de impedancia mínima se DUPLICA (ej. de 4 Ω pasa a 8 Ω).',
        frequentTrap: 'Creer que la impedancia mínima se reduce a la mitad.'
      },
      {
        point: '¿Por qué se quema un amplificador valvular sin parlante?',
        tip: 'Porque al desconectar la carga (impedancia infinita), la impedancia reflejada al primario del transformador de salida crece a cientos de miles de ohms, generando picos de altísima tensión por autoinducción que perforan y queman el bobinado.',
        frequentTrap: 'Decir que las válvulas se enfrían rápido o que se queda sin corriente.'
      }
    ]
  },
  {
    id: 6,
    slug: 'clase-6-filtros-analogicos-pasivos-bode',
    title: 'Clase 6 — Filtros Analógicos Pasivos y Diagramas de Bode',
    shortTitle: 'Clase 6: Filtros Pasivos y Bode',
    subtitle: 'Impedancia de R, L, C y desfasajes, topología en "L invertida", frecuencia de corte (fc), órdenes (1° y 2° orden) y trazado paso a paso de curvas de Bode',
    relatedQuiz: 'Cuestionario N° 6 (12 preguntas de cálculo)',
    estimatedPages: '2 páginas A4',
    summary: 'Estudio sistemático de la respuesta en frecuencia de redes pasivas R, L y C. Reactancia inductiva (XL = 2πfL, inductores adelantan tensión 90°) y reactancia capacitiva (XC = 1/(2πfC), capacitores adelantan corriente 90°). Topología de filtros en divisor de tensión "en L invertida" (horizontal serie / vertical derivación o shunt). Deducción de frecuencias de corte para RL (fc = R / 2πL), RC (fc = 1 / 2πRC) y LC (fc = 1 / 2π√(LC)). Análisis de pendientes asintóticas (1° orden: 20 dB/década o 6 dB/octava; 2° orden: 40 dB/década o 12 dB/octava). Trazado paso a paso de diagramas de Bode en escala logarítmica con la "rodilla" al 70% (-3 dB) en fc.',
    concepts: [
      {
        title: 'Comportamiento en Frecuencia: Reactancia Inductiva y Capacitiva',
        description: 'La oposición al paso de la corriente alterna depende de la frecuencia de la señal.',
        details: [
          'Resistor (R): Resistencia pura independiente de la frecuencia. Desfasaje entre tensión y corriente = 0°.',
          'Inductor / Bobina (L): XL = 2 * π * f * L. A baja frecuencia es casi un cable (XL -> 0); a alta frecuencia es un circuito abierto (XL -> ∞). Desfasaje: La tensión adelanta 90° a la corriente.',
          'Capacitor (C): XC = 1 / (2 * π * f * C). A baja frecuencia es un circuito abierto (XC -> ∞); a alta frecuencia es casi un cable (XC -> 0). Desfasaje: La corriente adelanta 90° a la tensión (la tensión atrasa 90°).'
        ]
      },
      {
        title: 'Filtros en "L Invertida"',
        description: 'Circuito divisor de tensión conformado por dos ramas: una horizontal (en serie entre entrada y salida) y una vertical (en paralelo/derivación con la salida).',
        details: [
          'Regla de paso: La tensión de salida se toma en paralelo con el componente vertical. Por lo tanto, pasan a la salida las frecuencias donde la impedancia del componente vertical es mucho mayor que la del horizontal.',
          'Pasa Altos RL: R horizontal (serie), L vertical (paralelo). A alta frecuencia XL >> R, casi toda la tensión cae en L.',
          'Pasa Bajos RL: L horizontal (serie), R vertical (paralelo). A baja frecuencia XL << R, casi toda la tensión cae en R.',
          'Pasa Bajos RC: R horizontal (serie), C vertical (paralelo). A baja frecuencia XC >> R, casi toda la tensión cae en C.',
          'Pasa Altos RC: C horizontal (serie), R vertical (paralelo). A alta frecuencia XC << R, casi toda la tensión cae en R.'
        ]
      },
      {
        title: 'Frecuencia de Corte (fc) y su Condición Física',
        description: 'Frecuencia límite exacta donde la resistencia es igual a la reactancia (R = XL o R = XC).',
        formula: 'f_c(RL) = \\frac{R}{2\\pi L} \\qquad f_c(RC) = \\frac{1}{2\\pi R C} \\qquad f_c(LC) = \\frac{1}{2\\pi \\sqrt{L C}}',
        details: [
          'En fc, la oposición de ambas ramas es idéntica en módulo.',
          'En la frecuencia de corte, la tensión de salida cae exactamente a 0.707 (70.7%) de la tensión máxima de entrada.',
          'En decibeles, esto representa una atenuación de exactamente -3 dB: 20 * log10(1 / √2) = -3.01 dB.'
        ]
      },
      {
        title: 'Orden del Filtro y Pendientes de Atenuación en Bode',
        description: 'Determinado por la cantidad de componentes reactivos reactivos (L o C) desacoplados.',
        details: [
          'Filtros de Primer Orden (RL o RC): Contienen un solo elemento reactivo. Tienen una pendiente de caída asintótica de 20 dB/década (o 6 dB/octava). Significa que cada vez que la frecuencia se multiplica por 10, la tensión se divide por 10.',
          'Filtros de Segundo Orden (LC): Contienen dos elementos reactivos (bobina y capacitor). Pendiente de caída de 40 dB/década (o 12 dB/octava). Cada vez que la frecuencia se multiplica por 10, la tensión se divide por 100 (10 al cuadrado).',
          'En filtros de segundo orden LC cerca de fc pueden generarse resonancias y problemas de fase.'
        ]
      }
    ],
    explanation: 'Un filtro pasivo en L invertida es una competencia de tira y afloja entre dos obstáculos. El obstáculo horizontal intenta frenar la corriente; el obstáculo vertical le ofrece un camino fácil a tierra. Si el camino vertical tiene pocos ohms (poca oposición), la señal se drena a tierra y en la salida no queda nada. Si el camino vertical tiene muchos ohms (mucha oposición), la señal no puede escapar a tierra y sale con fuerza por los bornes de salida. Como la bobina ofrece más ohms cuanto más aguda es la frecuencia (XL = 2πfL) y el capacitor ofrece más ohms cuanto más grave es la frecuencia (XC = 1/2πfC), jugar con su ubicación te permite crear pasa-bajos o pasa-altos perfectos. En el diagrama de Bode, se dibuja esto en papel semilogarítmico: hasta la frecuencia de corte es una línea recta horizontal, y a partir de allí cae en picada con una pendiente fija de 20 dB por cada década.',
    practicalUse: 'Divisores de frecuencia (crossovers) pasivos en bafles de 2 y 3 vías (tweeter pasa-altos, woofer pasa-bajos), filtros antiparasitarios en fuentes de alimentación y eliminación de ruidos sub-bajos en micrófonos.',
    procedures: [
      {
        title: 'Procedimiento Completo: Trazado de Diagrama de Bode Asintótico y Real',
        objective: 'Graficar la respuesta en frecuencia de un filtro pasabajos o pasaaltos conociendo Vin, R y L (o C).',
        formulaOrPrinciple: 'Escala logarítmica, asíntotas a 20 dB/dec y rodilla al 70% en fc.',
        steps: [
          {
            step: 1,
            action: 'Calcular la frecuencia de corte fc utilizando la fórmula correspondiente (RL o RC).',
            justification: 'Define el punto de quiebre donde se cruzan las dos rectas asintóticas.'
          },
          {
            step: 2,
            action: 'Identificar en el eje vertical (escala logarítmica de tensión) el valor de la tensión de la fuente Vin.',
            justification: 'Es el valor máximo que puede tener la salida en la banda de paso (ganancia = 1).'
          },
          {
            step: 3,
            action: 'Trazar la recta horizontal correspondiente a la banda de paso a nivel Vin.',
            justification: 'Para un pasa-bajos, va desde las frecuencias más bajas hasta fc; para un pasa-altos, va desde fc hacia frecuencias altas.'
          },
          {
            step: 4,
            action: 'Trazar la recta inclinada de caída (asíntota de atenuación).',
            justification: 'La pendiente para primer orden es de 20 dB/década: marcar un punto en 10 * fc donde la tensión sea Vin / 10; y en 100 * fc donde sea Vin / 100. Trazar la recta que une fc con esos puntos.'
          },
          {
            step: 5,
            action: 'Calcular el punto de la "rodilla" real en fc: Vout(fc) = 0.7 * Vin.',
            justification: 'En fc la tensión real no está en la esquina de las rectas, sino un 30% más abajo (-3 dB).'
          },
          {
            step: 6,
            action: 'Dibujar la curva suavizada que pase exactamente por el punto de 0.7 * Vin en fc y converja suavemente con las dos rectas.',
            justification: 'Representa la curva de respuesta real física del filtro.'
          }
        ],
        resultAndInterpretation: 'Diagrama de Bode completo y preciso con el que se puede leer la tensión de salida para cualquier frecuencia dada.',
        commonError: 'Dibujar la curva pasando por el vértice de las dos rectas en lugar de curvarla por el 70% (0.7 * Vin), o invertir la orientación en pasa-altos.'
      }
    ],
    keyExample: {
      title: 'Resolución de Ejercicio Completo de Bode (Diapositivas 34-35)',
      problem: 'Se tiene un filtro RL serie. La tensión de salida se toma en paralelo con la inductancia (R horizontal serie = 1000 Ω; L vertical paralelo = 0.15915 H). Tensión de fuente Vin = 10 V. A) Indicar tipo de filtro y calcular fc. B) Trazar el diagrama de Bode. C) Calcular Vsalida para 100 Hz, 1000 Hz y 10.000 Hz.',
      givenData: [
        'Vin = 10 V',
        'R = 1000 Ω',
        'L = 0.15915 H'
      ],
      resolution: [
        'Paso 1: Identificación del filtro:',
        '- El componente vertical es el inductor L. A altas frecuencias XL crece (muchos ohms), por lo que la tensión en L es alta. A bajas frecuencias XL es casi cero (cable), por lo que la tensión es casi nula.',
        '- Se trata de un FILTRO PASA ALTOS DE PRIMER ORDEN.',
        'Paso 2: Cálculo de la frecuencia de corte fc:',
        'fc = R / (2 * π * L) = 1000 / (2 * 3.14159 * 0.15915) = 1000 / 1.000 = 1000 Hz (1 kHz).',
        'Paso 3: Trazado de las asíntotas de Bode:',
        '- Banda de paso (f >= 1000 Hz): Recta horizontal en Vout = 10 V.',
        '- Banda de atenuación (f <= 1000 Hz): Cae hacia la izquierda con pendiente de 20 dB/década. A 100 Hz (una década abajo de fc), la tensión cae a 10 V / 10 = 1 V. A 10 Hz, cae a 0.1 V.',
        'Paso 4: Tensión en los puntos solicitados:',
        '- Para f = 10.000 Hz (10 kHz, plena banda de paso): Vsalida = 10 V.',
        '- Para f = 1000 Hz (frecuencia de corte exacta fc): Vsalida = 0.7 * Vin = 0.7 * 10 V = 7 V.',
        '- Para f = 100 Hz (una década por debajo de fc): Vsalida = 10 V / 10 = 1 V.'
      ],
      result: 'Filtro pasa-altos de 1° orden; fc = 1000 Hz; Vout(100Hz) = 1V; Vout(1000Hz) = 7V; Vout(10000Hz) = 10V.',
      interpretation: 'Coincide con total exactitud con las soluciones de los cuestionarios y diapositivas de clase.',
      warning: 'Para f = fc siempre usar 0.7 * Vin (7 V), NO tomar 10 V de la asíntota.'
    },
    diagramType: 'passive_filters',
    comparativeTable: {
      title: 'Cuadro Comparativo: Configuraciones de Filtros en L Invertida',
      headers: ['Tipo de Filtro', 'Componente Horizontal (Serie)', 'Componente Vertical (Paralelo)', 'Frecuencia de Corte (fc)', 'Pendiente de Caída'],
      rows: [
        ['Pasa Altos RL (1° orden)', 'Resistencia (R)', 'Inductor (L)', 'fc = R / (2π L)', '+20 dB/década (o -20 en caída)'],
        ['Pasa Bajos RL (1° orden)', 'Inductor (L)', 'Resistencia (R)', 'fc = R / (2π L)', '-20 dB/década (divide por 10)'],
        ['Pasa Altos RC (1° orden)', 'Capacitor (C)', 'Resistencia (R)', 'fc = 1 / (2π R C)', '+20 dB/década (hacia abajo)'],
        ['Pasa Bajos RC (1° orden)', 'Resistencia (R)', 'Capacitor (C)', 'fc = 1 / (2π R C)', '-20 dB/década (divide por 10)'],
        ['Pasa Bajos LC (2° orden)', 'Inductor (L)', 'Capacitor (C)', 'fc = 1 / (2π √(LC))', '-40 dB/década (divide por 100)'],
        ['Pasa Altos LC (2° orden)', 'Capacitor (C)', 'Inductor (L)', 'fc = 1 / (2π √(LC))', '+40 dB/década (divide por 100)']
      ]
    },
    examKeys: [
      {
        point: 'Desfasaje entre tensión y corriente en L y C',
        tip: 'En el inductor L: la TENSIÓN adelanta 90° a la corriente. En el capacitor C: la CORRIENTE adelanta 90° a la tensión (la tensión atrasa 90°). Regla mnemotécnica: "CIVIL" (C: I adelanta a V; V adelanta a I en L).',
        frequentTrap: 'Invertir el desfasaje y decir que en el inductor adelanta la corriente.'
      },
      {
        point: 'Lectura del código de capacitores (ej. 335J)',
        tip: 'Las dos primeras cifras son números significativos, la tercera es la cantidad de ceros en PICOFARADIOS (pF). 335 = 33 * 10^5 pF = 3.300.000 pF = 3.3 μF.',
        frequentTrap: 'Creer que son 335 μF o 335 pF.'
      },
      {
        point: 'Tensión en la frecuencia de corte (la "rodilla")',
        tip: 'En fc la tensión SIEMPRE es el 70% de la tensión de entrada (0.7 * Vin), lo que corresponde a una caída de 3 dB.',
        frequentTrap: 'Tomar el valor de la recta asintótica (100%) en fc.'
      },
      {
        point: 'Diferencia de pendientes: 1° vs 2° orden',
        tip: 'Primer orden (RL, RC): 20 dB/década o 6 dB/octava (tensión se divide por 10). Segundo orden (LC): 40 dB/década o 12 dB/octava (tensión se divide por 100).',
        frequentTrap: 'Confundir octava (duplicar frecuencia) con década (multiplicar frecuencia por 10).'
      }
    ]
  },
  {
    id: 7,
    slug: 'clase-7-amplificadores-operacionales',
    title: 'Clase 7 — Amplificadores Operacionales (Op-Amps) y Mezcladora',
    shortTitle: 'Clase 7: Amplificadores Operacionales',
    subtitle: 'Símbolo, alimentación partida, las 5 configuraciones fundamentales, sumador/consola de mezcla, reglas de diseño (1kΩ-100kΩ) y ejercicios de protoboard',
    relatedQuiz: 'Ejercicios de Protoboard y Diseño de Consola Mezcladora',
    estimatedPages: '2 páginas A4',
    summary: 'Estudio integral del amplificador operacional como circuito integrado de propósito general. Símbolo, entradas inversora (V-) y no inversora (V+), y fuentes de alimentación partida (+Vcc / -Vcc). Las 5 configuraciones esenciales: 1) No Inversora (alta impedancia, A = 1 + R2/R1), 2) Inversora (A = -R2/R1, permite atenuar), 3) Seguidor de tensión / Buffer (A = 1, desacoplo de impedancias y aislamiento de filtros), 4) Comparador de tensión (lazo abierto, satura a +Vcc o -Vcc), 5) Sumador de tensión (mezclador de audio, faders y master). Regla de diseño de resistencias (1 kΩ a 100 kΩ), combinación de etapas en cascada y resolución paso a paso de esquemáticos a partir del protoboard.',
    concepts: [
      {
        title: 'Concepto de Amplificador Operacional (Op-Amp)',
        description: 'Circuito integrado analógico de acoplo directo que contiene decenas de transistores, diodos y resistencias interconectados en una pastilla de silicio.',
        details: [
          'Es un circuito "incompleto" por diseño: requiere pocos componentes externos conectados a sus patas para definir su ganancia y función exacta.',
          'Pines de señal: Entrada No Inversora (V+), Entrada Inversora (V-) y Salida (Vsalida).',
          'Pines de alimentación: Requiere fuente partida (+Vcc y -Vcc) para poder procesar señales alternas con valores positivos y negativos sin recortar.',
          'Identificación de patillaje: Hendidura o punto en la esquina superior izquierda indica la Pata 1. La numeración sigue un orden antihorario (en el LM741/TL081 de 8 pines: 1 a 4 abajo de izq. a der., 5 a 8 arriba de der. a izq.).'
        ]
      },
      {
        title: '1) Configuración No Inversora',
        description: 'La señal ingresa por la pata positiva V+. Una resistencia R1 va de la pata inversora V- a masa, y una resistencia de lazo R2 va de la pata inversora a la salida.',
        formula: 'A = 1 + \\frac{R_2}{R_1} = 1 + \\frac{R_{lazo}}{R_{masa}} \\qquad V_{sal} = A \\cdot V_{ent}',
        details: [
          'La salida está en fase con la entrada (sin inversión de signo).',
          'Posee una altísima impedancia de entrada (no quita corriente al circuito previo).',
          'La ganancia A es siempre MAYOR O IGUAL A 1 (nunca puede atenuar).'
        ]
      },
      {
        title: '2) Configuración Inversora',
        description: 'La pata no inversora V+ se conecta a masa. La señal ingresa a la pata inversora V- a través de R1, y R2 va de V- a la salida.',
        formula: 'A = -\\frac{R_2}{R_1} = -\\frac{R_{lazo}}{R_{entrada}} \\qquad V_{sal} = A \\cdot V_{ent}',
        details: [
          'Invierte el signo de la señal (desfasaje de 180°). En alterna, una senoidal de 5 mV / 0° sale como (5*A) mV / 180°.',
          'Permite ganancias menores a 1 en módulo (|A| < 1), permitiendo ATENUAR señales.',
          'La impedancia de entrada es exactamente igual a R1.'
        ]
      },
      {
        title: '3) Configuración Seguidor de Tensión (Buffer)',
        description: 'La salida se une directamente con la entrada inversora V- con un cable (R2 = 0, R1 = ∞). La señal ingresa por V+.',
        formula: 'A = 1 \\qquad a = 0\\text{ dB} \\qquad V_{sal} = V_{ent}',
        details: [
          '¿Para qué sirve si amplifica por 1?: Ofrece impedancia de entrada casi infinita y de salida casi cero.',
          'Aísla etapas: Toma la tensión sin quitarle corriente al circuito previo y la regenera con energía propia de sus fuentes.',
          'Aplicación clave: Conectar dos filtros pasivos en cascada sin que se alteren mutuamente sus frecuencias de corte.'
        ]
      },
      {
        title: '4) Configuración Comparador de Tensión',
        description: 'Opera a lazo abierto (sin resistencias de realimentación). La señal entra por V+ y una tensión de referencia por V-.',
        details: [
          'Si V+ > V-  ==>  Vsalida = +Vcc (máximo positivo, ej. +9V).',
          'Si V+ < V-  ==>  Vsalida = -Vcc (máximo negativo, ej. -9V).',
          'NUNCA tiene valores intermedios en la salida: funciona como interruptor de umbral o detector de cruce por cero.'
        ]
      },
      {
        title: '5) Configuración Sumador de Tensión (Consola Mezcladora)',
        description: 'Variante de la configuración inversora con múltiples ramas de entrada conectadas al nodo de la pata inversora V-.',
        formula: 'V_{sal} = -\\left(\\frac{R_2}{R_{1a}} V_{ent1} + \\frac{R_2}{R_{1b}} V_{ent2} + \\dots\\right) = A_1 V_{ent1} + A_2 V_{ent2}',
        details: [
          'Suma cualquier tipo de señales (voces, instrumentos, frecuencias diferentes) en una onda compuesta.',
          'Cada entrada tiene su ganancia independiente: variar R1a o R1b equivale al FADER de cada canal.',
          'Variar la resistencia de lazo R2 modifica la ganancia de todas las entradas al mismo tiempo: equivale al MASTER de la consola.',
          'La salida sale invertida (180°). Para obtener una suma sin inversión, se agrega un segundo amplificador inversor con ganancia unitaria (R1 = R2 = 10 kΩ) a la salida.'
        ]
      },
      {
        title: 'Regla de Oro de Diseño: Rango Seguro de Resistencias',
        description: 'Al diseñar circuitos con operacionales, las resistencias R1 y R2 deben elegirse obligatoriamente entre 1 kΩ y 100 kΩ.',
        details: [
          'Si se eligen resistencias muy chicas (ej. R < 100 Ω o 1 Ω): Provocan corrientes elevadísimas que superan la capacidad del integrado, sobrecalentándolo o quemándolo.',
          'Si se eligen resistencias muy grandes (ej. R > 1 MΩ): Las corrientes son tan diminutas que quedan al nivel del ruido térmico y corrientes de polarización parásitas, arruinando la estabilidad.'
        ]
      }
    ],
    explanation: 'El operacional es el comodín de la electrónica analógica: un triángulo mágico con dos entradas que restan voltajes y una ganancia interna gigantesca. Si lo dejas libre sin resistencias, se vuelve loco y salta como un interruptor al máximo positivo o negativo (Comparador). Pero si tomas un pedazo de la salida y se lo enchufas a la pata negativa (realimentación negativa), el chip se calma y hace exactamente lo que tú le ordenes con dos simples resistencias. Si pones la señal en la pata positiva, gana (1 + Rlazo/Rmasa) sin invertir. Si metes la señal por la pata negativa, gana (-Rlazo/Rentrada) e invierte la fase. Si le pones un cable directo entre salida y pata negativa, ganas 1 pero obtienes un escudo de fuerza: un seguidor de tensión que mide voltajes delicados sin drenarles ni una gota de corriente. Y si le enchufas varias resistencias a la pata negativa, mezclas guitarras, micrófonos y teclados en un solo cable como en una consola de grabación.',
    practicalUse: 'Preamplificadores de micrófono y guitarra, consolas mezcladoras de audio, etapas buffer para aislar pedales de efectos, filtros activos, ecualizadores paramétricos e instrumentación médica.',
    procedures: [
      {
        title: 'Procedimiento 1: Diseño de un Amplificador con Ganancia Específica',
        objective: 'Calcular los valores comerciales de R1 y R2 para una ganancia requerida A cumpliendo la regla segura (1 kΩ a 100 kΩ).',
        formulaOrPrinciple: 'No Inversor: R2 = R1 * (A - 1)  ;  Inversor: R2 = R1 * |A|',
        steps: [
          {
            step: 1,
            action: 'Decidir si se necesita configuración no inversora (alta impedancia de entrada, A >= 1) o inversora (permite atenuar o desfasa 180°).',
            justification: 'Si no se aclara la impedancia, se prefiere la no inversora por su alta impedancia de entrada.'
          },
          {
            step: 2,
            action: 'Fijar una resistencia de partida dentro del rango seguro (típicamente R1 = 1 kΩ, 2 kΩ o 10 kΩ).',
            justification: 'Garantiza corrientes moderadas alejadas del ruido y sin sobrecalentar el chip.'
          },
          {
            step: 3,
            action: 'Despejar R2 según la ecuación de la configuración elegida.',
            justification: 'En no inversor: R2 = R1 * (A - 1). En inversor: R2 = R1 * |A|.'
          },
          {
            step: 4,
            action: 'Verificar que el valor de R2 resultante también quede dentro del rango de 1 kΩ a 100 kΩ.',
            justification: 'Si R2 da menor a 1 kΩ (ej. al atenuar A = 0.5 con R1 = 1 kΩ daría R2 = 500 Ω), se incrementa R1 (ej. R1 = 10 kΩ ==> R2 = 5 kΩ) para volver a la zona segura.'
          }
        ],
        resultAndInterpretation: 'Circuito funcional con ganancia precisa, alta fidelidad y estabilidad térmica.',
        commonError: 'Elegir R = 10 Ω (quema el chip) o R = 10 MΩ (ruido excesivo), o invertir R1 y R2 en la fórmula.'
      },
      {
        title: 'Procedimiento 2: Interpretación de Circuitos en Protoboard a Esquemático',
        objective: 'Deducir el diagrama esquemático, tipo de configuración y tensión de salida a partir de la foto o dibujo del protoboard.',
        formulaOrPrinciple: 'Seguimiento de pistas y numeración estándar antihoraria de pines del CI.',
        steps: [
          {
            step: 1,
            action: 'Localizar la marca/hendidura del integrado para ubicar el Pin 1 y numerar los pines 1 a 8 en sentido antihorario.',
            justification: 'Pin 2 = Inversora (-); Pin 3 = No inversora (+); Pin 4 = -Vcc; Pin 6 = Salida (Out); Pin 7 = +Vcc.'
          },
          {
            step: 2,
            action: 'Rastrear a dónde va conectada la señal de entrada (Vent).',
            justification: 'Si entra al Pin 3 (V+), es No Inversor o Seguidor. Si entra al Pin 2 (V-), es Inversor o Sumador.'
          },
          {
            step: 3,
            action: 'Observar el lazo entre Pin 2 (V-) y Pin 6 (Salida).',
            justification: 'Si hay un cable directo sin resistencia: es un SEGUIDOR DE TENSIÓN (A = 1). Si hay una resistencia R2: es inversor o no inversor según dónde esté la entrada.'
          },
          {
            step: 4,
            action: 'Identificar la resistencia a masa en Pin 2.',
            justification: 'Si Pin 2 tiene R1 a masa y R2 a salida con entrada en Pin 3, es NO INVERSOR con A = 1 + R2/R1.'
          },
          {
            step: 5,
            action: 'Calcular la salida Vsalida = A * Ventrada y graficar la onda (en fase o invertida 180°).',
            justification: 'Permite completar las consignas teóricas y gráficas del examen.'
          }
        ],
        resultAndInterpretation: 'Resolución certera de los problemas gráficos de protoboard habituales en parciales.',
        commonError: 'Confundir el Pin 5 con el Pin 8 por no seguir el sentido antihorario de las patas.'
      }
    ],
    keyExample: {
      title: 'Diseño de Mezcladora de Audio de Dos Canales con Master (Diapositivas 26-28)',
      problem: 'Se desea sumar dos señales senoidales: Vent1 = 1 mV / 0° y Vent2 = 1 mV / 0°. Se utiliza una resistencia de lazo R2 = 4 kΩ. Las resistencias de entrada son R1a = 1 kΩ y R1b = 2 kΩ. A) Calcular las ganancias A1 y A2. B) Obtener la tensión de salida Vsal. C) ¿Cómo se lograría que la salida sume sin invertir la fase?',
      givenData: [
        'Vent1 = 1 mV / 0°',
        'Vent2 = 1 mV / 0°',
        'R2 = 4 kΩ = 4000 Ω',
        'R1a = 1 kΩ = 1000 Ω',
        'R1b = 2 kΩ = 2000 Ω'
      ],
      resolution: [
        'Paso 1: Ganancia para el canal 1:',
        'A1 = - (R2 / R1a) = - (4000 / 1000) = - 4 (equivale a 4 con desfase de 180°).',
        'Paso 2: Ganancia para el canal 2:',
        'A2 = - (R2 / R1b) = - (4000 / 2000) = - 2 (equivale a 2 con desfase de 180°).',
        'Paso 3: Tensión de salida compuesta:',
        'Vsal = A1 * Vent1 + A2 * Vent2 = (-4 * 1 mV) + (-2 * 1 mV) = -4 mV - 2 mV = -6 mV.',
        'En forma polar: Vsal = 6 mV / 180° (onda senoidal de 6 mV de amplitud con inversión de fase de 180°).',
        'Paso 4: Eliminación de la inversión de fase:',
        'Se conecta la salida del sumador a la entrada de una segunda etapa con amplificador operacional en configuración INVERSORA con ganancia unitaria A = -1 (R1 = R2 = 10 kΩ).',
        'Vsal_final = (-1) * (-6 mV) = +6 mV / 0°.'
      ],
      result: 'A1 = -4; A2 = -2; Vsalida = 6 mV / 180°; Con inversor unitario adicional se obtiene +6 mV / 0°.',
      interpretation: 'Demuestra cómo el sumador combina canales independientes y cómo variar R2 actúa como Master general mientras que variar R1a/R1b actúa como Faders de canal.',
      warning: 'Recordar que el sumador básico siempre invierte la fase por defecto; si el enunciado pide no invertir, es obligatorio agregar la segunda etapa inversora unitaria.'
    },
    diagramType: 'opamps',
    comparativeTable: {
      title: 'Cuadro Comparativo: Las 5 Configuraciones de Amplificador Operacional',
      headers: ['Configuración', 'Entrada de Señal', 'Realimentación (Salida a V-)', 'Ganancia (A)', 'Fase de Salida', 'Impedancia Entrada'],
      rows: [
        ['No Inversora', 'Pin V+ (+)', 'Resistencia R2 (con R1 a masa)', 'A = 1 + R2/R1 (A >= 1)', 'En fase (0°)', 'Muy alta (Giga-Ohms)'],
        ['Inversora', 'Pin V- (-) vía R1', 'Resistencia R2 a salida', 'A = - R2/R1 (puede ser < 1)', 'Invertida (180°)', 'Media (igual a R1)'],
        ['Seguidor (Buffer)', 'Pin V+ (+)', 'Cable directo (R2=0, R1=∞)', 'A = 1 (0 dB)', 'En fase (0°)', 'Muy alta (aislador)'],
        ['Comparador', 'Pin V+ (+)', 'Sin realimentación (lazo abierto)', 'Saturación (+Vcc o -Vcc)', 'Digital (2 niveles)', 'Muy alta'],
        ['Sumador Mezclador', 'Pines V- (-) múltiples', 'Resistencia de lazo R2', 'Vsal = -Σ(R2/R1i * Vi)', 'Invertida (180°)', 'Independiente por canal']
      ]
    },
    examKeys: [
      {
        point: 'Error de identificación R1 y R2 en No Inversor',
        tip: 'R1 es SIEMPRE la resistencia conectada a MASA, y R2 es la resistencia de LAZO (entre salida y pata inversora). Fórmula mnemotécnica: A = 1 + Rlazo / Rmasa.',
        frequentTrap: 'Invertir la división y calcular A = 1 + Rmasa / Rlazo. ¡Error fatal en parciales!'
      },
      {
        point: '¿Por qué no poner sólo un cable en vez de un seguidor de tensión?',
        tip: 'Un cable transmite tensión pero carga al circuito anterior quitándole corriente y alterando sus filtros. El seguidor de tensión tiene altísima impedancia de entrada y baja de salida: "mide sin alterar" y entrega una copia idéntica generada con energía de sus fuentes.',
        frequentTrap: 'Decir que amplifica la tensión o que consume menos energía.'
      },
      {
        point: 'Valores seguros de resistencias de diseño',
        tip: 'Siempre elegir R entre 1 kΩ y 100 kΩ. Valores menores a 1 kΩ queman el integrado por exceso de corriente; valores mayores a 100 kΩ generan ruido térmico e inestabilidad.',
        frequentTrap: 'Diseñar con resistencias de 10 Ω o de 5 MΩ.'
      },
      {
        point: 'Numeración de patas del encapsulado DIP-8',
        tip: 'Mirando el chip desde arriba con la muesca hacia la izquierda o arriba: pata 1 abajo/izq, pata 4 abajo/der, pata 5 arriba/der, pata 8 arriba/izq. ¡Numeración circular antihoraria!',
        frequentTrap: 'Numerar en zigzag de izquierda a derecha (hace que confundas la pata de salida 6 con la 3).'
      }
    ]
  }
];
