import React from 'react';

export const AudioChainSVG: React.FC = () => (
  <div className="w-full overflow-x-auto py-2">
    <svg viewBox="0 0 850 160" className="w-full min-w-[700px] h-auto font-sans text-xs">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#0284c7" />
        </marker>
      </defs>

      {/* Background container */}
      <rect x="5" y="10" width="840" height="140" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

      {/* Blocks */}
      {/* 1. Fuente sonora */}
      <g transform="translate(20, 30)">
        <circle cx="35" cy="40" r="28" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
        <text x="35" y="38" textAnchor="middle" fontWeight="bold" fill="#0369a1" fontSize="11">Fuente</text>
        <text x="35" y="52" textAnchor="middle" fill="#0369a1" fontSize="10">Sonora</text>
        <text x="35" y="85" textAnchor="middle" fill="#64748b" fontSize="9">Presión acústica</text>
      </g>

      <path d="M 85 70 L 115 70" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* 2. Micrófono */}
      <g transform="translate(120, 25)">
        <rect x="0" y="10" width="95" height="70" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.8" />
        <text x="47" y="35" textAnchor="middle" fontWeight="bold" fill="#b45309" fontSize="11">Micrófono</text>
        <text x="47" y="50" textAnchor="middle" fill="#78350f" fontSize="9">Transductor A→E</text>
        <text x="47" y="65" textAnchor="middle" fontWeight="bold" fill="#dc2626" fontSize="10">Nivel Mic (~1mV)</text>
      </g>

      <path d="M 220 70 L 245 70" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* 3. Preamplificador */}
      <g transform="translate(250, 25)">
        <polygon points="0,15 95,50 0,85" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.8" />
        <text x="35" y="46" textAnchor="middle" fontWeight="bold" fill="#15803d" fontSize="11">Preamplificador</text>
        <text x="35" y="60" textAnchor="middle" fill="#166534" fontSize="9">Mezcladora</text>
        <text x="45" y="100" textAnchor="middle" fill="#15803d" fontSize="9" fontWeight="bold">Ganancia (+60 dB)</text>
      </g>

      <path d="M 350 70 L 375 70" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* 4. Procesador */}
      <g transform="translate(380, 25)">
        <rect x="0" y="10" width="105" height="70" rx="6" fill="#f3e8ff" stroke="#9333ea" strokeWidth="1.8" />
        <text x="52" y="35" textAnchor="middle" fontWeight="bold" fill="#7e22ce" fontSize="11">Procesador</text>
        <text x="52" y="50" textAnchor="middle" fill="#581c87" fontSize="9">EQ / Compresor</text>
        <text x="52" y="65" textAnchor="middle" fontWeight="bold" fill="#9333ea" fontSize="10">Nivel Línea (~1V)</text>
      </g>

      <path d="M 490 70 L 515 70" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* 5. Amplificador de potencia */}
      <g transform="translate(520, 25)">
        <polygon points="0,15 100,50 0,85" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.8" />
        <text x="38" y="46" textAnchor="middle" fontWeight="bold" fill="#b91c1c" fontSize="11">Amplificador</text>
        <text x="38" y="60" textAnchor="middle" fill="#991b1b" fontSize="9">de Potencia</text>
        <text x="45" y="100" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">Alta corriente (A)</text>
      </g>

      <path d="M 625 70 L 650 70" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* 6. Parlante */}
      <g transform="translate(655, 25)">
        <polygon points="0,30 25,30 55,10 55,90 25,70 0,70" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.8" />
        <text x="27" y="105" textAnchor="middle" fontWeight="bold" fill="#854d0e" fontSize="11">Parlante</text>
        <text x="27" y="118" textAnchor="middle" fill="#713f12" fontSize="9">Transductor E→A</text>
      </g>

      <path d="M 720 70 L 750 70" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* 7. Oído */}
      <g transform="translate(755, 35)">
        <circle cx="35" cy="35" r="28" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
        <text x="35" y="34" textAnchor="middle" fontWeight="bold" fill="#3730a3" fontSize="11">Sistema</text>
        <text x="35" y="48" textAnchor="middle" fill="#3730a3" fontSize="10">Auditivo</text>
      </g>
    </svg>
  </div>
);

