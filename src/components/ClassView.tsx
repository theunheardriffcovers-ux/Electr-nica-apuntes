import React, { useState } from 'react';
import { ClassSection } from '../data/classContent';
import {
  AudioChainSVG,
  BalancedNoiseCancellationSVG,
  PowerSupplyStagesSVG,
  OpAmpConfigurationsSVG,
} from './DiagramSVGs';
import {
  BookOpen,
  HelpCircle,
  Wrench,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  FileText,
  ChevronRight,
  ExternalLink,
  Table,
} from 'lucide-react';

interface ClassViewProps {
  section: ClassSection;
  onGoToQuiz?: (quizNum: number) => void;
}

export const ClassView: React.FC<ClassViewProps> = ({ section, onGoToQuiz }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'procedures' | 'example' | 'exam'>('content');

  const renderDiagram = () => {
    switch (section.diagramType) {
      case 'audio_chain':
        return <AudioChainSVG />;
      case 'balanced':
        return (
          <div className="space-y-4">
            <AudioChainSVG />
            <BalancedNoiseCancellationSVG />
          </div>
        );
      case 'power_supply':
      case 'regulators':
        return <PowerSupplyStagesSVG />;
      case 'opamps':
        return <OpAmpConfigurationsSVG />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full text-xs font-bold tracking-wide uppercase">
            Clase {section.id} de 7 &nbsp;•&nbsp; {section.estimatedPages}
          </span>
          {section.id <= 6 && onGoToQuiz && (
            <button
              onClick={() => onGoToQuiz(section.id)}
              className="flex items-center gap-1.5 text-xs bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-400/30 px-3 py-1.5 rounded-lg font-semibold transition-all"
            >
              <span>Ver Cuestionario N° {section.id} Resuelto</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <h1 className="text-xl md:text-2xl font-black tracking-tight text-white mb-2">
          {section.title}
        </h1>
        <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
          {section.subtitle}
        </p>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('content')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'content'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Conceptos y Explicación</span>
          </button>

          <button
            onClick={() => setActiveTab('procedures')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'procedures'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>2. Procedimientos Paso a Paso ({section.procedures.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('example')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'example'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>3. Ejemplo Numérico Clave</span>
          </button>

          <button
            onClick={() => setActiveTab('exam')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'exam'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-amber-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>4. Claves y Trampas de Examen ({section.examKeys.length})</span>
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-6 md:p-8 space-y-8">
        {/* TAB 1: CONCEPTOS Y EXPLICACIÓN */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            {/* Síntesis inteligente */}
            <div className="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-lg text-slate-800 text-sm leading-relaxed">
              <span className="font-bold text-blue-900 block mb-1">Síntesis Esencial de la Clase:</span>
              {section.summary}
            </div>

            {/* Explicación Concreta */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b pb-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>Explicación Concreta y Práctica</span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-4 rounded-lg border border-slate-200">
                {section.explanation}
              </p>
            </div>

            {/* ¿Para qué sirve? */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>¿Para qué sirve en Sonido y Grabación?</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6 border-l-2 border-emerald-400">
                {section.practicalUse}
              </p>
            </div>

            {/* Esquema Técnico SVG */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-800">Esquema Circuital / Diagrama de Bloques</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                {renderDiagram()}
              </div>
            </div>

            {/* Conceptos y Definiciones Desglosadas */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b pb-2">
                Conceptos y Definiciones Esenciales
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {section.concepts.map((concept, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-white hover:border-blue-300 transition-all">
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      <span>{concept.title}</span>
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed mb-2">
                      {concept.description}
                    </p>

                    {concept.formula && (
                      <div className="my-2 p-2 bg-slate-900 text-emerald-400 font-mono text-xs rounded border border-slate-800">
                        {concept.formula}
                      </div>
                    )}

                    {concept.details && (
                      <ul className="mt-2 space-y-1 pl-4 list-disc text-xs text-slate-600">
                        {concept.details.map((d, dIdx) => (
                          <li key={dIdx} className="leading-relaxed">
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cuadro Comparativo (si existe) */}
            {section.comparativeTable && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b pb-2">
                  <Table className="w-4 h-4 text-purple-600" />
                  <span>{section.comparativeTable.title}</span>
                </h3>
                <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                  <table className="w-full text-left text-xs font-sans">
                    <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <tr>
                        {section.comparativeTable.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {section.comparativeTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/80">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-3 text-slate-700 leading-normal ${
                                cIdx === 0 ? 'font-bold text-slate-900' : ''
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PROCEDIMIENTOS */}
        {activeTab === 'procedures' && (
          <div className="space-y-8">
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-emerald-900 text-xs">
              <span className="font-bold block text-sm mb-1">Prioridad Máxima: Procedimientos de Examen</span>
              Cada procedimiento detalla el objetivo, la fórmula o principio físico aplicado, los pasos cronológicos con su justificación teórica y el error frecuente que debes evitar.
            </div>

            {section.procedures.map((proc, pIdx) => (
              <div key={pIdx} className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3">
                  <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                      {pIdx + 1}
                    </span>
                    <span>{proc.title}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                    Principio: {proc.formulaOrPrinciple}
                  </span>
                </div>

                <div className="text-xs text-slate-700">
                  <span className="font-bold text-slate-900">Objetivo: </span>
                  {proc.objective}
                </div>

                {/* Steps */}
                <div className="space-y-2.5 mt-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Secuencia Ordenada de Ejecución:
                  </div>
                  {proc.steps.map((s) => (
                    <div key={s.step} className="flex gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <div className="w-6 h-6 rounded-md bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {s.step}
                      </div>
                      <div className="space-y-1 text-xs">
                        <div className="font-bold text-slate-900">{s.action}</div>
                        <div className="text-slate-600 leading-relaxed italic pl-1 border-l-2 border-blue-400">
                          Justificación: {s.justification}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Result & Common Error */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-emerald-900">
                    <span className="font-bold block mb-1 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Resultado e Interpretación:</span>
                    </span>
                    {proc.resultAndInterpretation}
                  </div>
                  <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg text-rose-900">
                    <span className="font-bold block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>Error Frecuente a Evitar:</span>
                    </span>
                    {proc.commonError}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: EJEMPLO CLAVE */}
        {activeTab === 'example' && (
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2 border-b pb-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>{section.keyExample.title}</span>
              </h3>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs space-y-2">
                <div className="font-bold text-slate-800 text-sm">Enunciado del Problema:</div>
                <p className="text-slate-700 leading-relaxed">{section.keyExample.problem}</p>
              </div>

              {/* Datos */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-slate-800">Datos proporcionados:</div>
                <div className="flex flex-wrap gap-2">
                  {section.keyExample.givenData.map((d, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-800 border px-2.5 py-1 rounded text-xs font-mono">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resolución */}
              <div className="space-y-2 bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs">
                <div className="text-emerald-400 font-bold mb-2 font-sans text-sm">
                  Resolución Paso a Paso:
                </div>
                {section.keyExample.resolution.map((line, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>

              {/* Resultado & Warning */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-emerald-900">
                  <span className="font-bold block mb-1">Resultado Final:</span>
                  <p>{section.keyExample.result}</p>
                  <p className="mt-2 text-emerald-700 italic">{section.keyExample.interpretation}</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
                  <span className="font-bold block mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Advertencia de Taller / Examen:</span>
                  </span>
                  <p>{section.keyExample.warning}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: LO QUE DEBO RECORDAR */}
        {activeTab === 'exam' && (
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg text-amber-950 text-xs">
              <span className="font-bold text-sm block mb-1 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Lo que debes recordar para el parcial o final</span>
              </span>
              Los docentes de Electrónica II suelen colocar trampas específicas en los enunciados. Repasa estos puntos críticos antes de entrar al aula:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.examKeys.map((item, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm space-y-2 text-xs">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>{item.point}</span>
                  </h4>
                  <div className="bg-blue-50/60 p-2.5 rounded text-blue-950 leading-relaxed">
                    <span className="font-bold block text-blue-800">Concepto Clave:</span>
                    {item.tip}
                  </div>
                  <div className="bg-rose-50/60 p-2.5 rounded text-rose-950 leading-relaxed border border-rose-200/50">
                    <span className="font-bold block text-rose-800 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                      <span>Trampa habitual de examen:</span>
                    </span>
                    {item.frequentTrap}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
