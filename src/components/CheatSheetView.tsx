import React from 'react';
import { AlertOctagon, CheckCircle2, Zap, BookOpen, Calculator, Volume2 } from 'lucide-react';

export const CheatSheetView: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-slate-900 text-white rounded-xl p-6 shadow-sm border border-slate-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-red-600 rounded-lg text-white">
            <AlertOctagon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black tracking-tight">
              Los 10 Errores Fatales que Desaprueban el Examen (Electrónica II)
            </h2>
            <p className="text-xs text-red-200">
              Guía de supervivencia rápida: trampas habituales de los docentes y cómo responder con precisión quirúrgica.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of 10 Fatal Traps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-rose-200 bg-rose-50/50 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">1</span>
            <span>Multiplicar Decibeles por Voltios para sacar la Salida</span>
          </div>
          <div className="text-rose-800 bg-white p-2.5 rounded border border-rose-200">
            <span className="font-bold text-rose-900 block">❌ ERROR FATAL: </span>
            Hacer <code>Vsalida = a(dB) · Ventrada</code> (por ej. si a = 20 dB y Vent = 1V, decir que Vsal = 20V).
          </div>
          <div className="text-emerald-900 bg-emerald-50 p-2.5 rounded border border-emerald-200">
            <span className="font-bold text-emerald-950 block">✅ RESPUESTA CORRECTA: </span>
            Los decibeles JAMÁS se multiplican por voltios. Primero se pasa a veces: <code>A = 10^(20/20) = 10</code>. Luego: <code>Vsal = A · Vent = 10 · 1V = 10V</code>.
          </div>
        </div>

        <div className="border border-rose-200 bg-rose-50/50 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">2</span>
            <span>Invertir R1 y R2 en la Ganancia del Operacional No Inversor</span>
          </div>
          <div className="text-rose-800 bg-white p-2.5 rounded border border-rose-200">
            <span className="font-bold text-rose-900 block">❌ ERROR FATAL: </span>
            Escribir <code>A = 1 + R_masa / R_lazo</code> sin mirar cuál va a masa.
          </div>
          <div className="text-emerald-900 bg-emerald-50 p-2.5 rounded border border-emerald-200">
            <span className="font-bold text-emerald-950 block">✅ RESPUESTA CORRECTA: </span>
            La fórmula mnemotécnica inviolable es: <code>A = 1 + R_lazo / R_masa</code>. El lazo (que va de la salida a V-) siempre va arriba en el numerador.
          </div>
        </div>

        <div className="border border-rose-200 bg-rose-50/50 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">3</span>
            <span>Desconectar el Bafle de un Amplificador Valvular Encendido</span>
          </div>
          <div className="text-rose-800 bg-white p-2.5 rounded border border-rose-200">
            <span className="font-bold text-rose-900 block">❌ ERROR FATAL: </span>
            Creer que desconectar el parlante no pasa nada porque "no circula corriente".
          </div>
          <div className="text-emerald-900 bg-emerald-50 p-2.5 rounded border border-emerald-200">
            <span className="font-bold text-emerald-950 block">✅ RESPUESTA CORRECTA: </span>
            Al desconectar (Z = ∞), la impedancia reflejada al primario sube a cientos de miles de ohms. La inductancia genera un pico de tensión gigantesco por autoinducción que quema el transformador de salida y las válvulas.
          </div>
        </div>

        <div className="border border-rose-200 bg-rose-50/50 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">4</span>
            <span>Impedancia en Modo Bridge (Puente) en Transistores</span>
          </div>
          <div className="text-rose-800 bg-white p-2.5 rounded border border-rose-200">
            <span className="font-bold text-rose-900 block">❌ ERROR FATAL: </span>
            Pensar que la impedancia mínima se reduce a la mitad en modo puente.
          </div>
          <div className="text-emerald-900 bg-emerald-50 p-2.5 rounded border border-emerald-200">
            <span className="font-bold text-emerald-950 block">✅ RESPUESTA CORRECTA: </span>
            En modo Bridge el requisito de impedancia mínima SE DUPLICA (si cada canal admite 4 Ω mínimo en estéreo, en Bridge exige 8 Ω mínimo).
          </div>
        </div>

        <div className="border border-rose-200 bg-rose-50/50 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">5</span>
            <span>Pines del Regulador Negativo 79xx vs Positivo 78xx</span>
          </div>
          <div className="text-rose-800 bg-white p-2.5 rounded border border-rose-200">
            <span className="font-bold text-rose-900 block">❌ ERROR FATAL: </span>
            Creer que el 79xx tiene el pinout del 78xx (1: Entrada, 2: Masa, 3: Salida).
          </div>
          <div className="text-emerald-900 bg-emerald-50 p-2.5 rounded border border-emerald-200">
            <span className="font-bold text-emerald-950 block">✅ RESPUESTA CORRECTA: </span>
            En la serie negativa 79xx: Pin 1 = MASA (GND), Pin 2 = ENTRADA negativa, Pin 3 = SALIDA negativa. ¡El 1 y el 2 están invertidos!
          </div>
        </div>

        <div className="border border-rose-200 bg-rose-50/50 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">6</span>
            <span>Olvidar la Condición de Dropout en Reguladores Lineales (Vin &ge; Vout + 3V)</span>
          </div>
          <div className="text-rose-800 bg-white p-2.5 rounded border border-rose-200">
            <span className="font-bold text-rose-900 block">❌ ERROR FATAL: </span>
            Calcular una salida de 18V con un LM317 e ingresar 18V o 19V a la entrada.
          </div>
          <div className="text-emerald-900 bg-emerald-50 p-2.5 rounded border border-emerald-200">
            <span className="font-bold text-emerald-950 block">✅ RESPUESTA CORRECTA: </span>
            El regulador necesita al menos 3V de caída interna (dropout). Para 18V de salida se requieren al menos 21V de continua a la entrada.
          </div>
        </div>

        <div className="border border-rose-200 bg-rose-50/50 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">7</span>
            <span>Puentear Ring a Masa en una Salida Balanceada Electrónica</span>
          </div>
          <div className="text-rose-800 bg-white p-2.5 rounded border border-rose-200">
            <span className="font-bold text-rose-900 block">❌ ERROR FATAL: </span>
            Unir el Ring a masa en todas las salidas balanceadas al pasar a desbalanceado.
          </div>
          <div className="text-emerald-900 bg-emerald-50 p-2.5 rounded border border-emerald-200">
            <span className="font-bold text-emerald-950 block">✅ RESPUESTA CORRECTA: </span>
            Si la salida es electrónica activa, el Ring debe dejarse LIBRE. Cortocircuitarlo a masa sobrecalienta el chip de salida. Solo se une a masa si tiene transformador de salida.
          </div>
        </div>

        <div className="border border-rose-200 bg-rose-50/50 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">8</span>
            <span>Desbalancear una Entrada de Micrófono con Phantom +48V Activo</span>
          </div>
          <div className="text-rose-800 bg-white p-2.5 rounded border border-rose-200">
            <span className="font-bold text-rose-900 block">❌ ERROR FATAL: </span>
            Puentear pin 3 a masa en una entrada con phantom encendido.
          </div>
          <div className="text-emerald-900 bg-emerald-50 p-2.5 rounded border border-emerald-200">
            <span className="font-bold text-emerald-950 block">✅ RESPUESTA CORRECTA: </span>
            NUNCA desbalancear con phantom encendido: pondrías la fuente de +48V en cortocircuito directo contra tierra.
          </div>
        </div>

        <div className="border border-rose-200 bg-rose-50/50 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">9</span>
            <span>Tensión en la Frecuencia de Corte de un Filtro Pasivo</span>
          </div>
          <div className="text-rose-800 bg-white p-2.5 rounded border border-rose-200">
            <span className="font-bold text-rose-900 block">❌ ERROR FATAL: </span>
            Decir que en fc la tensión de salida es igual a la de entrada (Vin).
          </div>
          <div className="text-emerald-900 bg-emerald-50 p-2.5 rounded border border-emerald-200">
            <span className="font-bold text-emerald-950 block">✅ RESPUESTA CORRECTA: </span>
            En fc la tensión de salida cae exactamente al 70.7% de la entrada (0.7 · Vin), correspondiente a una caída de -3 dB ("la rodilla de Bode").
          </div>
        </div>

        <div className="border border-rose-200 bg-rose-50/50 rounded-xl p-4 space-y-2 text-xs">
          <div className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">10</span>
            <span>Transistor 2N3055: Creer que la Carcasa Metálica es Masa</span>
          </div>
          <div className="text-rose-800 bg-white p-2.5 rounded border border-rose-200">
            <span className="font-bold text-rose-900 block">❌ ERROR FATAL: </span>
            Atornillar el 2N3055 directamente al chasis metálico pensando que es tierra.
          </div>
          <div className="text-emerald-900 bg-emerald-50 p-2.5 rounded border border-emerald-200">
            <span className="font-bold text-emerald-950 block">✅ RESPUESTA CORRECTA: </span>
            En el encapsulado TO-3 del 2N3055, el cuerpo metálico exterior es el COLECTOR (a alta tensión). Requiere aislador de mica y arandelas plásticas para no cortocircuitar la fuente.
          </div>
        </div>
      </div>

      {/* MASTER FORMULA SHEET */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b pb-3">
          <Calculator className="w-5 h-5 text-blue-600" />
          <span>Formulario Maestro Completo para el Examen</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-1.5">
            <div className="font-bold text-blue-900 font-sans border-b pb-1">Decibeles & Ganancia</div>
            <div>A = Vsal / Vent</div>
            <div>a = 20 · log10(|A|)</div>
            <div>A = 10^(a / 20)</div>
            <div className="text-[11px] text-slate-600 font-sans pt-1">
              • +6 dB = x2 | -6 dB = x0.5<br />
              • +20 dB = x10 | -20 dB = x0.1<br />
              • +40 dB = x100 | +60 dB = x1000
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-1.5">
            <div className="font-bold text-emerald-900 font-sans border-b pb-1">Filtros Pasivos & Reactancias</div>
            <div>XL = 2 · π · f · L</div>
            <div>XC = 1 / (2 · π · f · C)</div>
            <div>fc(RL) = R / (2 · π · L)</div>
            <div>fc(RC) = 1 / (2 · π · R · C)</div>
            <div>fc(LC) = 1 / (2 · π · √(L·C))</div>
            <div className="text-[11px] text-slate-600 font-sans pt-1">
              • Vout(fc) = 0.707 · Vin (-3 dB)<br />
              • 1° orden: 20 dB/década (÷10)<br />
              • 2° orden: 40 dB/década (÷100)
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50 space-y-1.5">
            <div className="font-bold text-purple-900 font-sans border-b pb-1">LM317 & Operacionales</div>
            <div>Vout = 1.25 · (1 + R1 / R2)</div>
            <div>R1 = R2 · (Vout / 1.25 - 1)</div>
            <div>Vin(mínimo) ≥ Vout + 3V</div>
            <div>No Inversor: A = 1 + R2/R1</div>
            <div>Inversor: A = - R2/R1</div>
            <div>Seguidor: A = 1 (Vsal = Vent)</div>
            <div className="text-[11px] text-slate-600 font-sans pt-1">
              • Sumador: Vsal = -Σ(R2/Ri · Vi)<br />
              • Rango seguro R: 1 kΩ a 100 kΩ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