export const BalancedNoiseCancellationSVG: React.FC = () => (
  <div className="w-full overflow-x-auto py-2">
    <svg viewBox="0 0 800 240" className="w-full min-w-[650px] h-auto font-sans text-xs">
      <defs>
        <marker id="arrowB" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#1e293b" />
        </marker>
      </defs>

      <rect x="5" y="5" width="790" height="230" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />

      {/* Emisor / Micrófono */}
      <g transform="translate(20, 30)">
        <rect x="0" y="10" width="130" height="150" rx="6" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
        <text x="65" y="32" textAnchor="middle" fontWeight="bold" fill="#1e293b" fontSize="11">MICRÓFONO / SALIDA</text>
        
        {/* Generador V+ */}
        <circle cx="65" cy="65" r="16" fill="#fff" stroke="#10b981" strokeWidth="1.8" />
        <text x="65" y="69" textAnchor="middle" fontWeight="bold" fill="#047857">+V</text>
        <text x="65" y="93" textAnchor="middle" fill="#065f46" fontSize="9">Señal No Invertida</text>

        {/* Generador V- */}
        <circle cx="65" cy="125" r="16" fill="#fff" stroke="#ef4444" strokeWidth="1.8" />
        <text x="65" y="129" textAnchor="middle" fontWeight="bold" fill="#b91c1c">-V</text>
        <text x="65" y="153" textAnchor="middle" fill="#991b1b" fontSize="9">Invertida 180°</text>
      </g>

      {/* Cable con blindaje */}
      <g transform="translate(160, 40)">
        {/* Blindaje ovalado */}
        <rect x="30" y="15" width="310" height="120" rx="60" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6 4" />
        <text x="185" y="10" textAnchor="middle" fill="#64748b" fontWeight="bold">BLINDAJE / MALLA METÁLICA (Masa)</text>

        {/* Cable Hot (Pin 2) */}
        <line x1="0" y1="45" x2="350" y2="45" stroke="#10b981" strokeWidth="3" />
        <text x="15" y="38" fill="#047857" fontWeight="bold">Pin 2 (Hot / +)</text>

        {/* Cable Cold (Pin 3) */}
        <line x1="0" y1="105" x2="350" y2="105" stroke="#ef4444" strokeWidth="3" />
        <text x="15" y="123" fill="#b91c1c" fontWeight="bold">Pin 3 (Cold / -)</text>

        {/* Interferencia de ruido */}
        <g transform="translate(160, 15)">
          <path d="M 0 -5 L 10 15 L 20 -5 L 30 15" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
          <text x="15" y="-12" textAnchor="middle" fill="#d97706" fontWeight="bold" fontSize="10">⚡ Ruido EMI (+V_ruido)</text>
          <text x="15" y="65" textAnchor="middle" fill="#d97706" fontSize="9">+V_ruido entra por igual</text>
          <text x="15" y="125" textAnchor="middle" fill="#d97706" fontSize="9">+V_ruido entra por igual</text>
        </g>
      </g>

      {/* Amplificador Diferencial */}
      <g transform="translate(530, 45)">
        <polygon points="20,10 160,75 20,140" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
        <text x="40" y="48" fill="#1d4ed8" fontWeight="bold" fontSize="14">+</text>
        <text x="40" y="112" fill="#1d4ed8" fontWeight="bold" fontSize="16">-</text>
        <text x="75" y="70" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="11">Amplificador</text>
        <text x="75" y="85" textAnchor="middle" fill="#1e40af" fontSize="10">Diferencial</text>

        {/* Salida limpia */}
        <line x1="160" y1="75" x2="230" y2="75" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrowB)" />
        <g transform="translate(180, 20)">
          <text x="25" y="40" fill="#15803d" fontWeight="bold" fontSize="12">V_out = 2 · V</text>
          <text x="25" y="55" fill="#15803d" fontSize="10">¡Ruido = 0V!</text>
          <text x="25" y="90" fill="#64748b" fontSize="9">(V+Vn) - (-V+Vn) = 2V</text>
        </g>
      </g>
    </svg>
  </div>
);

