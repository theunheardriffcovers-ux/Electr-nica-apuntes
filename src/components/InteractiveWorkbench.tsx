import React, { useState } from 'react';
import {
  calcXL,
  calcXC,
  calcFC_RL,
  calcFC_RC,
  calcGainLinear,
  calcGainDb,
  calcLinearFromDb,
  calcLM317Vout,
  calcLM317R1,
  calcOpAmpNonInverting,
  calcOpAmpInverting,
  calcOpAmpSumming,
} from '../utils/electronicsCalc';
import { Calculator, Activity, Zap, Sliders, CheckCircle2, AlertTriangle } from 'lucide-react';

export const InteractiveWorkbench: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bode' | 'lm317' | 'db' | 'opamp' | 'reactance'>('bode');

  // Bode Calculator State
  const [filterType, setFilterType] = useState<'rl_hp' | 'rl_lp' | 'rc_hp' | 'rc_lp'>('rl_hp');
  const [bodeR, setBodeR] = useState<number>(1000);
  const [bodeL, setBodeL] = useState<number>(0.15915); // Henry
  const [bodeC, setBodeC] = useState<number>(10); // uF
  const [bodeVin, setBodeVin] = useState<number>(10); // V

  // LM317 Calculator State
  const [lmMode, setLmMode] = useState<'calc_vout' | 'calc_r1'>('calc_r1');
  const [lmTargetVout, setLmTargetVout] = useState<number>(18);
  const [lmR2, setLmR2] = useState<number>(240);
  const [lmR1, setLmR1] = useState<number>(3216);
  const [lmVin, setLmVin] = useState<number>(25);

  // dB Calculator State
  const [dbMode, setDbMode] = useState<'voltages_to_db' | 'db_to_vout'>('voltages_to_db');
  const [calcVin, setCalcVin] = useState<number>(2); // mV
  const [calcVout, setCalcVout] = useState<number>(4); // V (or mV depending on unit)
  const [calcVinUnit, setCalcVinUnit] = useState<'mV' | 'V'>('mV');
  const [calcVoutUnit, setCalcVoutUnit] = useState<'mV' | 'V'>('V');
  const [calcDbInput, setCalcDbInput] = useState<number>(20);
  const [calcVinDbMode, setCalcVinDbMode] = useState<number>(1); // mV

  // OpAmp Calculator State
  const [opAmpConfig, setOpAmpConfig] = useState<'no_inv' | 'inv' | 'sumador'>('no_inv');
  const [opR1, setOpR1] = useState<number>(2000); // 2k
  const [opR2, setOpR2] = useState<number>(40000); // 40k
  const [opVin, setOpVin] = useState<number>(5); // mV
  const [opSumV1, setOpSumV1] = useState<number>(1);
  const [opSumR1a, setOpSumR1a] = useState<number>(1000);
  const [opSumV2, setOpSumV2] = useState<number>(1);
  const [opSumR1b, setOpSumR1b] = useState<number>(2000);

  // Reactance Calculator State
  const [reactF, setReactF] = useState<number>(100); // Hz
  const [reactL, setReactL] = useState<number>(1); // H
  const [reactC, setReactC] = useState<number>(100); // uF

  // Derived Bode values
  let calculatedFc = 1000;
  if (filterType === 'rl_hp' || filterType === 'rl_lp') {
    calculatedFc = calcFC_RL(bodeR, bodeL);
  } else {
    calculatedFc = calcFC_RC(bodeR, bodeC * 1e-6);
  }
  const voutAtFc = bodeVin * 0.7071; // 70.7% (rodilla)

  // Derived LM317 values
  const computedLmR1 = calcLM317R1(lmTargetVout, lmR2);
  const computedLmVout = calcLM317Vout(lmR1, lmR2);
  const minRequiredVin = lmMode === 'calc_r1' ? lmTargetVout + 3 : computedLmVout + 3;
  const isDropoutOk = lmVin >= minRequiredVin;

  // Derived dB values
  const vinV = calcVinUnit === 'mV' ? calcVin / 1000 : calcVin;
  const voutV = calcVoutUnit === 'mV' ? calcVout / 1000 : calcVout;
  const derivedA = calcGainLinear(vinV, voutV);
  const derivedDb = calcGainDb(derivedA);
  const derivedLinearFromDb = calcLinearFromDb(calcDbInput);
  const derivedVoutFromDb = derivedLinearFromDb * (calcVinDbMode / 1000);

  // Derived OpAmp values
  const opGainNoInv = calcOpAmpNonInverting(opR1, opR2);
  const opVoutNoInv = opGainNoInv * (opVin / 1000); // Volts
  const opGainInv = calcOpAmpInverting(opR1, opR2);
  const opVoutInv = opGainInv * (opVin / 1000);
  const opSumOut = calcOpAmpSumming(
    [
      { vin: opSumV1, R: opSumR1a },
      { vin: opSumV2, R: opSumR1b },
    ],
    opR2
  );

  const isOpR1Safe = opR1 >= 1000 && opR1 <= 100000;
  const isOpR2Safe = opR2 >= 1000 && opR2 <= 100000;

  // Derived Reactance values
  const derivedXL = calcXL(reactF, reactL);
  const derivedXC = calcXC(reactF, reactC * 1e-6);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden my-6">
      <div className="bg-slate-900 text-white p-5 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-600 rounded-lg text-white">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Laboratorio Interactivo de Cálculos y Fórmulas</h3>
              <p className="text-xs text-slate-400">
                Verifica problemas del parcial en tiempo real: Filtros & Bode, LM317, Decibeles y Op-Amps
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 bg-slate-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('bode')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'bode' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              📈 Filtros & Bode
            </button>
            <button
              onClick={() => setActiveTab('lm317')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'lm317' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              ⚡ Regulador LM317
            </button>
            <button
              onClick={() => setActiveTab('db')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'db' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              🔊 Ganancia & dB
            </button>
            <button
              onClick={() => setActiveTab('opamp')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'opamp' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              🔺 Operacionales
            </button>
            <button
              onClick={() => setActiveTab('reactance')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'reactance' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              Ω XL & XC
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* TAB 1: BODE & FILTROS */}
        {activeTab === 'bode' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-700">Topología de Filtro:</span>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as any)}
                  className="bg-white border border-slate-300 text-xs rounded-md p-1.5 font-medium"
                >
                  <option value="rl_hp">Pasa Altos RL (1° orden: R serie, L paralelo)</option>
                  <option value="rl_lp">Pasa Bajos RL (1° orden: L serie, R paralelo)</option>
                  <option value="rc_hp">Pasa Altos RC (1° orden: C serie, R paralelo)</option>
                  <option value="rc_lp">Pasa Bajos RC (1° orden: R serie, C paralelo)</option>
                </select>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <span className="font-semibold text-slate-600">Pendiente:</span>
                <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">
                  20 dB/década (6 dB/octava)
                </span>
                <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">
                  Rodilla en fc: 70.7% (-3 dB)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Controls */}
              <div className="space-y-4 bg-slate-50/70 p-4 rounded-lg border border-slate-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600">Parámetros del Circuito</h4>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tensión de entrada Vin: <span className="text-blue-600">{bodeVin} V</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={bodeVin}
                    onChange={(e) => setBodeVin(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Resistencia R: <span className="text-blue-600">{bodeR} Ω</span>
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="100000"
                    value={bodeR}
                    onChange={(e) => setBodeR(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                  />
                </div>

                {filterType.startsWith('rl') ? (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inductancia L: <span className="text-blue-600">{bodeL} H ({(bodeL * 1000).toFixed(1)} mH)</span>
                    </label>
                    <input
                      type="number"
                      step="0.001"
                      min="0.001"
                      max="10"
                      value={bodeL}
                      onChange={(e) => setBodeL(Number(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Capacidad C: <span className="text-blue-600">{bodeC} μF</span>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.01"
                      max="1000"
                      value={bodeC}
                      onChange={(e) => setBodeC(Number(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                    />
                  </div>
                )}

                {/* Key results card */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs space-y-2 mt-4">
                  <div className="font-bold text-blue-900 flex items-center justify-between">
                    <span>Frecuencia de Corte (fc):</span>
                    <span className="text-sm font-black text-blue-700">{calculatedFc.toFixed(1)} Hz</span>
                  </div>
                  <div className="flex items-center justify-between text-blue-800">
                    <span>Tensión en fc (70.7%):</span>
                    <span className="font-bold">{voutAtFc.toFixed(2)} V</span>
                  </div>
                  <div className="flex items-center justify-between text-blue-800">
                    <span>Tensión a 10·fc:</span>
                    <span className="font-bold">
                      {filterType.endsWith('hp') ? `${bodeVin} V` : `${(bodeVin / 10).toFixed(2)} V`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Live Bode Plot SVG */}
              <div className="lg:col-span-2 bg-slate-900 rounded-lg p-4 text-white relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300">
                    Diagrama de Bode Teórico vs Real (Escala Logarítmica)
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono">
                    fc = {calculatedFc.toFixed(1)} Hz | V_rodilla = {voutAtFc.toFixed(1)} V
                  </span>
                </div>

                <svg viewBox="0 0 500 220" className="w-full h-auto font-mono text-[10px]">
                  {/* Grid lines */}
                  <line x1="40" y1="20" x2="480" y2="20" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="40" y1="80" x2="480" y2="80" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="40" y1="140" x2="480" y2="140" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="40" y1="190" x2="480" y2="190" stroke="#475569" strokeWidth="1.5" />

                  <line x1="40" y1="20" x2="40" y2="190" stroke="#475569" strokeWidth="1.5" />
                  <line x1="150" y1="20" x2="150" y2="190" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="260" y1="20" x2="260" y2="190" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="370" y1="20" x2="370" y2="190" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="480" y1="20" x2="480" y2="190" stroke="#334155" strokeDasharray="3 3" />

                  {/* Axis labels */}
                  <text x="35" y="25" textAnchor="end" fill="#94a3b8">{bodeVin}V</text>
                  <text x="35" y="85" textAnchor="end" fill="#94a3b8">{(bodeVin / 10).toFixed(1)}V</text>
                  <text x="35" y="145" textAnchor="end" fill="#94a3b8">{(bodeVin / 100).toFixed(2)}V</text>

                  <text x="40" y="205" textAnchor="middle" fill="#94a3b8">1Hz</text>
                  <text x="150" y="205" textAnchor="middle" fill="#94a3b8">10Hz</text>
                  <text x="260" y="205" textAnchor="middle" fill="#94a3b8">100Hz</text>
                  <text x="370" y="205" textAnchor="middle" fill="#94a3b8">1kHz</text>
                  <text x="480" y="205" textAnchor="middle" fill="#94a3b8">10kHz</text>

                  {/* Marker for fc */}
                  <line x1="260" y1="20" x2="260" y2="190" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
                  <text x="260" y="15" textAnchor="middle" fill="#fbbf24" fontWeight="bold">
                    fc ({calculatedFc.toFixed(0)} Hz)
                  </text>

                  {/* Curve based on filter type */}
                  {filterType.endsWith('lp') ? (
                    <>
                      {/* Pasa Bajos: Asintota azul */}
                      <path d="M 40 20 L 260 20 L 480 140" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 3" />
                      {/* Curva real roja suave con rodilla */}
                      <path d="M 40 20 Q 230 20 260 40 T 480 140" fill="none" stroke="#ef4444" strokeWidth="3" />
                      {/* Punto 70% */}
                      <circle cx="260" cy="40" r="4.5" fill="#10b981" />
                      <text x="270" y="45" fill="#34d399" fontWeight="bold">70% ({voutAtFc.toFixed(1)}V)</text>
                    </>
                  ) : (
                    <>
                      {/* Pasa Altos: Asintota azul */}
                      <path d="M 40 140 L 260 20 L 480 20" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 3" />
                      {/* Curva real roja suave con rodilla */}
                      <path d="M 40 140 Q 230 40 260 40 T 480 20" fill="none" stroke="#ef4444" strokeWidth="3" />
                      {/* Punto 70% */}
                      <circle cx="260" cy="40" r="4.5" fill="#10b981" />
                      <text x="270" y="45" fill="#34d399" fontWeight="bold">70% ({voutAtFc.toFixed(1)}V)</text>
                    </>
                  )}
                </svg>

                <div className="flex items-center justify-center gap-6 mt-2 text-[11px] text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-0.5 bg-sky-400 inline-block border-b border-dashed"></span>
                    <span>Asíntota teórica (-20 dB/dec)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-1 bg-red-500 inline-block rounded"></span>
                    <span>Curva real con "rodilla" (-3 dB)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full inline-block"></span>
                    <span>Punto fc (70.7%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LM317 REGULATOR */}
        {activeTab === 'lm317' && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
              <span className="font-bold text-slate-700">Modo de cálculo:</span>
              <button
                onClick={() => setLmMode('calc_r1')}
                className={`px-3 py-1 rounded font-semibold transition-all ${
                  lmMode === 'calc_r1' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-600'
                }`}
              >
                Diseñar: Fijar Vout deseado → Calcular R1
              </button>
              <button
                onClick={() => setLmMode('calc_vout')}
                className={`px-3 py-1 rounded font-semibold transition-all ${
                  lmMode === 'calc_vout' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-600'
                }`}
              >
                Analizar: Fijar R1 existente → Calcular Vout
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form inputs */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4 text-xs">
                <h4 className="font-bold uppercase tracking-wider text-slate-700">Datos del Circuito</h4>

                {lmMode === 'calc_r1' ? (
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Tensión deseada Vout: <span className="text-blue-600 font-bold">{lmTargetVout} V</span>
                    </label>
                    <input
                      type="range"
                      min="1.25"
                      max="37"
                      step="0.25"
                      value={lmTargetVout}
                      onChange={(e) => setLmTargetVout(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Resistencia R1 (Ajuste a Masa): <span className="text-blue-600 font-bold">{lmR1} Ω</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="10000"
                      value={lmR1}
                      onChange={(e) => setLmR1(Number(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                    />
                  </div>
                )}

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Resistencia fija R2 (Salida a Ajuste):
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLmR2(240)}
                      className={`px-3 py-1 rounded text-xs font-semibold ${
                        lmR2 === 240 ? 'bg-slate-800 text-white' : 'bg-white border'
                      }`}
                    >
                      240 Ω (Fabricante estándar)
                    </button>
                    <button
                      onClick={() => setLmR2(220)}
                      className={`px-3 py-1 rounded text-xs font-semibold ${
                        lmR2 === 220 ? 'bg-slate-800 text-white' : 'bg-white border'
                      }`}
                    >
                      220 Ω (Comercial común)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Tensión continua de entrada Vin (desde el filtro): <span className="text-slate-800 font-bold">{lmVin} V</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="45"
                    value={lmVin}
                    onChange={(e) => setLmVin(Number(e.target.value))}
                    className="w-full accent-slate-800"
                  />
                </div>

                {/* Dropout alert */}
                <div
                  className={`p-3 rounded-lg border text-xs flex items-start gap-2 ${
                    isDropoutOk ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'
                  }`}
                >
                  {isDropoutOk ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-bold">
                      {isDropoutOk ? 'Margen de Entrada Correcto (Vin >= Vout + 3V)' : '¡PELIGRO DE DROPOUT! Entrada insuficiente'}
                    </div>
                    <div className="text-[11px] mt-0.5">
                      Entrada actual: {lmVin} V | Mínimo requerido: {minRequiredVin.toFixed(1)} V (Margen: {(lmVin - minRequiredVin).toFixed(1)} V).
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Resolution Card */}
              <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm space-y-4 text-xs">
                <h4 className="font-bold text-slate-800 text-sm border-b pb-2">Resolución Paso a Paso del LM317</h4>

                <div className="bg-slate-50 p-3 rounded font-mono text-slate-700 space-y-1">
                  <div className="text-blue-700 font-bold">Fórmula base: Vout = 1.25 · (1 + R1 / R2)</div>
                  {lmMode === 'calc_r1' ? (
                    <>
                      <div>{lmTargetVout} = 1.25 · (1 + R1 / {lmR2})</div>
                      <div>{lmTargetVout} / 1.25 = 1 + R1 / {lmR2}</div>
                      <div>{(lmTargetVout / 1.25).toFixed(2)} - 1 = R1 / {lmR2}</div>
                      <div>R1 = {(lmTargetVout / 1.25 - 1).toFixed(2)} · {lmR2}</div>
                      <div className="text-emerald-700 font-bold text-sm pt-1">
                        👉 R1 calculada = {computedLmR1.toFixed(0)} Ω ({(computedLmR1 / 1000).toFixed(2)} kΩ)
                      </div>
                    </>
                  ) : (
                    <>
                      <div>Vout = 1.25 · (1 + {lmR1} / {lmR2})</div>
                      <div>Vout = 1.25 · (1 + {(lmR1 / lmR2).toFixed(2)})</div>
                      <div className="text-emerald-700 font-bold text-sm pt-1">
                        👉 Vout resultante = {computedLmVout.toFixed(2)} Volts
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-1.5 text-slate-600">
                  <div className="font-semibold text-slate-800">Recomendación de transformador:</div>
                  <div>
                    Para garantizar {minRequiredVin.toFixed(1)} V DC con 3V de caída en el regulador y 1.4V en los diodos:
                  </div>
                  <div className="font-mono bg-amber-50 text-amber-900 p-2 rounded border border-amber-200">
                    V_secundario(RMS) ≈ ({minRequiredVin.toFixed(1)}V + 1.4V) / 1.414 ≈{' '}
                    {(((minRequiredVin + 1.4) / 1.414) * 1.15).toFixed(1)} V RMS
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GAIN & DECIBELS */}
        {activeTab === 'db' && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
              <span className="font-bold text-slate-700">Modo de cálculo:</span>
              <button
                onClick={() => setDbMode('voltages_to_db')}
                className={`px-3 py-1 rounded font-semibold transition-all ${
                  dbMode === 'voltages_to_db' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-600'
                }`}
              >
                De Tensiones (Vin y Vout) → A veces y Decibeles (dB)
              </button>
              <button
                onClick={() => setDbMode('db_to_vout')}
                className={`px-3 py-1 rounded font-semibold transition-all ${
                  dbMode === 'db_to_vout' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-600'
                }`}
              >
                De Decibeles (dB) y Vin → Tensión Vout
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dbMode === 'voltages_to_db' ? (
                <>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4 text-xs">
                    <h4 className="font-bold uppercase tracking-wider text-slate-700">Tensiones Medidas</h4>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Tensión de Entrada (Vin):</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          step="0.1"
                          value={calcVin}
                          onChange={(e) => setCalcVin(Number(e.target.value))}
                          className="flex-1 bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                        />
                        <select
                          value={calcVinUnit}
                          onChange={(e) => setCalcVinUnit(e.target.value as any)}
                          className="bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                        >
                          <option value="mV">mV</option>
                          <option value="V">V</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Tensión de Salida (Vout):</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          step="0.1"
                          value={calcVout}
                          onChange={(e) => setCalcVout(Number(e.target.value))}
                          className="flex-1 bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                        />
                        <select
                          value={calcVoutUnit}
                          onChange={(e) => setCalcVoutUnit(e.target.value as any)}
                          className="bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                        >
                          <option value="mV">mV</option>
                          <option value="V">V</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm space-y-3 text-xs font-mono">
                    <h4 className="font-bold text-slate-800 text-sm font-sans border-b pb-2">Resultados Oficiales</h4>
                    <div className="text-slate-600">Vin homogenizado: {vinV} V</div>
                    <div className="text-slate-600">Vout homogenizado: {voutV} V</div>
                    <div className="bg-blue-50 text-blue-900 p-2.5 rounded font-bold">
                      A = Vout / Vin = {voutV} / {vinV} = {derivedA.toFixed(2)} veces
                    </div>
                    <div className="bg-emerald-50 text-emerald-900 p-2.5 rounded font-bold">
                      a = 20 · log10({derivedA.toFixed(2)}) = {derivedDb.toFixed(2)} dB
                    </div>
                    <div className="text-[11px] font-sans text-slate-500 pt-1">
                      {derivedA > 1
                        ? `El circuito AMPLIFICA (+${derivedDb.toFixed(1)} dB).`
                        : derivedA === 1
                        ? 'Ganancia unitaria (0 dB, seguidor).'
                        : `El circuito ATENÚA (${derivedDb.toFixed(1)} dB negativos).`}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4 text-xs">
                    <h4 className="font-bold uppercase tracking-wider text-slate-700">Decibeles y Tensión Entrada</h4>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Ganancia a en Decibeles: <span className="text-blue-600 font-bold">{calcDbInput} dB</span>
                      </label>
                      <input
                        type="range"
                        min="-40"
                        max="80"
                        step="1"
                        value={calcDbInput}
                        onChange={(e) => setCalcDbInput(Number(e.target.value))}
                        className="w-full accent-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Tensión de Entrada (mV):</label>
                      <input
                        type="number"
                        value={calcVinDbMode}
                        onChange={(e) => setCalcVinDbMode(Number(e.target.value))}
                        className="w-full bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                      />
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm space-y-3 text-xs font-mono">
                    <h4 className="font-bold text-slate-800 text-sm font-sans border-b pb-2">Despeje de Salida</h4>
                    <div>A = 10^(a / 20) = 10^({calcDbInput} / 20)</div>
                    <div className="text-blue-700 font-bold">A = {derivedLinearFromDb.toFixed(2)} veces</div>
                    <div className="text-emerald-700 font-bold text-sm bg-emerald-50 p-2.5 rounded">
                      👉 Vout = A · Vin = {derivedLinearFromDb.toFixed(2)} · {calcVinDbMode} mV ={' '}
                      {(derivedVoutFromDb * 1000).toFixed(2)} mV (o {derivedVoutFromDb.toFixed(3)} V)
                    </div>
                    <div className="text-[11px] font-sans text-rose-600 bg-rose-50 p-2 rounded">
                      ⚠️ ¡Alerta Examen!: Nunca multipliques {calcDbInput} dB directamente por {calcVinDbMode} mV.
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: OP-AMPS */}
        {activeTab === 'opamp' && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
              <span className="font-bold text-slate-700">Configuración:</span>
              <button
                onClick={() => setOpAmpConfig('no_inv')}
                className={`px-3 py-1 rounded font-semibold transition-all ${
                  opAmpConfig === 'no_inv' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-600'
                }`}
              >
                No Inversor (A = 1 + R2/R1)
              </button>
              <button
                onClick={() => setOpAmpConfig('inv')}
                className={`px-3 py-1 rounded font-semibold transition-all ${
                  opAmpConfig === 'inv' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-600'
                }`}
              >
                Inversor (A = - R2/R1)
              </button>
              <button
                onClick={() => setOpAmpConfig('sumador')}
                className={`px-3 py-1 rounded font-semibold transition-all ${
                  opAmpConfig === 'sumador' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-600'
                }`}
              >
                Sumador Mezclador (2 Canales)
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {opAmpConfig !== 'sumador' ? (
                <>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4 text-xs">
                    <h4 className="font-bold uppercase tracking-wider text-slate-700">Resistencias y Entrada</h4>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        R1 ({opAmpConfig === 'no_inv' ? 'a Masa' : 'Entrada'}):{' '}
                        <span className="text-blue-600 font-bold">{opR1} Ω</span>
                      </label>
                      <input
                        type="number"
                        min="100"
                        max="200000"
                        value={opR1}
                        onChange={(e) => setOpR1(Number(e.target.value))}
                        className="w-full bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        R2 (Lazo de realimentación): <span className="text-blue-600 font-bold">{opR2} Ω</span>
                      </label>
                      <input
                        type="number"
                        min="100"
                        max="200000"
                        value={opR2}
                        onChange={(e) => setOpR2(Number(e.target.value))}
                        className="w-full bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Tensión de Entrada Vin: <span className="text-slate-800 font-bold">{opVin} mV</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={opVin}
                        onChange={(e) => setOpVin(Number(e.target.value))}
                        className="w-full accent-blue-600"
                      />
                    </div>

                    {/* Safe resistance check */}
                    <div
                      className={`p-3 rounded-lg border text-xs ${
                        isOpR1Safe && isOpR2Safe ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'
                      }`}
                    >
                      {isOpR1Safe && isOpR2Safe ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Resistencias en zona segura (1 kΩ a 100 kΩ).</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>¡Fuera de regla de diseño! Valores deben estar entre 1 kΩ y 100 kΩ.</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm space-y-3 text-xs font-mono">
                    <h4 className="font-bold text-slate-800 text-sm font-sans border-b pb-2">
                      Resultados: {opAmpConfig === 'no_inv' ? 'No Inversor' : 'Inversor'}
                    </h4>

                    {opAmpConfig === 'no_inv' ? (
                      <>
                        <div>A = 1 + (R2 / R1) = 1 + ({opR2} / {opR1})</div>
                        <div className="text-blue-700 font-bold">A = {opGainNoInv.toFixed(2)} veces</div>
                        <div className="text-purple-700 font-bold">
                          a = {calcGainDb(opGainNoInv).toFixed(2)} dB
                        </div>
                        <div className="text-emerald-700 font-bold text-sm bg-emerald-50 p-2.5 rounded font-mono">
                          👉 Vsal = A · Vent = {opGainNoInv.toFixed(2)} · {opVin} mV ={' '}
                          {(opGainNoInv * opVin).toFixed(2)} mV ({(opVoutNoInv).toFixed(3)} V)
                        </div>
                        <div className="text-[11px] font-sans text-slate-600">
                          Fase: En fase (0° respecto a entrada).
                        </div>
                      </>
                    ) : (
                      <>
                        <div>A = - (R2 / R1) = - ({opR2} / {opR1})</div>
                        <div className="text-red-700 font-bold">A = {opGainInv.toFixed(2)} veces (con inversión)</div>
                        <div className="text-purple-700 font-bold">
                          a = {calcGainDb(opGainInv).toFixed(2)} dB
                        </div>
                        <div className="text-emerald-700 font-bold text-sm bg-emerald-50 p-2.5 rounded font-mono">
                          👉 Vsal = {opGainInv.toFixed(2)} · {opVin} mV = {(opGainInv * opVin).toFixed(2)} mV / 180°
                        </div>
                        <div className="text-[11px] font-sans text-amber-700 bg-amber-50 p-2 rounded">
                          Fase: INVERTIDA 180° (semiciclo positivo sale como negativo).
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                /* Sumador mixer */
                <>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3 text-xs">
                    <h4 className="font-bold uppercase tracking-wider text-slate-700">Canales de Entrada</h4>

                    <div className="bg-white p-2.5 rounded border border-slate-200 space-y-2">
                      <div className="font-bold text-blue-700">Canal 1 (Voz / Guitarra 1):</div>
                      <div className="flex gap-2">
                        <label className="w-1/2">
                          V1 (mV):
                          <input
                            type="number"
                            value={opSumV1}
                            onChange={(e) => setOpSumV1(Number(e.target.value))}
                            className="w-full border rounded px-1.5 py-0.5 mt-0.5"
                          />
                        </label>
                        <label className="w-1/2">
                          R1a (Ω - Fader 1):
                          <input
                            type="number"
                            value={opSumR1a}
                            onChange={(e) => setOpSumR1a(Number(e.target.value))}
                            className="w-full border rounded px-1.5 py-0.5 mt-0.5"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-slate-200 space-y-2">
                      <div className="font-bold text-emerald-700">Canal 2 (Bajo / MP3):</div>
                      <div className="flex gap-2">
                        <label className="w-1/2">
                          V2 (mV):
                          <input
                            type="number"
                            value={opSumV2}
                            onChange={(e) => setOpSumV2(Number(e.target.value))}
                            className="w-full border rounded px-1.5 py-0.5 mt-0.5"
                          />
                        </label>
                        <label className="w-1/2">
                          R1b (Ω - Fader 2):
                          <input
                            type="number"
                            value={opSumR1b}
                            onChange={(e) => setOpSumR1b(Number(e.target.value))}
                            className="w-full border rounded px-1.5 py-0.5 mt-0.5"
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        R2 (Lazo / Master General): <span className="text-purple-600 font-bold">{opR2} Ω</span>
                      </label>
                      <input
                        type="number"
                        value={opR2}
                        onChange={(e) => setOpR2(Number(e.target.value))}
                        className="w-full bg-white border rounded px-2 py-1 text-xs"
                      />
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm space-y-3 text-xs font-mono">
                    <h4 className="font-bold text-slate-800 text-sm font-sans border-b pb-2">Salida Mezclada</h4>
                    <div>A1 = - ({opR2} / {opSumR1a}) = {(-opR2 / opSumR1a).toFixed(2)}</div>
                    <div>A2 = - ({opR2} / {opSumR1b}) = {(-opR2 / opSumR1b).toFixed(2)}</div>
                    <div className="bg-purple-50 text-purple-900 p-2.5 rounded font-bold">
                      Vsal = A1·V1 + A2·V2 = {opSumOut.toFixed(2)} mV
                    </div>
                    <div className="text-[11px] font-sans text-slate-600">
                      Forma senoidal: {Math.abs(opSumOut).toFixed(2)} mV / 180°
                    </div>
                    <div className="text-[11px] font-sans text-blue-700 bg-blue-50 p-2 rounded">
                      💡 Para sumar sin invertir: conectar un segundo operacional inversor con R1 = R2 = 10 kΩ a la salida.
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* TAB 5: REACTANCE */}
        {activeTab === 'reactance' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4 text-xs">
                <h4 className="font-bold uppercase tracking-wider text-slate-700">Parámetros de Frecuencia</h4>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Frecuencia f: <span className="text-blue-600 font-bold">{reactF} Hz</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="5000"
                    step="10"
                    value={reactF}
                    onChange={(e) => setReactF(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Inductancia L (Henrios):</label>
                  <input
                    type="number"
                    step="0.001"
                    value={reactL}
                    onChange={(e) => setReactL(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Capacidad C (μF):</label>
                  <input
                    type="number"
                    step="1"
                    value={reactC}
                    onChange={(e) => setReactC(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded px-2 py-1 text-xs"
                  />
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm space-y-4 text-xs font-mono">
                <h4 className="font-bold text-slate-800 text-sm font-sans border-b pb-2">Reactancias Calculadas</h4>

                <div className="bg-amber-50 p-3 rounded border border-amber-200 space-y-1">
                  <div className="text-amber-900 font-bold font-sans">Reactancia Inductiva (XL):</div>
                  <div>XL = 2 · π · f · L = 2 · π · {reactF} · {reactL}</div>
                  <div className="text-amber-800 font-bold text-sm">
                    👉 XL = {derivedXL >= 1000 ? `${(derivedXL / 1000).toFixed(2)} kΩ` : `${derivedXL.toFixed(2)} Ω`}
                  </div>
                  <div className="text-[11px] font-sans text-amber-900">
                    Desfasaje: La TENSIÓN adelanta 90° a la corriente.
                  </div>
                </div>

                <div className="bg-sky-50 p-3 rounded border border-sky-200 space-y-1">
                  <div className="text-sky-900 font-bold font-sans">Reactancia Capacitiva (XC):</div>
                  <div>XC = 1 / (2 · π · f · C) = 1 / (2 · π · {reactF} · {reactC}μF)</div>
                  <div className="text-sky-800 font-bold text-sm">
                    👉 XC = {derivedXC >= 1000 ? `${(derivedXC / 1000).toFixed(2)} kΩ` : `${derivedXC.toFixed(2)} Ω`}
                  </div>
                  <div className="text-[11px] font-sans text-sky-900">
                    Desfasaje: La CORRIENTE adelanta 90° a la tensión.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
