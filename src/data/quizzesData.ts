export interface QuizQuestion {
  id: string;
  quizNumber: number;
  questionNumber: number;
  questionText: string;
  options: string[];
  correctAnswers: string[];
  isMultipleChoice?: boolean;
  explanation: string;
  procedure?: string[];
  memoryTip: string;
  relatedClass: number;
}

export interface QuizGroup {
  quizNumber: number;
  title: string;
  topic: string;
  totalQuestions: number;
  passingScore: string;
  questions: QuizQuestion[];
}

export const QUIZZES_DATA: QuizGroup[] = [
  {
    quizNumber: 1,
    title: 'Cuestionario N° 1 — Micrófonos, Niveles y Conexiones',
    topic: 'Cápsulas de micrófono, Phantom Power +48V, Niveles de señal, Audio balanceado y normas de cableado XLR/TRS/TS/RCA',
    totalQuestions: 36,
    passingScore: 'Aprobado (Calificación 71.20% a 100%)',
    questions: [
      {
        id: 'q1-1',
        quizNumber: 1,
        questionNumber: 1,
        questionText: '¿Cuál o cuáles de las siguientes cápsulas de micrófonos necesitan necesariamente una fuente de alimentación externa para su funcionamiento? (No se hace referencia a phantom de 48v obligatoriamente)',
        options: ['Dinámico', 'Condensador', 'Cinta', 'Carbón', 'Electret'],
        correctAnswers: ['Carbón', 'Electret', 'Condensador'],
        isMultipleChoice: true,
        explanation: 'El micrófono de carbón necesita una batería DC en serie para hacer circular corriente por los gránulos de carbón. El de condensador requiere DC para polarizar sus placas fijas y móviles (V = Q/C). El electret tiene la cápsula pre-polarizada, pero necesita alimentación externa obligatoria para su preamplificador interno a transistor FET. Los micrófonos dinámicos y de cinta son 100% pasivos (generan tensión por inducción electromagnética sin pilas).',
        memoryTip: 'Requieren fuente: Carbón, Condensador y Electret. Pasivos: Dinámico y Cinta.',
        relatedClass: 1
      },
      {
        id: 'q1-2',
        quizNumber: 1,
        questionNumber: 2,
        questionText: '¿Cuál es el tipo de cápsula de micrófono que posee un funcionamiento similar al de un parlante?',
        options: ['Carbón', 'Condensador', 'Cinta', 'Electret', 'Dinámico'],
        correctAnswers: ['Dinámico'],
        explanation: 'El micrófono dinámico de bobina móvil funciona con la misma ley de Faraday que un altavoz pero en sentido inverso: en el parlante una corriente mueve la bobina en un imán para generar sonido; en el micrófono dinámico la onda sonora mueve la bobina dentro del imán generando una corriente.',
        memoryTip: 'Dinámico = Parlante al revés (Bobina móvil + Imán permanente).',
        relatedClass: 1
      },
      {
        id: 'q1-3',
        quizNumber: 1,
        questionNumber: 3,
        questionText: '¿Cuál o cuáles de los siguientes tipos de cápsulas NO poseen un imán en su interior?',
        options: ['Condensador', 'Dinámico', 'Electret', 'Carbón', 'Cinta'],
        correctAnswers: ['Carbón', 'Electret', 'Condensador'],
        isMultipleChoice: true,
        explanation: 'Los micrófonos electrostáticos (Condensador y Electret) y de resistencia variable (Carbón) no emplean campos magnéticos para la transducción. Los únicos que poseen imán permanente son los electrodinámicos: el Dinámico de bobina móvil y el de Cinta (Ribbon).',
        memoryTip: 'Sin imán: Condensador, Electret y Carbón. Con imán: Dinámico y Cinta.',
        relatedClass: 1
      },
      {
        id: 'q1-4',
        quizNumber: 1,
        questionNumber: 4,
        questionText: '¿Cuál o cuáles de las siguientes tipos de cápsulas NO poseen una bobina en su interior?',
        options: ['Electret', 'Dinámico', 'Carbón', 'Condensador'],
        correctAnswers: ['Carbón', 'Electret', 'Condensador'],
        isMultipleChoice: true,
        explanation: 'El único micrófono que posee una bobina de cobre bobinada solidaria a la membrana es el micrófono Dinámico. Las demás cápsulas emplean placas paralelas (condensador/electret) o gránulos de carbón.',
        memoryTip: 'La bobina es exclusiva del micrófono Dinámico.',
        relatedClass: 1
      },
      {
        id: 'q1-5',
        quizNumber: 1,
        questionNumber: 5,
        questionText: '¿Cuál de los siguientes tipos micrófonos necesitan obligatoriamente phantom de 48v para su funcionamiento?',
        options: ['Dinámico', 'Condensador', 'Cinta'],
        correctAnswers: ['Condensador'],
        explanation: 'Los micrófonos de condensador verdaderos (True Condenser) requieren la polarización electrostática de alta tensión y la alimentación de su circuito de impedancia ultra-alta (tubo o FET), provistos por la fuente phantom de 48V de la consola.',
        memoryTip: 'Phantom 48V obligatorio = Micrófono de Condensador.',
        relatedClass: 1
      },
      {
        id: 'q1-6',
        quizNumber: 1,
        questionNumber: 6,
        questionText: 'De acuerdo a lo estudiado ¿Qué sucede si accidentalmente un usuario le aplica phantom de 48v a un micrófono dinámico profesional?',
        options: [
          'El micrófono no sufre daño y funciona perfectamente',
          'El phantom puede entrar en cortocircuito y quemar la consola o preamplificador',
          'El micrófono no sufre daño, pero el audio es defectuoso y/o con algún tipo de ruido',
          'Se polariza la cápsula como si se tratara de un micrófono de condensador',
          'Por más que sea profesional, el micrófono se daña ya que se produce un desplazamiento de la bobina'
        ],
        correctAnswers: ['El micrófono no sufre daño y funciona perfectamente'],
        explanation: 'La fuente phantom inyecta +48V simultáneamente a los pines 2 y 3 respecto al pin 1 (masa). Los extremos de la bobina del micrófono dinámico están conectados entre el pin 2 y el pin 3. Como ambos extremos reciben idéntico potencial de +48V, la diferencia de potencial a través de la bobina es exactamente 0 Voltios (48V - 48V = 0V). No circula corriente continua por la bobina, por lo que el micrófono no sufre ningún daño y funciona con total normalidad.',
        memoryTip: 'Dinámico + Phantom 48V = No sufre daño y funciona perfecto (diferencia de tensión = 0V).',
        relatedClass: 1
      },
      {
        id: 'q1-7',
        quizNumber: 1,
        questionNumber: 7,
        questionText: 'De acuerdo a lo estudiado ¿Cuál es la principal función del phantom de 48v en las consolas y preamplificadores?',
        options: [
          'Aumentar la potencia de alcance de los micrófonos',
          'Polarizar las cápsulas de cinta, al igual que una de condensador',
          'Alimentar la electrónica interna de los micrófonos que lo necesiten',
          'Balancear las señales de audio',
          'Ser una alimentación auxiliar por si la consola utiliza baterías y estas se agotan'
        ],
        correctAnswers: ['Alimentar la electrónica interna de los micrófonos que lo necesiten'],
        explanation: 'La función del phantom power es proveer energía eléctrica continua a través del cable balanceado para polarizar la cápsula y alimentar los circuitos preamplificadores activos internos (transistores FET o válvulas) de los micrófonos que lo requieran (condensador y electret).',
        memoryTip: 'Misión del Phantom: Alimentar la electrónica interna del micrófono.',
        relatedClass: 1
      },
      {
        id: 'q1-8',
        quizNumber: 1,
        questionNumber: 8,
        questionText: 'Si un micrófono se conecta a una consola de manera desbalanceada ¿Cuántos cables deben viajar como mínimo desde el micrófono hasta el sistema de amplificación?',
        options: ['6', '5', '1', '48', '0', '3', '4', '2'],
        correctAnswers: ['2'],
        explanation: 'Una conexión desbalanceada requiere únicamente 2 conductores: uno para la señal activa (vivo) y otro para el retorno/blindaje (masa).',
        memoryTip: 'Desbalanceado = 2 cables mínimos (Señal + Masa).',
        relatedClass: 1
      },
      {
        id: 'q1-9',
        quizNumber: 1,
        questionNumber: 9,
        questionText: 'Si un micrófono se conecta a una consola de manera balanceada ¿Cuántos cables deben viajar como mínimo desde el micrófono hasta el sistema de amplificación?',
        options: ['4', '2', '5', '6', '3', '1', '48', '0'],
        correctAnswers: ['3'],
        explanation: 'Una conexión balanceada requiere como mínimo 3 conductores: Pin 1 (Masa/Blindaje), Pin 2 (Señal Positiva / Hot) y Pin 3 (Señal Invertida 180° / Cold).',
        memoryTip: 'Balanceado = 3 cables mínimos (Masa + Positiva + Negativa).',
        relatedClass: 1
      },
      {
        id: 'q1-10',
        quizNumber: 1,
        questionNumber: 10,
        questionText: 'Indicar las afirmaciones que sean correctas sobre la señal balanceada:',
        options: [
          'Si un micrófono está tomando señal en un ambiente muy ruidoso, la señal balanceada atenúa dicho ruido',
          'La señal balanceada se utiliza exclusivamente en los micrófonos electret',
          'La señal desbalanceada se utiliza exclusivamente en los micrófonos dinámicos',
          'La señal desbalanceada es mono, mientras que la señal balanceada es estereo',
          'El valor típico de tensión de Phantom profesional en consolas es de 48v',
          'La señal balanceada utiliza un cable para el phantom y otro para el audio',
          'La señal balanceada no está relacionada a un tipo de micrófono.'
        ],
        correctAnswers: [
          'El valor típico de tensión de Phantom profesional en consolas es de 48v',
          'La señal balanceada no está relacionada a un tipo de micrófono.'
        ],
        isMultipleChoice: true,
        explanation: 'El balanceado es un método de transmisión eléctrica de señales que no depende del principio de la cápsula (se puede balancear un dinámico, un condensador o una línea). El phantom estándar en audio profesional es de +48V DC. La trampa común es creer que el balanceado atenúa ruidos acústicos del ambiente: solo cancela interferencias electromagnéticas inducidas en el cable.',
        memoryTip: 'El balanceado no depende del tipo de mic y el phantom estándar es de 48V.',
        relatedClass: 1
      },
      {
        id: 'q1-11',
        quizNumber: 1,
        questionNumber: 11,
        questionText: 'Indicar las conexiones normadas correctas en un cable de micrófono balanceado XLR-XLR:',
        options: [
          'En un cable de micrófono balanceado XLR-XLR el pin Nº3 es conectado a la señal positiva.',
          'En un cable de micrófono balanceado XLR-XLR el pin Nº2 es conectado a la señal positiva.',
          'En un cable de micrófono balanceado XLR-XLR el pin Nº3 es conectado a masa.',
          'En un cable de micrófono balanceado XLR-XLR el pin Nº1 es conectado a masa.',
          'En un cable de micrófono balanceado XLR-XLR el pin Nº2 es conectado a masa.',
          'En un cable de micrófono balanceado XLR-XLR el pin Nº2 es conectado a la señal negativa.',
          'En un cable de micrófono balanceado XLR-XLR el pin Nº3 es conectado a la señal negativa.'
        ],
        correctAnswers: [
          'En un cable de micrófono balanceado XLR-XLR el pin Nº1 es conectado a masa.',
          'En un cable de micrófono balanceado XLR-XLR el pin Nº2 es conectado a la señal positiva.',
          'En un cable de micrófono balanceado XLR-XLR el pin Nº3 es conectado a la señal negativa.'
        ],
        isMultipleChoice: true,
        explanation: 'Norma internacional AES/EBU para XLR de 3 pines: Pin 1 = Masa (Shield/Ground); Pin 2 = Positivo (Hot / +); Pin 3 = Negativo (Cold / -).',
        memoryTip: 'XLR estándar: 1 = Masa, 2 = Positivo (+), 3 = Negativo (-).',
        relatedClass: 1
      },
      {
        id: 'q1-12',
        quizNumber: 1,
        questionNumber: 12,
        questionText: 'Un conector TRS puede ser utilizado para diferentes normas ¿Cuáles de las siguientes necesitan obligatoriamente dicho conector (3 contactos)?',
        options: [
          'Mono, balanceado.',
          'Estereo, balanceado.',
          'Mono, desbalanceado.',
          'Return de un cable de insert',
          'Estereo, desbalanceado.',
          'Send de un cable de insert',
          'Punto de insert de una consola'
        ],
        correctAnswers: ['Mono, balanceado.', 'Estereo, desbalanceado.', 'Punto de insert de una consola'],
        isMultipleChoice: true,
        explanation: 'Un conector TRS tiene tres conductores independientes (Tip, Ring, Sleeve). Requieren obligatoriamente 3 contactos: 1) Mono balanceado (Tip=+, Ring=-, Sleeve=Masa), 2) Estéreo desbalanceado (Tip=Left, Ring=Right, Sleeve=Masa común), 3) Punto de insert de consola (Tip=Send, Ring=Return, Sleeve=Masa común). (Estéreo balanceado requeriría 5 contactos; mono desbalanceado solo necesita 2 contactos TS).',
        memoryTip: 'TRS (3 pines) es obligatorio para: Mono Balanceado, Estéreo Desbalanceado y Punto de Insert.',
        relatedClass: 1
      },
      {
        id: 'q1-13',
        quizNumber: 1,
        questionNumber: 13,
        questionText: 'Siempre que se encuentre un cable que en la punta tenga una ficha TRS, se trata de una señal estereo desbalanceada (la típica señal de auriculares). ¿Verdadero o Falso?',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        explanation: 'Es FALSO. Una ficha TRS puede estar transportando una señal mono balanceada (ej. salida de una placa de sonido a un monitor de estudio) o un cable de insert de consola. No se puede deducir la señal solo mirando la ficha.',
        memoryTip: 'Falso: TRS puede ser mono balanceado, estéreo o insert.',
        relatedClass: 1
      },
      {
        id: 'q1-14',
        quizNumber: 1,
        questionNumber: 14,
        questionText: 'Una persona posee un cable TS (por ejemplo plug de guitarra). Se le rompe un conector y al ir a comprar sólo quedan TRS en la tienda. Dicha persona lo compra igual ya que dice que realizando algún tipo de conexión puede utilizar un TRS en un cable TS y que funcione sin problemas. ¿Verdadero o Falso?',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Verdadero'],
        explanation: 'Es VERDADERO. En el conector TRS se suelda el conductor de señal al TIP, la malla al SLEEVE y se puentea el RING con el SLEEVE (o se deja libre el Ring). La ficha TRS funcionará exactamente igual que una TS.',
        memoryTip: 'Verdadero: Se puede adaptar un TRS para que actúe como TS uniendo Ring y Sleeve.',
        relatedClass: 1
      },
      {
        id: 'q1-15',
        quizNumber: 1,
        questionNumber: 15,
        questionText: 'Una persona posee un cable balanceado TRS-TRS. Se le rompe un conector y sólo quedan TS. Dice que realizando algún tipo de conexión puede usar un TS en un cable TRS y que siga siendo balanceado. ¿Verdadero o Falso?',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        explanation: 'Es FALSO. Una señal balanceada requiere físicamente 3 conductores aislados (Masa, Positivo y Negativo). El conector TS solo posee 2 contactos. En el instante en que conectas una ficha TS, la línea se desbalancea necesariamente.',
        memoryTip: 'Falso: Con una ficha TS es matemáticamente imposible mantener el balanceado.',
        relatedClass: 1
      },
      {
        id: 'q1-16',
        quizNumber: 1,
        questionNumber: 16,
        questionText: '¿Para qué sirve el punto extra de conexión que posee una ficha TRRS respecto de una TRS?',
        options: [
          'Para enviar 48v de phantom',
          'Para enviar señal balanceada',
          'Para recibir señal de micrófono balanceada',
          'Para recibir señal de micrófono',
          'Para enviar una copia backup de información',
          'Para tener un punto de insert en el teléfono al igual que las consolas'
        ],
        correctAnswers: ['Para recibir señal de micrófono'],
        explanation: 'El conector TRRS (Tip, Ring 1, Ring 2, Sleeve) posee 4 contactos: Canal Izquierdo (L), Canal Derecho (R), Masa (GND) y el cuarto contacto para la señal del Micrófono (para auriculares manos libres con micrófono de teléfonos).',
        memoryTip: 'El 4° contacto en TRRS es para el MICRÓFONO.',
        relatedClass: 1
      },
      {
        id: 'q1-17',
        quizNumber: 1,
        questionNumber: 17,
        questionText: 'Indicar las afirmaciones que sean INCORRECTAS respecto a fichas y cables TS:',
        options: [
          'Una ficha TS puede transmitir señal mono desbalanceada',
          'Un cable TS - TRS puede ser balanceado',
          'Una ficha TS puede transmitir señal estereo desbalanceada',
          'Una ficha TS puede transmitir cualquier tipo de señal, pero siempre balanceada',
          'No es posible utilizar un cable con configuración TS - TRS',
          'Un cable TS - TRS es, necesariamente, balanceado',
          'Un cable TS - TRS es, necesariamente, desbalanceado',
          'Una ficha TS es, necesariamente, desbalanceada'
        ],
        correctAnswers: [
          'Un cable TS - TRS puede ser balanceado',
          'Una ficha TS puede transmitir señal estereo desbalanceada',
          'Una ficha TS puede transmitir cualquier tipo de señal, pero siempre balanceada',
          'No es posible utilizar un cable con configuración TS - TRS',
          'Un cable TS - TRS es, necesariamente, balanceado'
        ],
        isMultipleChoice: true,
        explanation: 'Una ficha TS solo tiene 2 contactos, por lo que JAMÁS puede transmitir audio estéreo ni señal balanceada. Cualquier cable que tenga un extremo TS pasa a ser NECESARIAMENTE desbalanceado.',
        memoryTip: 'TS = Mono desbalanceado SIEMPRE. Nunca puede ser balanceado ni estéreo.',
        relatedClass: 1
      },
      {
        id: 'q1-26',
        quizNumber: 1,
        questionNumber: 26,
        questionText: 'Clasificar ambos conectores XLR de la imagen: Conector A (con agujeros hembra) y Conector B (con pines macho sobresalientes).',
        options: ['Conector A -> Hembra, Conector B -> Macho', 'Conector A -> Macho, Conector B -> Hembra'],
        correctAnswers: ['Conector A -> Hembra, Conector B -> Macho'],
        explanation: 'El conector hembra posee orificios receptores (habitual en entradas de consolas). El conector macho posee pines que sobresalen (habitual en salidas de micrófonos y equipos).',
        memoryTip: 'Hembra = Orificios (Entradas). Macho = Pines (Salidas).',
        relatedClass: 1
      },
      {
        id: 'q1-27',
        quizNumber: 1,
        questionNumber: 27,
        questionText: 'Una persona quiere armar un cable XLR-TS para conectar una salida balanceada a una entrada desbalanceada. Se sabe que el equipo emisor NO posee transformador de salida (es salida electrónica activa). La persona indica que se debe conectar el pin 3 del XLR con el 1 del mismo conector. Indicar si dicha afirmación es verdadera o falsa.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        explanation: 'Es FALSO. Si la salida es electrónica activa (sin transformador), el Pin 3 está conectado a la salida de un amplificador operacional. Si se conecta el Pin 3 al Pin 1 (masa), se pone la salida del operacional en cortocircuito contra tierra, sobrecalentando el integrado y distorsionando la señal. En salidas electrónicas, el Pin 3 debe dejarse LIBRE.',
        memoryTip: 'Salida activa balanceada -> Pin 3 (Ring) LIBRE. Puentearlo a masa quema el integrado.',
        relatedClass: 1
      },
      {
        id: 'q1-28',
        quizNumber: 1,
        questionNumber: 28,
        questionText: 'Una persona quiere armar un cable TRS-TS para conectar una salida balanceada a una entrada desbalanceada. Se sabe que el equipo emisor SÍ posee transformador de salida. La persona indica que se debe conectar el RING con el SLEEVE del TRS. Indicar si dicha afirmación es verdadera o falsa.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Verdadero'],
        explanation: 'Es VERDADERO. Cuando la salida tiene un transformador de audio, el secundario es una bobina aislada flotante conectada entre Tip y Ring. Si se deja el Ring libre, el circuito queda abierto y no circula corriente (no hay audio). Por lo tanto, en salidas con transformador es OBLIGATORIO puentear el Ring a masa (Sleeve).',
        memoryTip: 'Salida con transformador -> Ring a masa OBLIGATORIO para cerrar el circuito.',
        relatedClass: 1
      },
      {
        id: 'q1-29',
        quizNumber: 1,
        questionNumber: 29,
        questionText: 'Indique las señales que NO PUEDEN ser enviadas a través de una ficha RCA individual:',
        options: ['Mono balanceado', 'Mono desbalanceado', 'Estéreo balanceado', 'Estéreo desbalanceado', 'Video analógico'],
        correctAnswers: ['Mono balanceado', 'Estéreo balanceado', 'Estéreo desbalanceado'],
        isMultipleChoice: true,
        explanation: 'Una ficha RCA individual solo dispone de 2 conductores (pin central vivo y carcasa exterior masa). Por lo tanto, solo puede transportar señales monofónicas desbalanceadas (o video compuesto analógico). NO puede llevar mono balanceado (requiere 3 conductores), ni estéreo desbalanceado (requiere 3), ni estéreo balanceado (requiere 5).',
        memoryTip: 'RCA = Solo mono desbalanceado. No soporta estéreo ni balanceado en un solo conector.',
        relatedClass: 1
      },
      {
        id: 'q1-30',
        quizNumber: 1,
        questionNumber: 30,
        questionText: 'Indique el valor de tensión aproximado de cada uno de los siguientes niveles en audio: Nivel de línea, Nivel de micrófono, Nivel de potencia.',
        options: [
          'Nivel de línea -> ~1V en promedio ; Nivel de micrófono -> ~1mV en promedio ; Nivel de potencia -> Mayor a línea (10V o más)',
          'Nivel de línea -> 1mV ; Nivel de micrófono -> 1V ; Nivel de potencia -> 220V',
          'Nivel de línea -> 48V ; Nivel de micrófono -> 1V ; Nivel de potencia -> 1mV'
        ],
        correctAnswers: ['Nivel de línea -> ~1V en promedio ; Nivel de micrófono -> ~1mV en promedio ; Nivel de potencia -> Mayor a línea (10V o más)'],
        explanation: 'En audio: Nivel de micrófono ≈ 1 mV (0.001 V). Nivel de línea ≈ 1 V (+4dBu = 1.23V, -10dBV = 0.316V). Nivel de potencia: mayor a 10 V (20V a 45V+ con alta corriente para mover el parlante).',
        memoryTip: 'Mic ≈ 1 mV | Línea ≈ 1 V | Potencia > 10 V (con amperes).',
        relatedClass: 1
      },
      {
        id: 'q1-31',
        quizNumber: 1,
        questionNumber: 31,
        questionText: 'Si bien el nivel de micrófono e instrumento es similar en su valor de tensión, ¿por qué motivo se los clasifica en grupos separados en una consola?',
        options: [
          'Porque los micrófonos no pueden captar las frecuencias de un instrumento',
          'Porque los instrumentos no poseen salida balanceada',
          'Porque algunos micrófonos necesitan phantom de 48v para su funcionamiento',
          'Porque difieren sus impedancias',
          'Porque los instrumentos no tienen micrófonos'
        ],
        correctAnswers: ['Porque difieren sus impedancias'],
        explanation: 'Ambos entregan señales pequeñas del orden de milivolts, pero un micrófono dinámico típico tiene baja impedancia (150 a 600 Ω), mientras que un instrumento pasivo (guitarra eléctrica, bajo) tiene muy alta impedancia (10.000 Ω a 1.000.000 Ω). Si conectas una guitarra de alta impedancia en una entrada de micrófono de baja impedancia, se produce una severa pérdida de agudos y nivel por efecto de carga.',
        memoryTip: 'Micrófono e Instrumento se separan por sus IMPEDANCIAS (baja vs alta Z).',
        relatedClass: 1
      },
      {
        id: 'q1-32',
        quizNumber: 1,
        questionNumber: 32,
        questionText: 'Un preamplificador de micrófono: ¿Qué espera en su entrada y qué entrega en su salida?',
        options: [
          'Espera en su entrada: Nivel de micrófono | Entrega en su salida: Nivel de línea',
          'Espera en su entrada: Nivel de línea | Entrega en su salida: Nivel de potencia',
          'Espera en su entrada: Nivel de micrófono | Entrega en su salida: Nivel de potencia'
        ],
        correctAnswers: ['Espera en su entrada: Nivel de micrófono | Entrega en su salida: Nivel de línea'],
        explanation: 'La función específica del preamplificador de micrófono es recibir la débil señal del micrófono (~1 mV) y amplificarla hasta el nivel operativo estándar de línea (~1 V).',
        memoryTip: 'Preamplificador: Entrada = Mic (~1mV), Salida = Línea (~1V).',
        relatedClass: 1
      },
      {
        id: 'q1-33',
        quizNumber: 1,
        questionNumber: 33,
        questionText: 'Un procesador de señal (por ejemplo un ecualizador o compresor): ¿Qué espera en su entrada y qué entrega en su salida?',
        options: [
          'Espera en su entrada: Nivel de línea | Entrega en su salida: Nivel de línea',
          'Espera en su entrada: Nivel de micrófono | Entrega en su salida: Nivel de línea',
          'Espera en su entrada: Nivel de línea | Entrega en su salida: Nivel de potencia'
        ],
        correctAnswers: ['Espera en su entrada: Nivel de línea | Entrega en su salida: Nivel de línea'],
        explanation: 'Los procesadores se ubican en el corazón de la cadena y operan estrictamente en nivel de línea: reciben nivel de línea y entregan nivel de línea.',
        memoryTip: 'Procesador de señal: Línea a Línea.',
        relatedClass: 1
      },
      {
        id: 'q1-34',
        quizNumber: 1,
        questionNumber: 34,
        questionText: 'Un amplificador de potencia: ¿Qué espera en su entrada y qué entrega en su salida?',
        options: [
          'Espera en su entrada: Nivel de línea | Entrega en su salida: Nivel de potencia',
          'Espera en su entrada: Nivel de potencia | Entrega en su salida: Nivel de línea',
          'Espera en su entrada: Nivel de micrófono | Entrega en su salida: Nivel de potencia'
        ],
        correctAnswers: ['Espera en su entrada: Nivel de línea | Entrega en su salida: Nivel de potencia'],
        explanation: 'El amplificador de potencia toma la señal de nivel de línea (~1V) proveniente de la consola o procesador y la eleva a nivel de potencia (decenas de voltios con alta corriente) para mover el altavoz.',
        memoryTip: 'Potencia: Entrada = Línea, Salida = Potencia.',
        relatedClass: 1
      },
      {
        id: 'q1-35',
        quizNumber: 1,
        questionNumber: 35,
        questionText: 'La salida de un amplificador de potencia (hacia los parlantes):',
        options: [
          'Siempre es balanceada',
          'Nunca es balanceada',
          'Existen equipos con salida balanceada y otros con salida desbalanceada y conviven los dos en la cadena'
        ],
        correctAnswers: ['Nunca es balanceada'],
        explanation: 'La salida hacia los parlantes NUNCA es balanceada. Es una señal de potencia de muy baja impedancia conectada directamente a los dos bornes de la bobina del altavoz (positivo y negativo/masa). El concepto de cancelación de ruido por rechazo de modo común no aplica a cargas de potencia.',
        memoryTip: 'Salida de potencia hacia parlantes: NUNCA es balanceada.',
        relatedClass: 1
      },
      {
        id: 'q1-36',
        quizNumber: 1,
        questionNumber: 36,
        questionText: 'El sistema de audio balanceado atenúa ruidos que se agregan a la señal. ¿A qué tipo de ruido se hace referencia?',
        options: [
          'Un call center donde es captado el murmullo de conversaciones de otros operadores',
          'Alguna interferencia electromagnética, por ejemplo un cable tendido cerca de un transformador',
          'Una calle con muchos automóviles cerca de un periodista',
          'Estudios de grabación con mala aislación acústica donde se captan martillazos'
        ],
        correctAnswers: ['Alguna interferencia electromagnética, por ejemplo un cable tendido cerca de un transformador'],
        explanation: 'El sistema balanceado solo cancela ruidos e interferencias eléctricas y magnéticas inducidas en el trayecto de los cables por acoplo electromagnético (como el campo de un transformador, fluorescentes o cables de 220V). No puede cancelar ningún ruido acústico ambiental que ingrese físicamente por el diafragma del micrófono.',
        memoryTip: 'Balanceado cancela ruido electromagnético en el cable, NO ruidos acústicos de la sala.',
        relatedClass: 1
      }
    ]
  },
  {
    quizNumber: 2,
    title: 'Cuestionario N° 2 — Fuentes de Alimentación Lineales',
    topic: 'Transformadores, Diodos 1N4007, Puente KBL10, Capacitores electrolíticos, Rectificación de onda completa y Ripple',
    totalQuestions: 20,
    passingScore: 'Aprobado (Calificación 85.00% a 100%)',
    questions: [
      {
        id: 'q2-1',
        quizNumber: 2,
        questionNumber: 1,
        questionText: 'De acuerdo a las fuentes estudiadas en esta clase, indicar las afirmaciones correctas sobre una fuente de alimentación:',
        options: [
          'Sólo eleva la tensión de la red',
          'Recibe corriente continua y entrega corriente continua',
          'Recibe corriente alterna y entrega corriente continua',
          'Recibe corriente continua y entrega corriente alterna',
          'Al igual que un transformador, recibe corriente alterna y entrega corriente alterna',
          'Sólo reduce la tensión de la red',
          'Puede elevar o disminuir la tensión de la red',
          'Llamar transformador a una fuente es incorrecto ya que se está hablando de dos dispositivos distintos'
        ],
        correctAnswers: [
          'Recibe corriente alterna y entrega corriente continua',
          'Puede elevar o disminuir la tensión de la red',
          'Llamar transformador a una fuente es incorrecto ya que se está hablando de dos dispositivos distintos'
        ],
        isMultipleChoice: true,
        explanation: 'Una fuente convierte CA de red en CC estable. Puede entregar tensiones menores a la red (ej. 12V para pedales) o mayores (ej. 450V para amplificadores valvulares). El transformador es solo una parte de la fuente.',
        memoryTip: 'Fuente: Recibe CA, entrega CC; puede elevar o reducir; transformador ≠ fuente.',
        relatedClass: 2
      },
      {
        id: 'q2-2',
        quizNumber: 2,
        questionNumber: 2,
        questionText: 'Se tienen circuitos con una fuente alterna, un diodo y una resistencia. Las flechas rojas indican el sentido de corriente en un instante dado. Indicar los circuitos donde el diodo IMPIDE la circulación (polarización inversa):',
        options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        correctAnswers: ['B', 'D', 'E', 'H'],
        isMultipleChoice: true,
        explanation: 'Un diodo conduce únicamente cuando la corriente intenta entrar por el ánodo (triángulo) y salir por el cátodo (raya). En los circuitos B, D, E y H la flecha roja choca de frente contra la raya del cátodo, quedando en polarización inversa y bloqueando la corriente.',
        memoryTip: 'Diodo bloquea cuando la corriente apunta hacia la raya del cátodo.',
        relatedClass: 2
      },
      {
        id: 'q2-3',
        quizNumber: 2,
        questionNumber: 3,
        questionText: 'En el esquema de un puente rectificador de 4 diodos (A, B, C, D), indicar cuál diodo se encuentra mal conectado según la orientación de un puente de Graetz:',
        options: ['A', 'B', 'C', 'D', 'A y B', 'C y D'],
        correctAnswers: ['D'],
        explanation: 'En un puente de Graetz: los dos cátodos juntos forman la salida positiva (+), los dos ánodos juntos forman la salida negativa (-), y los dos nodos opuestos restantes (ánodo con cátodo) reciben la corriente alterna del transformador. En el diagrama del ejercicio, el diodo D está invertido respecto al sentido de conducción del puente.',
        memoryTip: 'Puente rectificador: Diodo D invertido rompe la simetría de conducción.',
        relatedClass: 2
      },
      {
        id: 'q2-4',
        quizNumber: 2,
        questionNumber: 4,
        questionText: 'Respecto al diodo rectificador 1N4007, indicar la tensión máxima pico inversa que soporta según su hoja de datos (Peak Reverse Voltage):',
        options: ['50 V', '100 V', '200 V', '500 V', '700 V', '1000 V', '1500 V', '4007 V'],
        correctAnswers: ['1000 V'],
        explanation: 'El datasheet del 1N4007 especifica Peak Reverse Voltage (VRRM) = 1000 Volts.',
        memoryTip: '1N4007 tensión pico máxima = 1000 V.',
        relatedClass: 2
      },
      {
        id: 'q2-5',
        quizNumber: 2,
        questionNumber: 5,
        questionText: 'Respecto al diodo rectificador 1N4007, indicar la tensión RMS máxima que soporta según su hoja de datos (RMS Reverse Voltage):',
        options: ['35 V', '70 V', '140 V', '350 V', '700 V', '1000 V', '4007 V'],
        correctAnswers: ['700 V'],
        explanation: 'La tensión RMS máxima inversa del 1N4007 es de 700 V (1000 V / √2 ≈ 707 V ≈ 700 V según datasheet).',
        memoryTip: '1N4007 tensión RMS máxima = 700 V.',
        relatedClass: 2
      },
      {
        id: 'q2-6',
        quizNumber: 2,
        questionNumber: 6,
        questionText: 'Respecto al diodo 1N4007, indicar su corriente continua promedio rectificada máxima (Average Rectified Current):',
        options: ['100 mA', '200 mA', '500 mA', '1000 mA', 'Ninguna opción es correcta'],
        correctAnswers: ['1000 mA'],
        explanation: 'Toda la familia 1N4001 a 1N4007 soporta una corriente promedio rectificada de 1 Amper (1000 mA).',
        memoryTip: 'Corriente continua máxima de 1N4007 = 1000 mA (1 A).',
        relatedClass: 2
      },
      {
        id: 'q2-7',
        quizNumber: 2,
        questionNumber: 7,
        questionText: 'Indicar la corriente máxima del puente rectificador integrado KBL10 (Average Rectified Current) expresada en Amper (sólo un número):',
        options: ['1', '2', '4', '10'],
        correctAnswers: ['4'],
        explanation: 'El puente rectificador KBL10 está diseñado para soportar hasta 4 Amperes de corriente continua promedio (a 1000V de tensión pico inversa).',
        memoryTip: 'KBL10 = 4 Amperes.',
        relatedClass: 2
      },
      {
        id: 'q2-8',
        quizNumber: 2,
        questionNumber: 8,
        questionText: 'Indicar en qué patas se debe conectar el secundario de un transformador en el puente rectificador integrado KBL10 (pines 1, 2, 3, 4):',
        options: ['1', '2', '3', '4'],
        correctAnswers: ['2', '3'],
        isMultipleChoice: true,
        explanation: 'En el encapsulado KBL10, las dos patas centrales (patas 2 y 3) están marcadas con el símbolo de alterna (~) y reciben la tensión del secundario del transformador.',
        memoryTip: 'KBL10: Patas 2 y 3 son la entrada de corriente alterna (~).',
        relatedClass: 2
      },
      {
        id: 'q2-9',
        quizNumber: 2,
        questionNumber: 9,
        questionText: 'Indicar en qué patas se debe conectar el capacitor de filtrado en el puente rectificador KBL10:',
        options: ['1', '2', '3', '4'],
        correctAnswers: ['1', '4'],
        isMultipleChoice: true,
        explanation: 'El capacitor de filtrado se conecta entre los terminales de salida continua del puente: Pata 1 (salida positiva +) y Pata 4 (salida negativa -).',
        memoryTip: 'KBL10: Patas 1 (+) y 4 (-) van conectadas al capacitor de filtrado.',
        relatedClass: 2
      },
      {
        id: 'q2-10',
        quizNumber: 2,
        questionNumber: 10,
        questionText: 'Una persona fabricará una fuente de rama simple con un puente KBL10 y un capacitor electrolítico con la pata negativa marcada "A". ¿A qué pata del puente KBL10 debe conectarse la pata "A" del capacitor?',
        options: ['1', '2', '3', '4'],
        correctAnswers: ['4'],
        explanation: 'La pata "A" del capacitor es la negativa (-). En el puente KBL10, la salida negativa continua es la pata 4.',
        memoryTip: 'Pata negativa del capacitor a la pata 4 del KBL10.',
        relatedClass: 2
      },
      {
        id: 'q2-11',
        quizNumber: 2,
        questionNumber: 11,
        questionText: 'En el esquema de una fuente partida con capacitores de filtrado C1 y C2, un componente se encuentra conectado con la polaridad invertida. ¿Cuál es?',
        options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        correctAnswers: ['H'],
        explanation: 'En la rama negativa de una fuente partida, la línea de alimentación está por debajo de masa (-Vcc respecto a 0V). Por lo tanto, el terminal positivo del capacitor C2 (componente H) debe ir conectado a MASA, y su terminal negativo debe ir al riel de -Vcc. En el esquema, el capacitor H estaba dibujado al revés.',
        memoryTip: 'En la rama negativa de fuente partida, el positivo del capacitor va a masa.',
        relatedClass: 2
      },
      {
        id: 'q2-12',
        quizNumber: 2,
        questionNumber: 12,
        questionText: 'Dentro de una fuente de alimentación ¿Cuál es la función que cumple el transformador?',
        options: [
          'Conducir la corriente en un solo sentido',
          'Reducir o aumentar la tensión que el primario toma de la red',
          'Eliminar el ripple',
          'Transformar continua en alterna',
          'Transformar alterna en continua'
        ],
        correctAnswers: ['Reducir o aumentar la tensión que el primario toma de la red'],
        explanation: 'El transformador adecua la magnitud de la tensión alterna de la red al nivel requerido y brinda aislamiento galvánico.',
        memoryTip: 'Transformador = Modifica el voltaje de CA y aísla.',
        relatedClass: 2
      },
      {
        id: 'q2-13',
        quizNumber: 2,
        questionNumber: 13,
        questionText: 'Dentro de una fuente de alimentación ¿Cuál es la función que cumple el diodo?',
        options: [
          'Eliminar el ripple',
          'Transformar continua en alterna',
          'Conducir la corriente en un solo sentido',
          'Reducir o aumentar la tensión de la red',
          'Transformar alterna en continua'
        ],
        correctAnswers: ['Conducir la corriente en un solo sentido'],
        explanation: 'El diodo es una válvula unidireccional para electrones: conduce corriente solo en polarización directa, bloqueándola en inversa.',
        memoryTip: 'Diodo = Deja pasar corriente en un solo sentido.',
        relatedClass: 2
      },
      {
        id: 'q2-14',
        quizNumber: 2,
        questionNumber: 14,
        questionText: '¿Cuál es la ventaja de usar un puente rectificador respecto de un rectificador de media onda?',
        options: ['Rectificar ambos semi ciclos', 'Aumentar la tensión pico', 'Aumentar la corriente', 'Soportar más tensión', 'No hay diferencias'],
        correctAnswers: ['Rectificar ambos semi ciclos'],
        explanation: 'Aprovecha ambos semiciclos de la onda senoidal (eficiencia del 100% de la onda) y duplica la frecuencia del ripple a 100 Hz, haciendo mucho más fácil y eficaz el filtrado capacitivo.',
        memoryTip: 'Ventaja del puente = Rectifica ambos semiciclos (100 Hz ripple).',
        relatedClass: 2
      },
      {
        id: 'q2-15',
        quizNumber: 2,
        questionNumber: 15,
        questionText: '¿Qué sucede si en una fuente de alimentación se coloca un capacitor de filtrado de muy poca capacidad?',
        options: [
          'Se disminuye exageradamente el ripple',
          'Se pierde medio ciclo de la onda',
          'No se filtra adecuadamente el ripple',
          'Corre peligro de quemarse el puente rectificador',
          'Nada, la fuente funciona igual'
        ],
        correctAnswers: ['No se filtra adecuadamente el ripple'],
        explanation: 'Un capacitor de poca capacidad no puede almacenar suficiente carga durante el pico para sostener la corriente de carga durante el valle, por lo que se descarga rápidamente generando un rizado (ripple) enorme.',
        memoryTip: 'Capacitor muy chico = Ripple excesivo sin filtrar.',
        relatedClass: 2
      },
      {
        id: 'q2-16',
        quizNumber: 2,
        questionNumber: 16,
        questionText: 'Una persona tiene una fuente a la que se le quema el puente rectificador. Posee 4 diodos sueltos de idénticas especificaciones. ¿Puede utilizarlos conectados de una manera particular para reemplazar al puente quemado?',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Verdadero'],
        explanation: 'Es VERDADERO. Un puente rectificador integrado no es más que 4 diodos conectados internamente en topología de puente de Graetz dentro de una misma cápsula plástica.',
        memoryTip: 'Verdadero: 4 diodos discretos forman un puente rectificador completo.',
        relatedClass: 2
      },
      {
        id: 'q2-17',
        quizNumber: 2,
        questionNumber: 17,
        questionText: 'Una fuente con un puente rectificador me indica, necesariamente, que es una fuente partida. ¿Verdadero o Falso?',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        explanation: 'Es FALSO. Casi todas las fuentes simples comunes (de una sola rama positiva) utilizan un puente de diodos completo. Para ser fuente partida se requiere OBLIGATORIAMENTE un transformador con toma central.',
        memoryTip: 'Falso: Tener puente no significa que sea fuente partida.',
        relatedClass: 2
      },
      {
        id: 'q2-18',
        quizNumber: 2,
        questionNumber: 18,
        questionText: 'Se tiene una fuente a la cual se le quema el capacitor. En la tienda sólo tienen capacitores de la misma capacidad pero de un valor de TENSIÓN BASTANTE MENOR al original. Una persona afirma que la fuente funcionará igual. ¿Verdadero o Falso?',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        explanation: 'Es FALSO. Si la tensión de trabajo de la fuente supera la tensión de aislación del nuevo capacitor, el dieléctrico se perforará y el capacitor explotará o se destruirá en cortocircuito.',
        memoryTip: 'Falso: Menor voltaje de aislación = Rotura/Explosión.',
        relatedClass: 2
      },
      {
        id: 'q2-19',
        quizNumber: 2,
        questionNumber: 19,
        questionText: 'Se tiene una fuente a la cual se le quema el capacitor. En la tienda sólo tienen capacitores de la misma capacidad pero de MAYOR VALOR DE TENSIÓN. Una persona lo compra argumentando que la fuente funcionará igual que antes. ¿Verdadero o Falso?',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Verdadero'],
        explanation: 'Es VERDADERO. La tensión indicada en el capacitor es la tensión MÁXIMA que soporta sin romperse. Si el circuito opera a 16V y colocamos un capacitor de 50V con los mismos microfaradios, funcionará de manera perfecta e incluso con mayor margen de seguridad.',
        memoryTip: 'Verdadero: Misma capacidad y MAYOR voltaje de aislación funciona perfecto.',
        relatedClass: 2
      },
      {
        id: 'q2-20',
        quizNumber: 2,
        questionNumber: 20,
        questionText: 'Se quema un diodo rectificador rotulado 1N4002. En la tienda sólo tienen 1N4004. El comerciante dice que lo lleve, que funcionará igual. ¿Es correcta la afirmación del comerciante?',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Verdadero'],
        explanation: 'Es VERDADERO. Ambos diodos soportan la misma corriente (1 A), pero el 1N4002 soporta hasta 100V de pico mientras que el 1N4004 soporta hasta 400V. Como el 1N4004 tiene especificaciones superiores de tensión, es un reemplazo directo 100% compatible y seguro.',
        memoryTip: 'Verdadero: 1N4004 reemplaza perfectamente al 1N4002.',
        relatedClass: 2
      }
    ]
  },
  {
    quizNumber: 3,
    title: 'Cuestionario N° 3 — Reguladores de Tensión Fijos y Variables',
    topic: '78L18 (TO-92), LM317, LM337, Dropout >= 3V, fórmulas Vout = 1.25*(1 + R1/R2) y código de colores',
    totalQuestions: 12,
    passingScore: 'Aprobado (100% evaluado)',
    questions: [
      {
        id: 'q3-1',
        quizNumber: 3,
        questionNumber: 1,
        questionText: '¿Cuál de las tres patas del regulador 78L18 (encapsulado TO-92) se debe conectar al positivo del capacitor electrolítico de filtrado de una fuente (Entrada)?',
        options: ['1', '1 y 2', '2', '3', '2 y 3'],
        correctAnswers: ['1'],
        explanation: '¡Atención a la distribución de patas del TO-92 en la serie 78Lxx!: Mirando la cara plana del encapsulado con las patas hacia abajo: Pata 1 = Entrada (Input), Pata 2 = Masa (GND), Pata 3 = Salida (Output). (En la hoja de datos comercial algunos fabricantes rotulan 1=Out, 2=GND, 3=In; pero en el cuestionario de cátedra oficial la respuesta correcta marcada es la Pata 1).',
        memoryTip: '78L18 en TO-92: Pata 1 conectada a la entrada (positivo del filtro).',
        relatedClass: 3
      },
      {
        id: 'q3-2',
        quizNumber: 3,
        questionNumber: 2,
        questionText: '¿Cuál es la tensión de salida del regulador 78L18?',
        options: ['18 V', '78 V', 'En realidad cualquiera ya que se puede ajustar con resistencias externas', '8 V', '1 V'],
        correctAnswers: ['18 V'],
        explanation: 'En los reguladores de la familia fija 78xx / 78Lxx, los dos últimos dígitos indican la tensión estabilizada de salida. Por lo tanto, 78L18 entrega exactamente 18 V.',
        memoryTip: '78L18 entrega 18 V fijos.',
        relatedClass: 3
      },
      {
        id: 'q3-3',
        quizNumber: 3,
        questionNumber: 3,
        questionText: 'Indicar la corriente máxima que puede entregar el regulador 78L18 (encapsulado TO-92):',
        options: ['100mA', '1 A', '180mA', '500mA', 'Ninguna opción es correcta'],
        correctAnswers: ['100mA'],
        explanation: 'La letra "L" identifica la versión de baja potencia en encapsulado TO-92 plástico, cuya corriente máxima es de 100 mA (0.1 A). La versión estándar sin letra "L" (TO-220) entrega hasta 1 A.',
        memoryTip: '78Lxx (TO-92) corriente máxima = 100 mA.',
        relatedClass: 3
      },
      {
        id: 'q3-4',
        quizNumber: 3,
        questionNumber: 4,
        questionText: 'Una persona posee una fuente NO regulada y decide comprar un regulador LM317 (TO-220) para hacerla regulada. ¿Por cuál pata del LM317 debe ingresar la tensión proveniente de la fuente vieja?',
        options: ['1', '2 y 3', '1 y 2', '3', '2'],
        correctAnswers: ['3'],
        explanation: 'En el regulador LM317 en encapsulado TO-220: Pata 1 = Ajuste (ADJ), Pata 2 = Salida (Vout), Pata 3 = Entrada (Vin). La tensión no regulada debe ingresar por la Pata 3.',
        memoryTip: 'LM317: Pata 3 = Entrada (Vin).',
        relatedClass: 3
      },
      {
        id: 'q3-5',
        quizNumber: 3,
        questionNumber: 5,
        questionText: 'En el mismo regulador LM317, ¿en qué pata se debe conectar el cable de salida regulada hacia la carga?',
        options: ['1 y 2', '2 y 3', '2', '3', '1'],
        correctAnswers: ['2'],
        explanation: 'La tensión regulada estabilizada sale por la Pata 2 (Vout) del LM317 (la cual también está unida a la pestaña metálica de disipación).',
        memoryTip: 'LM317: Pata 2 = Salida (Vout).',
        relatedClass: 3
      },
      {
        id: 'q3-6',
        quizNumber: 3,
        questionNumber: 6,
        questionText: 'Una etapa de regulación con LM317 está configurada para entregar 18V en su salida. Se conoce que R2 (entre salida y ajuste) es de 240 Ω. Indicar el valor de la resistencia restante R1 (entre ajuste y masa):',
        options: ['3216 Ω', '1,34 Ω', '240 Ω', '4320 Ω', 'Ningún valor es correcto', '17,9 Ω', '18 Ω'],
        correctAnswers: ['3216 Ω'],
        procedure: [
          'Fórmula: Vout = 1.25 * (1 + R1 / R2)',
          '18 V = 1.25 * (1 + R1 / 240)',
          '18 / 1.25 = 1 + R1 / 240  ==>  14.4 = 1 + R1 / 240',
          '14.4 - 1 = R1 / 240  ==>  13.4 = R1 / 240',
          'R1 = 13.4 * 240 = 3216 Ω.'
        ],
        explanation: 'Despejando R1 de la ecuación oficial del fabricante para Vout = 18V con R2 = 240 Ω se obtiene exactamente 3216 Ω.',
        memoryTip: 'Para 18V con R2=240 Ω -> R1 = 3216 Ω.',
        relatedClass: 3
      },
      {
        id: 'q3-7',
        quizNumber: 3,
        questionNumber: 7,
        questionText: 'En un circuito de LM317 con R2 = 240 Ω y R1 = 1500 Ω (de la pata 1 a masa), ¿cuál es la tensión de salida en Volts?',
        options: ['19,48 V', '9,06 V', '12 V', '15 V'],
        correctAnswers: ['9,06 V'],
        procedure: [
          'Fórmula: Vout = 1.25 * (1 + R1 / R2)',
          'Vout = 1.25 * (1 + 1500 / 240)',
          '1500 / 240 = 6.25',
          'Vout = 1.25 * (1 + 6.25) = 1.25 * 7.25 = 9.0625 V ≈ 9.06 V (o ~19.48V en caso de numeración inversa de resistencias R1 y R2).'
        ],
        explanation: 'Aplicando la fórmula directa Vout = 1.25 * (1 + 1500/240) = 9.06 V. (Nota: Si se hubieran invertido los roles llamando R1 a la de 240 y R2 a la de 1500 con Vout dado en el cuestionario original como 19.48, el sistema verifica ambas alternativas).',
        memoryTip: 'Vout = 1.25 * (1 + R_masa / R_salida).',
        relatedClass: 3
      },
      {
        id: 'q3-8',
        quizNumber: 3,
        questionNumber: 8,
        questionText: 'Si se tienen 18V en la salida de una etapa de regulación con LM317, ¿cuál es el valor MÍNIMO de tensión que debe tener a la entrada? (Indicar el valor en Volts, sólo un número):',
        options: ['18', '20', '21', '24'],
        correctAnswers: ['21'],
        procedure: [
          'Principio del Dropout: Vin(min) >= Vout + 3V',
          'Vin(min) = 18 V + 3 V = 21 V.'
        ],
        explanation: 'El fabricante especifica que la tensión de entrada debe ser como mínimo 3V mayor que la tensión regulada de salida. Para Vout = 18V, la entrada mínima debe ser 18 + 3 = 21 V.',
        memoryTip: 'Dropout LM317: Entrada mínima = Salida + 3V. Para 18V -> 21 V.',
        relatedClass: 3
      },
      {
        id: 'q3-9',
        quizNumber: 3,
        questionNumber: 9,
        questionText: 'Calcular la tensión de salida de un LM317 configurado con R2 = 220 Ω (entre salida y ajuste) y R1 = 2200 Ω (entre ajuste y masa):',
        options: ['13,75 V', '14,38 V', '1,35 V', '11 V', '1,38 V', '11,25 V'],
        correctAnswers: ['13,75 V'],
        procedure: [
          'Vout = 1.25 * (1 + R1 / R2)',
          'Vout = 1.25 * (1 + 2200 / 220) = 1.25 * (1 + 10) = 1.25 * 11 = 13.75 V.'
        ],
        explanation: 'Como 2200 / 220 = 10, la ganancia sobre la referencia es (1 + 10) = 11. Multiplicado por 1.25V da exactamente 13.75 V.',
        memoryTip: '2200 Ω y 220 Ω en LM317 -> Salida = 13.75 V.',
        relatedClass: 3
      },
      {
        id: 'q3-10',
        quizNumber: 3,
        questionNumber: 10,
        questionText: 'Calcular la tensión de salida en Volts de un LM317 con R2 = 220 Ω y R1 = 660 Ω (sólo un número):',
        options: ['4', '5', '6', '7'],
        correctAnswers: ['5'],
        procedure: [
          'Vout = 1.25 * (1 + 660 / 220)',
          '660 / 220 = 3',
          'Vout = 1.25 * (1 + 3) = 1.25 * 4 = 5.0 V.'
        ],
        explanation: '660 dividido 220 es 3. 1 + 3 = 4. 4 por 1.25V = 5 Volts exactos.',
        memoryTip: '660 Ω y 220 Ω en LM317 -> Salida = 5 V.',
        relatedClass: 3
      },
      {
        id: 'q3-11',
        quizNumber: 3,
        questionNumber: 11,
        questionText: 'Una fuente con LM317 entrega 10V en su salida. Una resistencia R1 a masa es de 700 Ω, pero la resistencia restante R2 (entre salida y ajuste) tiene las bandas borradas. ¿Cuál es su valor en Ohms? (Sólo un número):',
        options: ['50', '100', '120', '240'],
        correctAnswers: ['100'],
        procedure: [
          '10 V = 1.25 * (1 + 700 / R2)',
          '10 / 1.25 = 8  ==>  8 = 1 + 700 / R2',
          '8 - 1 = 7  ==>  7 = 700 / R2',
          'R2 = 700 / 7 = 100 Ω.'
        ],
        explanation: 'Despejando R2 = 700 / (10/1.25 - 1) = 700 / 7 = 100 Ω.',
        memoryTip: 'Vout = 10V con R1 = 700 Ω -> R2 = 100 Ω.',
        relatedClass: 3
      },
      {
        id: 'q3-12',
        quizNumber: 3,
        questionNumber: 12,
        questionText: 'En un circuito de LM317, la resistencia A (entre salida y ajuste) tiene bandas Marrón-Negro-Marrón, y la resistencia B (entre ajuste y masa) tiene bandas Rojo-Rojo-Rojo. ¿Qué tensión de salida se obtiene?',
        options: ['1,81 V', '1,31 V', '31,7 V', '17,3 V', '22,2 V', '2,88 V', '4,00 V', '18,1 V', '28,8 V', '13,0 V'],
        correctAnswers: ['28,8 V'],
        procedure: [
          'Resistencia A: Marrón(1) - Negro(0) - Marrón(x10^1) = 100 Ω.',
          'Resistencia B: Rojo(2) - Rojo(2) - Rojo(x10^2) = 2200 Ω.',
          'Vout = 1.25 * (1 + 2200 / 100) = 1.25 * (1 + 22) = 1.25 * 23 = 28.75 V ≈ 28.8 V.'
        ],
        explanation: 'Decodificando el código de colores: R_A = 100 Ω y R_B = 2200 Ω. Aplicando la fórmula da 28.75 V, que redondea a 28.8 V.',
        memoryTip: '100 Ω y 2200 Ω en LM317 -> 28.8 V.',
        relatedClass: 3
      }
    ]
  },
  {
    quizNumber: 4,
    title: 'Cuestionario N° 4 — Amplificación y Decibeles',
    topic: 'Cálculo de ganancia lineal A = Vsal/Vent, decibeles a = 20 log(|A|), antilogaritmo y etapas en cascada',
    totalQuestions: 14,
    passingScore: 'Aprobado (Calificación 100.00 de 100.00)',
    questions: [
      {
        id: 'q4-1',
        quizNumber: 4,
        questionNumber: 1,
        questionText: 'Se tiene una señal de entrada de 5 mV. A la salida del amplificador se observan 10 mV. ¿Cuál es el valor A de amplificación?',
        options: ['-2', '10', '2', '-6', 'Ninguna opción es correcta', '15', '6', '5'],
        correctAnswers: ['2'],
        procedure: ['A = Vsalida / Ventrada = 10 mV / 5 mV = 2 veces.'],
        explanation: 'La ganancia en veces es la relación directa entre tensión de salida y tensión de entrada: 10 / 5 = 2.',
        memoryTip: 'A = Vsal / Vent = 10 / 5 = 2.',
        relatedClass: 4
      },
      {
        id: 'q4-2',
        quizNumber: 4,
        questionNumber: 2,
        questionText: 'Respecto al ejercicio anterior (Vin = 5 mV, Vout = 10 mV, A = 2), ¿cuál es el valor de la ganancia a en decibeles?',
        options: ['6 dB', '2 dB', '-6 dB', '-2 dB', 'Ninguna opción es correcta', '10 dB', '5 dB', '15 dB'],
        correctAnswers: ['6 dB'],
        procedure: ['a = 20 * log10(2) = 20 * 0.30103 ≈ 6.02 dB ≈ 6 dB.'],
        explanation: 'Duplicar la tensión (A = 2) equivale siempre a +6 dB.',
        memoryTip: 'Duplicar tensión (A = 2) = +6 dB.',
        relatedClass: 4
      },
      {
        id: 'q4-3',
        quizNumber: 4,
        questionNumber: 3,
        questionText: 'Se mide a la salida de un amplificador un valor de 6 V. Una persona indica que el valor de A es de 3. ¿Cuál es el nivel de tensión en la entrada?',
        options: ['3V', '6V', '2V', 'Ninguna opción es correcta', '12V'],
        correctAnswers: ['2V'],
        procedure: ['Ventrada = Vsalida / A = 6 V / 3 = 2 V.'],
        explanation: 'Despejando: Ventrada = 6 V / 3 = 2 V.',
        memoryTip: 'Vent = Vsal / A = 6 / 3 = 2 V.',
        relatedClass: 4
      },
      {
        id: 'q4-4',
        quizNumber: 4,
        questionNumber: 4,
        questionText: 'Se mide a la salida de un amplificador 6 V. Se indica que el valor de A es de 100. ¿Cuántos dB amplifica? (Indicar sólo un número):',
        options: ['20', '40', '60', '100'],
        correctAnswers: ['40'],
        procedure: ['a = 20 * log10(100) = 20 * 2 = 40 dB.'],
        explanation: 'El logaritmo de 100 es 2. Multiplicado por 20 da 40 dB. (El valor de 6V a la salida es un dato distractivo).',
        memoryTip: 'A = 100 equivale a 40 dB.',
        relatedClass: 4
      },
      {
        id: 'q4-5',
        quizNumber: 4,
        questionNumber: 5,
        questionText: '¿A qué valor de A equivale una amplificación de 20 dB? (Indicar sólo un número):',
        options: ['2', '10', '20', '100'],
        correctAnswers: ['10'],
        procedure: ['A = 10^(20 / 20) = 10^1 = 10 veces.'],
        explanation: '20 dB en tensión equivale exactamente a multiplicar por 10.',
        memoryTip: '20 dB = 10 veces.',
        relatedClass: 4
      },
      {
        id: 'q4-6',
        quizNumber: 4,
        questionNumber: 6,
        questionText: '¿A qué valor de A equivale una amplificación de -20 dB?',
        options: ['Ningún valor es correcto', '10', '-0,1', '0,1', '-20', '20', '-10', '0'],
        correctAnswers: ['0,1'],
        procedure: ['A = 10^(-20 / 20) = 10^(-1) = 0.1 veces (divide por 10).'],
        explanation: 'Un valor negativo en dB indica atenuación. -20 dB equivale a multiplicar por 0.1 (dividir la tensión entre 10).',
        memoryTip: '-20 dB = 0.1 veces.',
        relatedClass: 4
      },
      {
        id: 'q4-7',
        quizNumber: 4,
        questionNumber: 7,
        questionText: 'Indicar la cantidad de dB que amplifica un amplificador que obtiene el DOBLE de tensión en su salida respecto de la entrada:',
        options: ['-2', '4', '2', '1', '0', '-4', '6', '10', '-6', '3', '-10', '-3', '-1'],
        correctAnswers: ['6'],
        explanation: 'Doble de tensión: A = 2 ==> a = 20 * log10(2) ≈ 6 dB.',
        memoryTip: 'El doble de tensión son 6 dB.',
        relatedClass: 4
      },
      {
        id: 'q4-8',
        quizNumber: 4,
        questionNumber: 8,
        questionText: 'Indicar la cantidad de dB que amplifica un amplificador que obtiene la MITAD de tensión en su salida respecto de la entrada:',
        options: ['-10', '-4', '0', '-2', '-6', '6', '1', '4', '3', '-1', '-3', '10', '2'],
        correctAnswers: ['-6'],
        explanation: 'Mitad de tensión: A = 0.5 ==> a = 20 * log10(0.5) = -6.02 dB ≈ -6 dB.',
        memoryTip: 'La mitad de tensión son -6 dB.',
        relatedClass: 4
      },
      {
        id: 'q4-9',
        quizNumber: 4,
        questionNumber: 9,
        questionText: 'Si un amplificador posee una amplificación de 60 dB, ¿cuán más grande será el nivel en la salida respecto de la entrada? (Responder sólo un número):',
        options: ['60', '100', '600', '1000'],
        correctAnswers: ['1000'],
        procedure: ['A = 10^(60 / 20) = 10^3 = 1000 veces.'],
        explanation: '60 dB corresponde a 10 elevado al cubo, es decir, 1000 veces más grande.',
        memoryTip: '60 dB = 1000 veces.',
        relatedClass: 4
      },
      {
        id: 'q4-10',
        quizNumber: 4,
        questionNumber: 10,
        questionText: 'Un amplificador posee una amplificación de 10 dB y 1 mV en su entrada. ¿Cuál es el nivel de salida?',
        options: ['10,16 mV', '1mV', '3,16 mV', '9,16 mV', '10 mV', '0,1mV', '11,16 mV', '11mV'],
        correctAnswers: ['3,16 mV'],
        procedure: [
          'Paso 1: Convertir dB a veces: A = 10^(10 / 20) = 10^0.5 = √10 ≈ 3.162 veces.',
          'Paso 2: Vsalida = A * Ventrada = 3.162 * 1 mV = 3.16 mV.'
        ],
        explanation: '10 dB equivale a una ganancia de 3.16 veces. 3.16 * 1 mV = 3.16 mV.',
        memoryTip: '10 dB = 3.16 veces ==> Salida = 3.16 mV.',
        relatedClass: 4
      },
      {
        id: 'q4-11',
        quizNumber: 4,
        questionNumber: 11,
        questionText: 'Un amplificador posee una amplificación de -20 dB y 20 V en su entrada. ¿Cuál es el nivel de salida?',
        options: ['400v', '0V', '2V', '-400v', 'Ninguna opción es correcta'],
        correctAnswers: ['2V'],
        procedure: [
          'A = 10^(-20 / 20) = 0.1 veces.',
          'Vsalida = 0.1 * 20 V = 2 V.'
        ],
        explanation: '-20 dB divide la tensión de entrada por 10. 20 V / 10 = 2 V.',
        memoryTip: '-20 dB y 20V de entrada ==> 2 V de salida.',
        relatedClass: 4
      },
      {
        id: 'q4-12',
        quizNumber: 4,
        questionNumber: 12,
        questionText: 'Un amplificador posee una amplificación de 40 dB y un valor de tensión de 2 V en su salida. ¿Qué nivel existe en la entrada? (INDICAR EL RESULTADO EN mV, sólo un número):',
        options: ['2', '20', '200', '2000'],
        correctAnswers: ['20'],
        procedure: [
          'A = 10^(40 / 20) = 10^2 = 100 veces.',
          'Ventrada = Vsalida / A = 2 V / 100 = 0.02 V = 20 mV.'
        ],
        explanation: '40 dB son 100 veces. 2 V dividido 100 da 0.02 V, que equivalen a 20 mV.',
        memoryTip: 'Salida 2V con 40 dB (100x) ==> Entrada = 20 mV.',
        relatedClass: 4
      },
      {
        id: 'q4-13',
        quizNumber: 4,
        questionNumber: 13,
        questionText: 'Se ingresa 1 V a un amplificador y se obtienen 4 V a la salida. ¿Cuántos dB amplifica?',
        options: ['-6', '4', '-12', '1', '6', '12', 'Ninguna opción es correcta', '-4'],
        correctAnswers: ['12'],
        procedure: [
          'A = 4 V / 1 V = 4 veces.',
          'a = 20 * log10(4) = 20 * 0.60206 ≈ 12.04 dB ≈ 12 dB.'
        ],
        explanation: 'Multiplicar la tensión por 4 equivale a duplicarla dos veces (+6 dB + 6 dB = 12 dB).',
        memoryTip: '4 veces = 12 dB.',
        relatedClass: 4
      },
      {
        id: 'q4-14',
        quizNumber: 4,
        questionNumber: 14,
        questionText: 'Se ingresan 16 V a un amplificador y se obtienen 4 V a la salida. ¿Cuántos dB amplifica?',
        options: ['1', '-4', '6', 'Ninguna opción es correcta', '12', '4', '-12', '-6'],
        correctAnswers: ['-12'],
        procedure: [
          'A = 4 V / 16 V = 0.25 (reduce a la cuarta parte).',
          'a = 20 * log10(0.25) = 20 * (-0.602) ≈ -12 dB.'
        ],
        explanation: 'Reducir a la cuarta parte (1/4) equivale a reducir a la mitad dos veces (-6 dB - 6 dB = -12 dB).',
        memoryTip: 'Dividir por 4 (0.25 veces) = -12 dB.',
        relatedClass: 4
      }
    ]
  },
  {
    quizNumber: 5,
    title: 'Cuestionario N° 5 — Válvulas, Transistores e Impedancia',
    topic: 'Válvula diodo/triodo, polarización, analogías TBJ, encapsulados TO-3 y TIP142, y adaptación de bafles 4/8/16Ω',
    totalQuestions: 28,
    passingScore: 'Aprobado (Calificación 81.43% a 100%)',
    questions: [
      {
        id: 'q5-1',
        quizNumber: 5,
        questionNumber: 1,
        questionText: 'Indicar las afirmaciones que sean correctas sobre válvulas:',
        options: [
          'La válvula triodo permite amplificar la senoidal completa mediante el circuito de polarización',
          'La válvula diodo permite amplificar la senoidal completa mediante el circuito de polarización',
          'La válvula diodo permite amplificar sólo los valores positivos de una senoidal',
          'Es indiferente el signo que debe tener el ánodo de un diodo para conducir',
          'La válvula diodo permite amplificar sólo los valores negativos de una senoidal',
          'El ánodo de un diodo valvular debe estar positivo para conducir',
          'El ánodo de un diodo valvular debe estar negativo para conducir'
        ],
        correctAnswers: [
          'La válvula triodo permite amplificar la senoidal completa mediante el circuito de polarización',
          'El ánodo de un diodo valvular debe estar positivo para conducir'
        ],
        isMultipleChoice: true,
        explanation: 'El triodo puede amplificar la onda senoidal completa gracias a su circuito de polarización que ubica el punto de trabajo en la zona lineal. El ánodo (placa) de un diodo valvular debe estar obligatoriamente a potencial positivo para atraer los electrones térmicos del cátodo. Un diodo NUNCA amplifica.',
        memoryTip: 'Triodo amplifica con polarización; Ánodo debe estar positivo para conducir.',
        relatedClass: 5
      },
      {
        id: 'q5-2',
        quizNumber: 5,
        questionNumber: 2,
        questionText: 'Si se realiza un circuito con una batería y un diodo valvular conectado en directa (con calentador encendido), ¿en qué sentido circula la corriente convencional?',
        options: ['De placa a filamento', 'De filamento a placa'],
        correctAnswers: ['De placa a filamento'],
        explanation: 'Los electrones físicos viajan del filamento/cátodo (negativo caliente) hacia la placa (positivo). Por convención histórica universal, el sentido convencional de la corriente eléctrica se define como opuesto al de los electrones: por lo tanto, la corriente circula DE PLACA A FILAMENTO.',
        memoryTip: 'Electrones van de filamento a placa; Corriente convencional circula de PLACA A FILAMENTO.',
        relatedClass: 5
      },
      {
        id: 'q5-3',
        quizNumber: 5,
        questionNumber: 3,
        questionText: 'Para cerrar un circuito con batería y resistencia para que circule corriente con una válvula diodo encendida, ¿qué elemento de la válvula debe conectarse a la resistencia que va al positivo de la batería?',
        options: ['Placa', 'Calentador', 'Filamento', 'Grilla'],
        correctAnswers: ['Placa'],
        explanation: 'Para que conduzca en polarización directa, la Placa (Ánodo) debe conectarse al potencial positivo a través de la resistencia de carga, mientras el filamento se conecta al negativo.',
        memoryTip: 'Al positivo va la PLACA (ánodo).',
        relatedClass: 5
      },
      {
        id: 'q5-4',
        quizNumber: 5,
        questionNumber: 4,
        questionText: 'Para cerrar el circuito con resistencia de 2k y batería, ¿qué elemento debe conectarse a la resistencia de 2k?',
        options: ['Grilla', 'Calentador', 'Placa', 'Filamento'],
        correctAnswers: ['Placa'],
        explanation: 'Mismo principio: la Placa es el ánodo que recibe la tensión positiva para atraer la nube electrónica.',
        memoryTip: 'Conectar la Placa a la resistencia de carga positiva.',
        relatedClass: 5
      },
      {
        id: 'q5-5',
        quizNumber: 5,
        questionNumber: 5,
        questionText: '¿Es posible utilizar una válvula tríodo como diodo en directa?',
        options: [
          'La válvula triodo sólo permite circular corriente alterna como el audio, no se puede utilizar como diodo',
          'No, no es posible ya que la corriente se amplificaría',
          'Sí, es posible conectando la grilla a una tensión negativa, por ejemplo -10v',
          'No, no es posible ya que la válvula diodo se inventó para audio',
          'Sí, es posible conectando la grilla a una tensión 0v o positiva'
        ],
        correctAnswers: ['Sí, es posible conectando la grilla a una tensión 0v o positiva'],
        explanation: 'Si conectamos la grilla a 0V (o la unimos a la placa), la grilla no frena a los electrones; los electrones viajan libremente del cátodo a la placa exactamente igual que en un diodo en directa.',
        memoryTip: 'Triodo como diodo: Conectar la grilla a 0V o positiva.',
        relatedClass: 5
      },
      {
        id: 'q5-6',
        quizNumber: 5,
        questionNumber: 6,
        questionText: 'En un esquema básico de un amplificador valvular, ¿cuál es el elemento donde debe ingresar la señal que se desea amplificar? (por ejemplo, un micrófono):',
        options: ['En cualquiera', 'Grilla', 'Calentador', 'Placa', 'Filamento'],
        correctAnswers: ['Grilla'],
        explanation: 'La señal de entrada débil se conecta siempre a la Grilla de control. Su pequeña tensión modula el flujo de electrones que va del cátodo a la placa.',
        memoryTip: 'La señal de entrada ingresa por la GRILLA.',
        relatedClass: 5
      },
      {
        id: 'q5-7',
        quizNumber: 5,
        questionNumber: 7,
        questionText: 'Si hablamos de un transistor TBJ ¿Qué elemento es análogo a la grilla de una válvula?',
        options: ['Emisor', 'Base', 'Colector'],
        correctAnswers: ['Base'],
        explanation: 'La Base del transistor controla el paso de corriente entre colector y emisor, exactamente como la grilla controla el flujo de electrones en el triodo.',
        memoryTip: 'Base (TBJ) = Grilla (Válvula).',
        relatedClass: 5
      },
      {
        id: 'q5-8',
        quizNumber: 5,
        questionNumber: 8,
        questionText: 'Si hablamos de un transistor TBJ ¿Qué elemento es análogo a la placa de una válvula?',
        options: ['Emisor', 'Base', 'Colector'],
        correctAnswers: ['Colector'],
        explanation: 'El Colector recolecta los portadores de carga a alta tensión, al igual que la Placa (Ánodo) recolecta los electrones emitidos por el cátodo.',
        memoryTip: 'Colector (TBJ) = Placa (Válvula).',
        relatedClass: 5
      },
      {
        id: 'q5-9',
        quizNumber: 5,
        questionNumber: 9,
        questionText: 'Si hablamos de un transistor TBJ ¿Qué elemento es análogo al cátodo de una válvula?',
        options: ['Base', 'Emisor', 'Colector'],
        correctAnswers: ['Emisor'],
        explanation: 'El Emisor es el terminal que emite los portadores de carga hacia el circuito, idéntico al Cátodo / Filamento caliente.',
        memoryTip: 'Emisor (TBJ) = Cátodo (Válvula).',
        relatedClass: 5
      },
      {
        id: 'q5-11',
        quizNumber: 5,
        questionNumber: 11,
        questionText: 'En la imagen de clasificación de transistores con símbolos esquemáticos, indicar cuáles transistores están MAL clasificados entre 1, 2, 3, 4, 5, 6:',
        options: ['1', '2', '3', '4', '5', '6'],
        correctAnswers: ['1', '2', '3', '4', '6'],
        isMultipleChoice: true,
        explanation: 'En el examen oficial de la materia, la plantilla de corrección califica como erróneamente clasificados a los números 1, 2, 3, 4 y 6 por intercambios de flechas y canales.',
        memoryTip: 'Mal clasificados: 1, 2, 3, 4, 6.',
        relatedClass: 5
      },
      {
        id: 'q5-12',
        quizNumber: 5,
        questionNumber: 12,
        questionText: 'Una persona encuentra un transistor rotulado "BC548". Indicar su clasificación correcta:',
        options: ['MOSFET - CANAL N', 'JFET - CANAL N', 'MOSFET - CANAL P', 'JFET - CANAL P', 'TBJ - NPN', 'TBJ - PNP'],
        correctAnswers: ['TBJ - NPN'],
        explanation: 'El BC548 es el transistor bipolar (TBJ) NPN de silicio de pequeña señal más famoso y utilizado en electrónica.',
        memoryTip: 'BC548 = TBJ NPN.',
        relatedClass: 5
      },
      {
        id: 'q5-13',
        quizNumber: 5,
        questionNumber: 13,
        questionText: 'Una persona encuentra un transistor rotulado "BC560". Indicar su clasificación correcta:',
        options: ['JFET - CANAL N', 'TBJ - PNP', 'MOSFET - CANAL N', 'TBJ - NPN', 'MOSFET - CANAL P', 'JFET - CANAL P'],
        correctAnswers: ['TBJ - PNP'],
        explanation: 'El BC560 es el complementario PNP de bajo ruido del BC548 / BC549.',
        memoryTip: 'BC560 = TBJ PNP.',
        relatedClass: 5
      },
      {
        id: 'q5-14',
        quizNumber: 5,
        questionNumber: 14,
        questionText: 'Una persona encuentra un transistor rotulado "BF245". Indicar su clasificación correcta:',
        options: ['JFET - CANAL P', 'MOSFET - CANAL P', 'JFET - CANAL N', 'TBJ - PNP', 'MOSFET - CANAL N', 'TBJ - NPN'],
        correctAnswers: ['JFET - CANAL N'],
        explanation: 'El BF245 es un transistor de efecto de campo de juntura (JFET) de Canal N para aplicaciones de audio y RF.',
        memoryTip: 'BF245 = JFET Canal N.',
        relatedClass: 5
      },
      {
        id: 'q5-15',
        quizNumber: 5,
        questionNumber: 15,
        questionText: 'Una persona encuentra un transistor rotulado "IRF9530". Indicar su clasificación correcta:',
        options: ['MOSFET - CANAL N', 'JFET - CANAL N', 'TBJ - NPN', 'MOSFET - CANAL P', 'JFET - CANAL P', 'TBJ - PNP'],
        correctAnswers: ['MOSFET - CANAL P'],
        explanation: 'La serie IRF9xxx de International Rectifier corresponde a transistores MOSFET de potencia de Canal P.',
        memoryTip: 'IRF9530 = MOSFET Canal P.',
        relatedClass: 5
      },
      {
        id: 'q5-16',
        quizNumber: 5,
        questionNumber: 16,
        questionText: 'El clásico transistor de potencia "2N3055" posee una forma metálica ovalada donde el propio cuerpo reemplaza a la tercera pata. ¿Cómo se llama la pata que es reemplazada por dicho cuerpo metálico?',
        options: ['Base', 'Emisor', 'Colector'],
        correctAnswers: ['Colector'],
        explanation: 'En el encapsulado TO-3, los dos pines inferiores corresponden a la Base y al Emisor. El Colector está internamente soldado y conectado a la carcasa metálica exterior para facilitar la disipación térmica.',
        memoryTip: '2N3055: El cuerpo metálico exterior es el COLECTOR.',
        relatedClass: 5
      },
      {
        id: 'q5-17',
        quizNumber: 5,
        questionNumber: 17,
        questionText: 'El transistor Darlington de potencia "TIP142": Indicar el nombre de la pata N° 1:',
        options: ['Base', 'Emisor', 'Colector'],
        correctAnswers: ['Base'],
        explanation: 'El patillaje estándar del TIP142 de izquierda a derecha (mirando de frente con las patas hacia abajo): Pata 1 = Base, Pata 2 = Colector, Pata 3 = Emisor.',
        memoryTip: 'TIP142: Pata 1 = Base.',
        relatedClass: 5
      },
      {
        id: 'q5-18',
        quizNumber: 5,
        questionNumber: 18,
        questionText: 'En el transistor "TIP142", indicar el nombre de la pata N° 2:',
        options: ['Emisor', 'Colector', 'Base'],
        correctAnswers: ['Colector'],
        explanation: 'Pata 2 central = Colector.',
        memoryTip: 'TIP142: Pata 2 = Colector.',
        relatedClass: 5
      },
      {
        id: 'q5-19',
        quizNumber: 5,
        questionNumber: 19,
        questionText: 'En el transistor "TIP142", indicar el nombre de la pata N° 3:',
        options: ['Base', 'Emisor', 'Colector'],
        correctAnswers: ['Emisor'],
        explanation: 'Pata 3 derecha = Emisor.',
        memoryTip: 'TIP142: Pata 3 = Emisor.',
        relatedClass: 5
      },
      {
        id: 'q5-20',
        quizNumber: 5,
        questionNumber: 20,
        questionText: 'El transistor "2N3055" posee un encapsulado metálico de forma particular. ¿Cómo se llama dicho encapsulado?',
        options: ['TO-3', 'TO-126', 'TO-220', 'TO-18', 'TO-92'],
        correctAnswers: ['TO-3'],
        explanation: 'El encapsulado metálico con forma de rombo/óvalo y dos orificios de fijación para disipador se denomina oficialmente TO-3.',
        memoryTip: '2N3055 = Encapsulado TO-3.',
        relatedClass: 5
      },
      {
        id: 'q5-21',
        quizNumber: 5,
        questionNumber: 21,
        questionText: '¿Cuáles son los valores de impedancia nominal más comunes que suelen tener los altavoces según su fabricación estándar?',
        options: ['5, 10, 20 Ohms', '220, 110, 380 Ohms', '4, 8, 16 Ohms', 'Entre 1 y 100 Ohms'],
        correctAnswers: ['4, 8, 16 Ohms'],
        explanation: 'Los estándares de fabricación mundial para altavoces de audio y bafles son 4 Ω, 8 Ω y 16 Ω.',
        memoryTip: 'Impedancias típicas de parlantes: 4, 8 y 16 Ohms.',
        relatedClass: 5
      },
      {
        id: 'q5-22',
        quizNumber: 5,
        questionNumber: 22,
        questionText: 'En un amplificador de transistores, ¿qué sucede si se conecta un parlante con una impedancia MAYOR a la mínima recomendada? (ej. 8 Ω en salida de 4 Ω mínima):',
        options: [
          'Los transistores se queman por exceso de corriente y temperatura.',
          'El rendimiento aumenta al exprimir la totalidad de la potencia.',
          'El equipo entrega menor potencia pero funciona más holgado.',
          'El transformador de salida genera picos de alta tensión.'
        ],
        correctAnswers: ['El equipo entrega menor potencia pero funciona más holgado.'],
        explanation: 'Al aumentar la resistencia de carga (R), la corriente que circula disminuye (I = V/R) y la potencia entregada baja (P = V^2/R). El amplificador no sufre ningún daño, trabaja más frío y opera con menor exigencia térmica (más holgado).',
        memoryTip: 'Transistores con mayor impedancia: Entrega menos potencia pero trabaja más holgado.',
        relatedClass: 5
      },
      {
        id: 'q5-23',
        quizNumber: 5,
        questionNumber: 23,
        questionText: '¿Qué le sucede a un amplificador a transistores si indica que su impedancia mínima son 8 Ohms y se le conecta un parlante de 2 Ohms?',
        options: [
          'Un aumento exagerado de la impedancia reflejada en el primario de su transformador de salida.',
          'Que el parlante no emita sonido por tener una impedancia demasiado baja.',
          'Elevación de la temperatura y posible destrucción de sus transistores por exceso de corriente.',
          'Disminución de la potencia total que puede entregar el amplificador.'
        ],
        correctAnswers: ['Elevación de la temperatura y posible destrucción de sus transistores por exceso de corriente.'],
        explanation: 'A 2 Ω la carga exige 4 veces más corriente de la prevista para 8 Ω. Esto supera la corriente máxima de los transistores finales, produciendo una elevación térmica destructiva que los quema.',
        memoryTip: 'Transistores con impedancia MENOR a la mínima = Se queman por exceso de corriente.',
        relatedClass: 5
      },
      {
        id: 'q5-24',
        quizNumber: 5,
        questionNumber: 24,
        questionText: 'Al utilizar un amplificador estéreo en modo Bridge (Puente), ¿cómo cambia el requisito de impedancia mínima?',
        options: [
          'Se mantiene igual que en el modo estéreo individual.',
          'La impedancia mínima se reduce a la mitad.',
          'La impedancia mínima se duplica respecto al modo estéreo.',
          'El modo puente permite conectar cualquier impedancia sin riesgo.'
        ],
        correctAnswers: ['La impedancia mínima se duplica respecto al modo estéreo.'],
        explanation: 'En modo puente, cada canal ve la mitad de la impedancia total del parlante. Por lo tanto, si cada canal soporta como mínimo 4 Ω en estéreo, en modo Bridge el parlante conectado debe tener como mínimo el doble: 8 Ω.',
        memoryTip: 'Modo Bridge: La impedancia mínima SE DUPLICA.',
        relatedClass: 5
      },
      {
        id: 'q5-25',
        quizNumber: 5,
        questionNumber: 25,
        questionText: '¿Cuál es la función del transformador de salida en un amplificador de potencia a válvulas?',
        options: [
          'Regular la temperatura de las válvulas de pre-amplificación.',
          'Adaptar la alta impedancia de las válvulas a la baja impedancia de los parlantes.',
          'Adaptar la baja impedancia de las válvulas a la alta impedancia de los parlantes.',
          'Eliminar la necesidad de conectar altavoces externos.',
          'Transformar la tensión de la red eléctrica (220v) en una tensión adecuada para el funcionamiento de las válvulas.'
        ],
        correctAnswers: ['Adaptar la alta impedancia de las válvulas a la baja impedancia de los parlantes.'],
        explanation: 'Las válvulas de potencia entregan alta tensión y muy poca corriente (tienen una impedancia interna muy alta, típicamente de 3.000 Ω a 5.000 Ω). Los parlantes requieren baja tensión y alta corriente (baja impedancia: 4 a 16 Ω). El transformador de salida adapta esa alta impedancia de la válvula a la baja impedancia del parlante para lograr la máxima transferencia de potencia.',
        memoryTip: 'Transformador de salida valvular: Adapta ALTA impedancia de válvulas a BAJA impedancia de parlantes.',
        relatedClass: 5
      },
      {
        id: 'q5-26',
        quizNumber: 5,
        questionNumber: 26,
        questionText: 'En un amplificador a válvulas diseñado para parlante de 8 Ω, ¿qué ocurre con el primario del transformador de salida si se conecta un parlante de 4 Ω?',
        options: [
          'La impedancia del primario crece exageradamente, por ejemplo a 500 kΩ.',
          'El transformador se quema instantáneamente por picos de tensión.',
          'El amplificador funciona más holgado y frío.',
          'La impedancia reflejada del primario disminuye sobreexigiendo a la válvula.'
        ],
        correctAnswers: ['La impedancia reflejada del primario disminuye sobreexigiendo a la válvula.'],
        explanation: 'La impedancia reflejada al primario es proporcional a la carga del secundario (Zp = n^2 * Zs). Si conectamos 4 Ω en vez de 8 Ω, la impedancia del primario cae a la mitad (ej. de 5000 Ω a 2500 Ω), lo que obliga a la válvula a entregar el doble de corriente, sobreexigiéndola y desgastándola aceleradamente.',
        memoryTip: 'Parlante menor en válvulas: Cae la impedancia reflejada del primario y sobreexige a la válvula.',
        relatedClass: 5
      },
      {
        id: 'q5-27',
        quizNumber: 5,
        questionNumber: 27,
        questionText: '¿Por qué es peligroso desconectar el parlante (impedancia infinita) en un amplificador a válvulas en funcionamiento?',
        options: [
          'Porque las válvulas se enfrían demasiado rápido al no estar emitiendo sonido.',
          'La corriente se reduce a cero protegiendo todos los componentes.',
          'Se generan picos de altísima tensión que pueden quemar el transformador.',
          'El amplificador consume menos energía y se apaga automáticamente.'
        ],
        correctAnswers: ['Se generan picos de altísima tensión que pueden quemar el transformador.'],
        explanation: 'Al desconectar el parlante, la carga del secundario es infinita. La impedancia reflejada en el primario se dispara a cientos de miles de ohms. Al ingresar señal de audio, la variación de corriente sobre esa inductancia enorme genera un pulso de tensión gigantesco por autoinducción (flyback inductivo de miles de voltios), que perfora el esmalte aislante del transformador de salida y destruye las válvulas.',
        memoryTip: 'Válvula sin parlante (Z = ∞) ==> Picos de altísima tensión queman el transformador.',
        relatedClass: 5
      },
      {
        id: 'q5-28',
        quizNumber: 5,
        questionNumber: 28,
        questionText: '¿Qué diferencia fundamental existe en el manejo de la impedancia entre un amplificador con salida de transistores y uno de válvulas?',
        options: [
          'Las válvulas funcionan mejor con impedancias menores a las recomendadas.',
          'Los transistores requieren un transformador de salida para cada parlante.',
          'En los amplificadores de transistores, al configurarlo en modo Bridge su impedancia se comporta como la de un amplificador valvular.',
          'En válvulas la impedancia debe respetarse estrictamente; en transistores hay un mínimo recomendado.'
        ],
        correctAnswers: ['En válvulas la impedancia debe respetarse estrictamente; en transistores hay un mínimo recomendado.'],
        explanation: 'En transistores la impedancia es un límite inferior de seguridad (se puede conectar cualquier impedancia igual o mayor sin riesgo). En válvulas, por la adaptación del transformador de salida, la impedancia debe respetarse estrictamente en el valor nominal correspondiente.',
        memoryTip: 'Válvulas: impedancia ESTRICTA. Transistores: límite MÍNIMO recomendado.',
        relatedClass: 5
      }
    ]
  },
  {
    quizNumber: 6,
    title: 'Cuestionario N° 6 — Filtros Analógicos Pasivos y Bode',
    topic: 'Cálculos de reactancia XL y XC, frecuencia de corte fc, filtros en L invertida y curvas de Bode',
    totalQuestions: 12,
    passingScore: 'Aprobado (Calificación 91.67% a 100%)',
    questions: [
      {
        id: 'q6-1',
        quizNumber: 6,
        questionNumber: 1,
        questionText: '¿Qué reactancia inductiva XL posee un inductor de 1 H conectado a una fuente de alterna cuya frecuencia es de 100 Hz?',
        options: ['628 KΩ', '628 MΩ', '628 mΩ', '62,8 Ω', '628 Ω', '62,8 KΩ'],
        correctAnswers: ['628 Ω'],
        procedure: [
          'Fórmula: XL = 2 * π * f * L',
          'XL = 2 * 3.14159 * 100 Hz * 1 H',
          'XL = 628.32 Ω ≈ 628 Ω.'
        ],
        explanation: 'Aplicando la fórmula directa: 2 * π * 100 * 1 = 628.3 Ω.',
        memoryTip: '1 H a 100 Hz ==> XL = 628 Ω.',
        relatedClass: 6
      },
      {
        id: 'q6-2',
        quizNumber: 6,
        questionNumber: 2,
        questionText: '¿Qué reactancia inductiva XL posee un inductor de 1 mH conectado a una fuente de alterna cuya frecuencia es de 100 Hz?',
        options: ['62,8 Ω', '628 mΩ', '628 Ω', '628 MΩ', '62,8 KΩ', '628 KΩ'],
        correctAnswers: ['628 mΩ'],
        procedure: [
          '1 mH = 1 * 10^(-3) H = 0.001 H.',
          'XL = 2 * π * 100 Hz * 0.001 H = 0.628 Ω = 628 mΩ (milirresistencias).'
        ],
        explanation: 'Al ser 1 mH (mil veces menor que 1 H), la reactancia es mil veces menor: 628 mΩ.',
        memoryTip: '1 mH a 100 Hz ==> XL = 628 mΩ.',
        relatedClass: 6
      },
      {
        id: 'q6-3',
        quizNumber: 6,
        questionNumber: 3,
        questionText: '¿Qué reactancia capacitiva XC posee un capacitor de 100 μF conectado a una fuente de alterna cuya frecuencia es de 100 Hz?',
        options: ['15,9 Ω', '395,6 kΩ', '1591 kΩ', '62,8 kΩ', '395 MΩ', '78,9 kΩ', '78,9 Ω', '2,53 Ω', '395 mΩ', '1591 Ω'],
        correctAnswers: ['15,9 Ω'],
        procedure: [
          'Fórmula: XC = 1 / (2 * π * f * C)',
          'C = 100 μF = 100 * 10^(-6) F = 0.0001 F.',
          'Denominador = 2 * 3.14159 * 100 * 0.0001 = 0.06283',
          'XC = 1 / 0.06283 ≈ 15.915 Ω ≈ 15.9 Ω.'
        ],
        explanation: 'Cálculo directo: 1 / (2 * π * 100 * 100e-6) = 15.9 Ω.',
        memoryTip: '100 μF a 100 Hz ==> XC = 15.9 Ω.',
        relatedClass: 6
      },
      {
        id: 'q6-4',
        quizNumber: 6,
        questionNumber: 4,
        questionText: '¿Qué reactancia capacitiva XC posee un capacitor de 314 μF conectado a una fuente de alterna cuya frecuencia es de 200 Hz?',
        options: ['2,5 uΩ', '78,9 Ω', '395 mΩ', '62,8 kΩ', '2,53 Ω', '62,8 nΩ', '395,6 kΩ', '15,9 Ω'],
        correctAnswers: ['2,53 Ω'],
        procedure: [
          'Fórmula: XC = 1 / (2 * π * f * C)',
          'Denominador = 2 * 3.14159 * 200 * 314 * 10^(-6) = 0.39458',
          'XC = 1 / 0.39458 ≈ 2.534 Ω ≈ 2.53 Ω.'
        ],
        explanation: '1 / (2 * π * 200 * 314e-6) = 2.53 Ω.',
        memoryTip: '314 μF a 200 Hz ==> XC = 2.53 Ω.',
        relatedClass: 6
      },
      {
        id: 'q6-5',
        quizNumber: 6,
        questionNumber: 5,
        questionText: '¿Cuál es el valor de frecuencia que debe tener una fuente de alterna para que al conectar un capacitor de 2 μF el mismo adquiera una reactancia XC de 150 Ω?',
        options: ['530 V', '1884 Hz', '1,88 kHz', '530 A', '530,5 Hz', '530 uHz', '1,88 Hz'],
        correctAnswers: ['530,5 Hz'],
        procedure: [
          'XC = 1 / (2 * π * f * C)  ==>  f = 1 / (2 * π * XC * C)',
          'f = 1 / (2 * 3.14159 * 150 * 2 * 10^(-6))',
          'Denominador = 0.0018849',
          'f = 1 / 0.0018849 ≈ 530.51 Hz.'
        ],
        explanation: 'Despejando la frecuencia: f = 1 / (2 * π * 150 * 2e-6) = 530.5 Hz.',
        memoryTip: '2 μF con XC = 150 Ω ==> f = 530.5 Hz.',
        relatedClass: 6
      },
      {
        id: 'q6-6',
        quizNumber: 6,
        questionNumber: 6,
        questionText: '¿Cuál es el valor de frecuencia que debe tener una fuente de alterna para que al conectar un inductor de 2 mH el mismo adquiera una reactancia XL de 150 Ω?',
        options: ['11,9 KHz', '11,93 uHz', '11,9 Hz', '150 Hz', '2000 Hz', '119 Hz', '119 V', '11,9 mHz'],
        correctAnswers: ['11,9 KHz'],
        procedure: [
          'XL = 2 * π * f * L  ==>  f = XL / (2 * π * L)',
          'L = 2 mH = 0.002 H',
          'f = 150 / (2 * 3.14159 * 0.002) = 150 / 0.012566 ≈ 11.936 Hz = 11.936 kHz ≈ 11.9 kHz.'
        ],
        explanation: '150 / (2 * π * 0.002) = 11.936 kHz.',
        memoryTip: '2 mH con XL = 150 Ω ==> f = 11.9 kHz.',
        relatedClass: 6
      },
      {
        id: 'q6-7',
        quizNumber: 6,
        questionNumber: 7,
        questionText: '¿Qué valor de capacidad debe tener un capacitor que al conectarlo a una frecuencia de 300 Hz arroja un valor de XC de 30 Ω?',
        options: ['1,77 F', '565 mF', '17,7 F', '17,7 mF', '17,7 uF', '565 uF', '565 nF', '56,5 F'],
        correctAnswers: ['17,7 uF'],
        procedure: [
          'C = 1 / (2 * π * f * XC)',
          'C = 1 / (2 * 3.14159 * 300 * 30) = 1 / 56548.66 ≈ 1.768 * 10^(-5) F',
          'C = 17.68 * 10^(-6) F = 17.7 μF.'
        ],
        explanation: 'Despejando C: 1 / (2 * π * 300 * 30) = 17.7 μF.',
        memoryTip: '300 Hz y 30 Ω ==> C = 17.7 μF.',
        relatedClass: 6
      },
      {
        id: 'q6-8',
        quizNumber: 6,
        questionNumber: 8,
        questionText: '¿Qué valor de inductancia debe tener una bobina que al conectarla a una frecuencia de 30 Hz arroja un valor de XL de 300 Ω?',
        options: ['1,59 uH', '1,59 mH', '1,59 H', '15,9 H', '1,59 kH'],
        correctAnswers: ['1,59 H'],
        procedure: [
          'L = XL / (2 * π * f)',
          'L = 300 / (2 * 3.14159 * 30) = 300 / 188.495 ≈ 1.5915 H ≈ 1.59 H.'
        ],
        explanation: '300 / (2 * π * 30) = 1.59 Henrios.',
        memoryTip: '30 Hz y 300 Ω ==> L = 1.59 H.',
        relatedClass: 6
      },
      {
        id: 'q6-9',
        quizNumber: 6,
        questionNumber: 9,
        questionText: '¿A qué valor de frecuencia debe conectarse el capacitor de la imagen rotulado "TOPMAY 335J 400V" para obtener una reactancia XC de 250 Ω?',
        options: ['1,59 KHz', '159 Hz', '193 Hz', '1,59 uHz', '1,93 MHz.', '1,93 kHz.', '1,93 uHz'],
        correctAnswers: ['193 Hz'],
        procedure: [
          'Paso 1: Decodificar el capacitor 335J:',
          '335 = 33 * 10^5 pF = 3.300.000 pF = 3.3 μF = 3.3 * 10^(-6) F.',
          'Paso 2: Calcular la frecuencia:',
          'f = 1 / (2 * π * XC * C) = 1 / (2 * 3.14159 * 250 * 3.3 * 10^(-6))',
          'Denominador = 0.0051836',
          'f = 1 / 0.0051836 ≈ 192.9 Hz ≈ 193 Hz.'
        ],
        explanation: 'El código 335 significa 3.3 μF. Despejando f para XC = 250 Ω da 193 Hz.',
        memoryTip: 'Capacitor 335J (3.3 μF) con XC = 250 Ω ==> f = 193 Hz.',
        relatedClass: 6
      },
      {
        id: 'q6-10',
        quizNumber: 6,
        questionNumber: 10,
        questionText: 'Se tiene un filtro en formato "L invertida" con una resistencia de 1k horizontal (serie) y un inductor de 1H vertical (derivación). Se toma la salida en paralelo al inductor. Indicar qué tipo de filtro es:',
        options: [
          'Pasa alto de primer orden',
          'Pasa alto de segundo orden',
          'No es posible saberlo sin observar su diagrama de Bode',
          'Pasa bajo de segundo orden',
          'Pasa bajo de primer orden'
        ],
        correctAnswers: ['Pasa alto de primer orden'],
        explanation: 'El componente vertical es el inductor L. A altas frecuencias su reactancia crece (XL = 2πfL -> ∞), por lo que casi toda la tensión cae en él (pasa la señal). A bajas frecuencias el inductor es casi un cable (XL -> 0), mandando la señal a masa. Como tiene un solo elemento reactivo (L), es un FILTRO PASA ALTOS DE PRIMER ORDEN.',
        memoryTip: 'L vertical con R serie = Pasa Altos de 1° orden.',
        relatedClass: 6
      },
      {
        id: 'q6-11',
        quizNumber: 6,
        questionNumber: 11,
        questionText: 'Indicar la frecuencia de corte fc del filtro del ejercicio anterior (R = 1 kΩ = 1000 Ω, L = 1 H):',
        options: ['6283 Hz', '1591 MHz', '159,1 Hz', '159,1 kHz', '15,91 Hz', '1,591 Hz', '6,283 Hz', '1591 Hz'],
        correctAnswers: ['159,1 Hz'],
        procedure: [
          'fc = R / (2 * π * L)',
          'fc = 1000 / (2 * 3.14159 * 1) = 1000 / 6.28318 ≈ 159.15 Hz ≈ 159.1 Hz.'
        ],
        explanation: '1000 dividido 2π da 159.1 Hz.',
        memoryTip: 'fc para 1 kΩ y 1 H ==> 159.1 Hz.',
        relatedClass: 6
      },
      {
        id: 'q6-12',
        quizNumber: 6,
        questionNumber: 12,
        questionText: 'Se tiene un filtro de L invertida compuesto por un capacitor de 63.6 μF horizontal (serie) y una resistencia de 25 Ω vertical (derivación). La salida se toma en paralelo a la resistencia. Ingresan 10V. Indicar las características del Diagrama de Bode correcto:',
        options: [
          'Pasa altos: Curva que sube con pendiente +20 dB/dec desde frecuencias bajas hasta fc = 100 Hz y luego se mantiene plana en 10V',
          'Pasa bajos: Recta horizontal en 10V hasta 100 Hz y luego cae a la derecha',
          'Pasa banda centrado en 100 Hz'
        ],
        correctAnswers: ['Pasa altos: Curva que sube con pendiente +20 dB/dec desde frecuencias bajas hasta fc = 100 Hz y luego se mantiene plana en 10V'],
        procedure: [
          'Paso 1: Tipo de filtro: C horizontal serie y R vertical paralelo = FILTRO PASA ALTOS.',
          'Paso 2: Frecuencia de corte fc = 1 / (2 * π * R * C):',
          'fc = 1 / (2 * 3.14159 * 25 * 63.6 * 10^(-6)) = 1 / 0.009990 ≈ 100 Hz.',
          'Paso 3: Tensión máxima en banda de paso = 10 V (recta plana por encima de 100 Hz).',
          'Paso 4: Por debajo de 100 Hz, la curva cae hacia la izquierda con pendiente de +20 dB/década (a 10 Hz hay 1V, a 1 Hz hay 0.1V).'
        ],
        explanation: 'Es un filtro pasa altos con corte en 100 Hz exactos. Su diagrama de Bode se mantiene plano en 10V para frecuencias superiores a 100 Hz y cae con pendiente constante de 20 dB/década para frecuencias inferiores.',
        memoryTip: 'C serie + R paralelo = Pasa Altos; fc = 100 Hz, meseta plana en 10V para f > 100 Hz.',
        relatedClass: 6
      }
    ]
  }
];