export const PowerSupplyStagesSVG: React.FC = () => (
  <div className="w-full overflow-x-auto py-2">
    <svg viewBox="0 0 860 210" className="w-full min-w-[750px] h-auto font-sans text-xs">
      <defs>
        <marker id="arrowP" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569" />
        </marker>
      </defs>

      <rect x="5" y="5" width="850" height="200" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

      {/* Entrada 220V CA */}
      <g transform="translate(15, 60)">
        <text x="35" y="15" textAnchor="middle" fontWeight="bold" fill="#0f172a" fontSize="11">Red 220V</text>
        <text x="35" y="30" textAnchor="middle" fill="#64748b" fontSize="10">50 Hz CA</text>
        {/* Onda senoidal */}
        <path d="M 15 55 Q 25 35 35 55 T 55 55" fill="none" stroke="#0284c7" strokeWidth="2" />
      </g>

      <line x1="75" y1="90" x2="105" y2="90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowP)" />

      {/* 1. Transformador */}
      <g transform="translate(110, 30)">
        <rect x="0" y="10" width="135" height="100" rx="6" fill="#ecfeff" stroke="#0891b2" strokeWidth="1.8" />
        <text x="67" y="35" textAnchor="middle" fontWeight="bold" fill="#0e7490" fontSize="11">1. TRANSFORMADOR</text>
        <text x="67" y="52" textAnchor="middle" fill="#155e75" fontSize="9">Aísla galvánicamente</text>
        <text x="67" y="66" textAnchor="middle" fill="#155e75" fontSize="9">Baja a 22V CA eficaz</text>
        <text x="67" y="95" textAnchor="middle" fontWeight="bold" fill="#0891b2" fontSize="10">Salida: CA eficaz</text>
        {/* Onda menor */}
        <path d="M 45 135 Q 55 120 67 135 T 89 135" fill="none" stroke="#0891b2" strokeWidth="2" />
        <text x="67" y="160" textAnchor="middle" fill="#64748b" fontSize="9">CA reducida</text>
      </g>

      <line x1="250" y1="90" x2="275" y2="90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowP)" />

      {/* 2. Rectificador */}
      <g transform="translate(280, 30)">
        <rect x="0" y="10" width="145" height="100" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.8" />
        <text x="72" y="35" textAnchor="middle" fontWeight="bold" fill="#b45309" fontSize="11">2. RECTIFICADOR</text>
        <text x="72" y="52" textAnchor="middle" fill="#78350f" fontSize="9">Puente de 4 diodos</text>
        <text x="72" y="66" textAnchor="middle" fill="#78350f" fontSize="9">Onda completa (100 Hz)</text>
        <text x="72" y="95" textAnchor="middle" fontWeight="bold" fill="#d97706" fontSize="10">Pulsante unidireccional</text>
        {/* Onda rectificada */}
        <path d="M 45 145 Q 55 125 65 145 Q 75 125 85 145" fill="none" stroke="#d97706" strokeWidth="2" />
        <text x="72" y="160" textAnchor="middle" fill="#64748b" fontSize="9">Pulsos positivos</text>
      </g>

      <line x1="430" y1="90" x2="455" y2="90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowP)" />

      {/* 3. Filtro Capacitivo */}
      <g transform="translate(460, 30)">
        <rect x="0" y="10" width="145" height="100" rx="6" fill="#f3e8ff" stroke="#9333ea" strokeWidth="1.8" />
        <text x="72" y="35" textAnchor="middle" fontWeight="bold" fill="#7e22ce" fontSize="11">3. FILTRO CAPACITIVO</text>
        <text x="72" y="52" textAnchor="middle" fill="#581c87" fontSize="9">Capacitor electrolítico</text>
        <text x="72" y="66" textAnchor="middle" fill="#581c87" fontSize="9">Almacena carga pico</text>
        <text x="72" y="95" textAnchor="middle" fontWeight="bold" fill="#9333ea" fontSize="10">V_dc ≈ 29V (con ripple)</text>
        {/* Onda con ripple */}
        <path d="M 45 130 L 65 126 L 85 130 L 100 126" fill="none" stroke="#9333ea" strokeWidth="2" />
        <text x="72" y="160" textAnchor="middle" fill="#64748b" fontSize="9">Continua + Ripple</text>
      </g>

      <line x1="610" y1="90" x2="635" y2="90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowP)" />

      {/* 4. Regulador */}
      <g transform="translate(640, 30)">
        <rect x="0" y="10" width="145" height="100" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.8" />
        <text x="72" y="35" textAnchor="middle" fontWeight="bold" fill="#15803d" fontSize="11">4. REGULADOR LINEAL</text>
        <text x="72" y="52" textAnchor="middle" fill="#166534" fontSize="9">78xx / LM317</text>
        <text x="72" y="66" textAnchor="middle" fill="#166534" fontSize="9">Recorta el rizado</text>
        <text x="72" y="95" textAnchor="middle" fontWeight="bold" fill="#16a34a" fontSize="10">V_out = Tensión fija plana</text>
        {/* Línea perfectamente recta */}
        <line x1="45" y1="130" x2="105" y2="130" stroke="#16a34a" strokeWidth="2.5" />
        <text x="72" y="160" textAnchor="middle" fill="#15803d" fontSize="9" fontWeight="bold">CC 100% Plana y Pura</text>
      </g>
    </svg>
  </div>
);

export const OpAmpConfigurationsSVG: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
    {/* No Inversor */}
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
      <div className="font-bold text-slate-800 text-sm mb-1 text-center">1. Configuración No Inversora</div>
      <svg viewBox="0 0 320 180" className="w-full h-auto">
        <polygon points="120,40 220,90 120,140" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.8" />
        <text x="135" y="70" fill="#1d4ed8" fontWeight="bold" fontSize="14">+</text>
        <text x="135" y="120" fill="#1d4ed8" fontWeight="bold" fontSize="16">-</text>

        {/* Entrada V+ */}
        <line x1="30" y1="65" x2="120" y2="65" stroke="#10b981" strokeWidth="2" />
        <circle cx="30" cy="65" r="3" fill="#10b981" />
        <text x="25" y="55" fill="#047857" fontWeight="bold">Vent</text>

        {/* Salida */}
        <line x1="220" y1="90" x2="290" y2="90" stroke="#2563eb" strokeWidth="2" />
        <circle cx="290" cy="90" r="3" fill="#2563eb" />
        <text x="295" y="85" fill="#1d4ed8" fontWeight="bold">Vsal</text>

        {/* Lazo R2 entre salida y V- */}
        <line x1="250" y1="90" x2="250" y2="160" stroke="#475569" strokeWidth="1.5" />
        <line x1="250" y1="160" x2="90" y2="160" stroke="#475569" strokeWidth="1.5" />
        <line x1="90" y1="160" x2="90" y2="115" stroke="#475569" strokeWidth="1.5" />
        <line x1="90" y1="115" x2="120" y2="115" stroke="#475569" strokeWidth="1.5" />

        {/* Resistencia R2 (lazo) */}
        <rect x="150" y="152" width="45" height="16" fill="#fff" stroke="#334155" strokeWidth="1.5" />
        <text x="172" y="164" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="10">R2 (lazo)</text>

        {/* Resistencia R1 (a masa) */}
        <line x1="90" y1="115" x2="50" y2="115" stroke="#475569" strokeWidth="1.5" />
        <rect x="35" y="107" width="30" height="16" fill="#fff" stroke="#334155" strokeWidth="1.5" />
        <text x="50" y="119" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="9">R1</text>
        <line x1="35" y1="115" x2="15" y2="115" stroke="#475569" strokeWidth="1.5" />
        {/* Símbolo masa */}
        <line x1="15" y1="105" x2="15" y2="125" stroke="#475569" strokeWidth="1.5" />
        <line x1="11" y1="110" x2="11" y2="120" stroke="#475569" strokeWidth="1.5" />
      </svg>
      <div className="text-center font-bold text-blue-700 bg-blue-50 py-1 rounded mt-1">
        A = 1 + (R2 / R1) &nbsp;|&nbsp; En fase (0°)
      </div>
    </div>

    {/* Inversor */}
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
      <div className="font-bold text-slate-800 text-sm mb-1 text-center">2. Configuración Inversora</div>
      <svg viewBox="0 0 320 180" className="w-full h-auto">
        <polygon points="120,40 220,90 120,140" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.8" />
        <text x="135" y="70" fill="#b91c1c" fontWeight="bold" fontSize="16">-</text>
        <text x="135" y="120" fill="#b91c1c" fontWeight="bold" fontSize="14">+</text>

        {/* V+ a masa */}
        <line x1="120" y1="115" x2="70" y2="115" stroke="#475569" strokeWidth="1.5" />
        <line x1="70" y1="105" x2="70" y2="125" stroke="#475569" strokeWidth="1.5" />
        <line x1="66" y1="110" x2="66" y2="120" stroke="#475569" strokeWidth="1.5" />

        {/* Entrada a V- con R1 */}
        <line x1="20" y1="65" x2="55" y2="65" stroke="#10b981" strokeWidth="2" />
        <circle cx="20" cy="65" r="3" fill="#10b981" />
        <text x="15" y="55" fill="#047857" fontWeight="bold">Vent</text>
        <rect x="55" y="57" width="35" height="16" fill="#fff" stroke="#334155" strokeWidth="1.5" />
        <text x="72" y="69" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="10">R1</text>
        <line x1="90" y1="65" x2="120" y2="65" stroke="#475569" strokeWidth="1.5" />

        {/* Salida */}
        <line x1="220" y1="90" x2="290" y2="90" stroke="#dc2626" strokeWidth="2" />
        <circle cx="290" cy="90" r="3" fill="#dc2626" />
        <text x="295" y="85" fill="#b91c1c" fontWeight="bold">Vsal</text>

        {/* Lazo R2 entre salida y V- */}
        <line x1="250" y1="90" x2="250" y2="25" stroke="#475569" strokeWidth="1.5" />
        <line x1="250" y1="25" x2="105" y2="25" stroke="#475569" strokeWidth="1.5" />
        <line x1="105" y1="25" x2="105" y2="65" stroke="#475569" strokeWidth="1.5" />

        <rect x="150" y="17" width="45" height="16" fill="#fff" stroke="#334155" strokeWidth="1.5" />
        <text x="172" y="29" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="10">R2 (lazo)</text>
      </svg>
      <div className="text-center font-bold text-red-700 bg-red-50 py-1 rounded mt-1">
        A = - (R2 / R1) &nbsp;|&nbsp; Inversión 180°
      </div>
    </div>

    {/* Seguidor de Tensión */}
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
      <div className="font-bold text-slate-800 text-sm mb-1 text-center">3. Seguidor de Tensión (Buffer)</div>
      <svg viewBox="0 0 320 160" className="w-full h-auto">
        <polygon points="120,30 220,80 120,130" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.8" />
        <text x="135" y="60" fill="#15803d" fontWeight="bold" fontSize="14">+</text>
        <text x="135" y="105" fill="#15803d" fontWeight="bold" fontSize="16">-</text>

        {/* Entrada directa a V+ */}
        <line x1="30" y1="55" x2="120" y2="55" stroke="#16a34a" strokeWidth="2.5" />
        <circle cx="30" cy="55" r="3" fill="#16a34a" />
        <text x="25" y="45" fill="#15803d" fontWeight="bold">Vent</text>

        {/* Salida */}
        <line x1="220" y1="80" x2="280" y2="80" stroke="#16a34a" strokeWidth="2.5" />
        <circle cx="280" cy="80" r="3" fill="#16a34a" />
        <text x="285" y="75" fill="#15803d" fontWeight="bold">Vsal</text>

        {/* Cable directo de salida a V- */}
        <line x1="250" y1="80" x2="250" y2="135" stroke="#16a34a" strokeWidth="2" />
        <line x1="250" y1="135" x2="90" y2="135" stroke="#16a34a" strokeWidth="2" />
        <line x1="90" y1="135" x2="90" y2="100" stroke="#16a34a" strokeWidth="2" />
        <line x1="90" y1="100" x2="120" y2="100" stroke="#16a34a" strokeWidth="2" />
        <text x="170" y="150" textAnchor="middle" fill="#166534" fontSize="10">Cable directo (R2 = 0)</text>
      </svg>
      <div className="text-center font-bold text-green-700 bg-green-50 py-1 rounded mt-1">
        A = 1 &nbsp;|&nbsp; Vsal = Vent &nbsp;|&nbsp; Alta impedancia entrada
      </div>
    </div>

    {/* Sumador */}
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
      <div className="font-bold text-slate-800 text-sm mb-1 text-center">4. Sumador de Tensión (Mezclador)</div>
      <svg viewBox="0 0 320 160" className="w-full h-auto">
        <polygon points="130,30 230,80 130,130" fill="#faf5ff" stroke="#9333ea" strokeWidth="1.8" />
        <text x="145" y="60" fill="#7e22ce" fontWeight="bold" fontSize="16">-</text>
        <text x="145" y="105" fill="#7e22ce" fontWeight="bold" fontSize="14">+</text>

        {/* V+ a masa */}
        <line x1="130" y1="100" x2="95" y2="100" stroke="#475569" strokeWidth="1.5" />
        <line x1="95" y1="92" x2="95" y2="108" stroke="#475569" strokeWidth="1.5" />

        {/* Entrada 1 */}
        <line x1="15" y1="40" x2="45" y2="40" stroke="#2563eb" strokeWidth="1.8" />
        <text x="10" y="32" fill="#1d4ed8" fontWeight="bold">V1</text>
        <rect x="45" y="32" width="28" height="16" fill="#fff" stroke="#334155" strokeWidth="1.2" />
        <text x="59" y="44" textAnchor="middle" fontSize="8" fontWeight="bold">R1a</text>
        <line x1="73" y1="40" x2="105" y2="55" stroke="#475569" strokeWidth="1.5" />

        {/* Entrada 2 */}
        <line x1="15" y1="70" x2="45" y2="70" stroke="#059669" strokeWidth="1.8" />
        <text x="10" y="62" fill="#047857" fontWeight="bold">V2</text>
        <rect x="45" y="62" width="28" height="16" fill="#fff" stroke="#334155" strokeWidth="1.2" />
        <text x="59" y="74" textAnchor="middle" fontSize="8" fontWeight="bold">R1b</text>
        <line x1="73" y1="70" x2="105" y2="55" stroke="#475569" strokeWidth="1.5" />

        <line x1="105" y1="55" x2="130" y2="55" stroke="#475569" strokeWidth="1.5" />

        {/* Salida */}
        <line x1="230" y1="80" x2="290" y2="80" stroke="#9333ea" strokeWidth="2" />
        <text x="295" y="85" fill="#7e22ce" fontWeight="bold">Vsal</text>

        {/* Lazo R2 */}
        <line x1="260" y1="80" x2="260" y2="15" stroke="#475569" strokeWidth="1.5" />
        <line x1="260" y1="15" x2="115" y2="15" stroke="#475569" strokeWidth="1.5" />
        <line x1="115" y1="15" x2="115" y2="55" stroke="#475569" strokeWidth="1.5" />
        <rect x="165" y="7" width="45" height="16" fill="#fff" stroke="#334155" strokeWidth="1.5" />
        <text x="187" y="19" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="10">R2 (Master)</text>
      </svg>
      <div className="text-center font-bold text-purple-700 bg-purple-50 py-1 rounded mt-1">
        Vsal = - [ (R2/R1a)·V1 + (R2/R1b)·V2 ]
      </div>
    </div>
  </div>
);
