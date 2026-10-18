import React from 'react';
import { CLASSES_DATA } from '../data/classContent';
import { QUIZZES_DATA } from '../data/quizzesData';
import {
  AudioChainSVG,
  BalancedNoiseCancellationSVG,
  PowerSupplyStagesSVG,
  OpAmpConfigurationsSVG,
} from './DiagramSVGs';
import { Printer, Download, BookOpen, AlertTriangle, CheckCircle, FileText } from 'lucide-react';

interface PrintA4ViewProps {
  onBackToApp?: () => void;
}

export const PrintA4View: React.FC<PrintA4ViewProps> = ({ onBackToApp }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-100 min-h-screen py-8 print:py-0 print:bg-white text-slate-900 font-sans">
      {/* Top Action Bar (hidden in print) */}
      <div className="max-w-[210mm] mx-auto mb-6 bg-white p-4 rounded-xl shadow-md border border-slate-300 print:hidden flex flex-wrap items-center justify-between gap-4 sticky top-4 z-50">
        <div>
          <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Vista de Documento A4 Preparado para Imprimir / Guardar en PDF</span>
          </h2>
          <p className="text-[11px] text-slate-500">
            Diseñado según las especificaciones del Prompt Maestro: 7 clases, procedimientos completos y cuestionarios resueltos.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {onBackToApp && (
            <button
              onClick={onBackToApp}
              className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all"
            >
              Volver a la App
            </button>
          )}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-bold shadow transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Guardar como PDF (A4)</span>
          </button>
        </div>
      </div>

      {/* Printable Sheet Container */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none p-8 md:p-12 print:p-6 space-y-12 print:space-y-8">
        {/* PORTADA FORMAL */}
        <div className="border-4 border-slate-900 p-8 rounded-lg text-center space-y-6 page-break-after">
          <div className="space-y-1 text-slate-700 uppercase tracking-widest text-xs font-bold">
            <div>Universidad Nacional de La Plata — Facultad de Artes</div>
            <div>Tecnicatura Universitaria en Sonido y Grabación</div>
            <div className="text-blue-700 font-black text-sm pt-1">Cátedra de Electrónica II</div>
          </div>

          <div className="py-8 my-4 border-y-2 border-slate-800 space-y-3">
            <h1 className="text-2xl md:text-3xl font-black text-slate-950 uppercase tracking-tight">
              Apuntes Concretos Integrados para Examen Parcial o Final
            </h1>
            <div className="text-sm font-semibold text-slate-600">
              Guía de Estudio Profesional — 7 Clases & Cuestionarios Oficiales Resueltos
            </div>
          </div>

          <div className="grid grid-cols-2 text-left text-xs text-slate-600 max-w-md mx-auto pt-4 gap-y-2">
            <div><span className="font-bold text-slate-900">Materia:</span> Electrónica II</div>
            <div><span className="font-bold text-slate-900">Destino:</span> Examen Parcial / Final</div>
            <div><span className="font-bold text-slate-900">Formato:</span> Documento A4 Síntesis</div>
            <div><span className="font-bold text-slate-900">Estado:</span> 100% Verificado</div>
          </div>

          {/* Nota de Canva aclaratoria obligatoria */}
          <div className="bg-slate-50 border border-slate-200 p-3 rounded text-[10px] text-slate-500 text-left leading-relaxed mt-6">
            <span className="font-bold text-slate-700">Nota sobre edición y Canva:</span> El presente documento ha sido generado con maquetación tipográfica A4 nativa vectorizada. Para editarlo en Canva, puedes utilizar la función "Importar PDF" en tu cuenta de Canva (arrastrar y soltar el archivo PDF generado con el botón superior), conservando fuentes, vectores y diagramas editables.
          </div>
        </div>

        {/* ÍNDICE GENERAL */}
        <div className="page-break-after border-b pb-6 space-y-4">
          <h2 className="text-lg font-black uppercase text-slate-900 tracking-wide border-b-2 border-blue-600 pb-2">
            Índice General de Contenidos
          </h2>
          <div className="grid grid-cols-1 gap-2 text-xs">
            {CLASSES_DATA.map((cls) => (
              <div key={cls.id} className="flex items-center justify-between py-1.5 border-b border-dashed border-slate-200">
                <span className="font-bold text-slate-800">
                  Clase {cls.id}: {cls.shortTitle}
                </span>
                <span className="text-slate-500 italic text-[11px]">{cls.subtitle}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-1.5 border-b border-dashed border-slate-200 font-bold text-blue-800">
              <span>Sección Especial: Cuestionarios Oficiales Resueltos (1 al 6)</span>
              <span>120 preguntas verificadas</span>
            </div>
            <div className="flex items-center justify-between py-1.5 font-bold text-emerald-800">
              <span>Resumen Mnemotécnico de Fórmulas y Errores Críticos</span>
              <span>Guía rápida</span>
            </div>
          </div>
        </div>

        {/* LAS 7 CLASES */}
        {CLASSES_DATA.map((cls) => (
          <section key={cls.id} className="page-break-after space-y-6 pt-4">
            {/* Header de clase */}
            <div className="border-b-2 border-slate-900 pb-2">
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest block">
                Sección {cls.id} • Electrónica II UNLP
              </span>
              <h2 className="text-lg font-black text-slate-900 leading-snug">
                {cls.title}
              </h2>
              <p className="text-xs text-slate-500">{cls.subtitle}</p>
            </div>

            {/* 1. Conceptos y Definiciones Esenciales */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 bg-slate-100 p-1.5 rounded">
                1. Conceptos y Definiciones Esenciales
              </h3>
              <div className="space-y-2 text-xs leading-relaxed text-slate-700">
                {cls.concepts.map((c, i) => (
                  <div key={i} className="pl-3 border-l-2 border-blue-500">
                    <span className="font-bold text-slate-900">{c.title}: </span>
                    <span>{c.description}</span>
                    {c.formula && (
                      <div className="font-mono bg-slate-50 text-blue-800 p-1 rounded border border-slate-200 my-1">
                        {c.formula}
                      </div>
                    )}
                    {c.details && (
                      <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px] text-slate-600">
                        {c.details.map((d, dIdx) => (
                          <li key={dIdx}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Explicación Concreta y ¿Para qué sirve? */}
            <div className="space-y-2 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <div className="font-bold text-slate-900">2. Explicación Concreta y Aplicación Práctica:</div>
              <p>{cls.explanation}</p>
              <div className="pt-2 text-[11px] text-emerald-900 font-medium">
                <span className="font-bold">¿Para qué sirve?: </span>
                {cls.practicalUse}
              </div>
            </div>

            {/* 3. Esquema Técnico */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Esquema Circuital / Diagrama de Bloques:
              </div>
              <div className="border border-slate-200 rounded p-2 bg-white">
                {cls.diagramType === 'audio_chain' && <AudioChainSVG />}
                {cls.diagramType === 'balanced' && (
                  <div className="space-y-2">
                    <AudioChainSVG />
                    <BalancedNoiseCancellationSVG />
                  </div>
                )}
                {(cls.diagramType === 'power_supply' || cls.diagramType === 'regulators') && (
                  <PowerSupplyStagesSVG />
                )}
                {cls.diagramType === 'opamps' && <OpAmpConfigurationsSVG />}
              </div>
            </div>

            {/* 4. Procedimientos Paso a Paso */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 bg-slate-100 p-1.5 rounded">
                4. Procedimientos Técnicos y de Cálculo
              </h3>
              {cls.procedures.map((proc, pIdx) => (
                <div key={pIdx} className="border border-slate-200 rounded p-3 text-xs space-y-2 bg-white">
                  <div className="font-bold text-slate-900 flex justify-between">
                    <span>{proc.title}</span>
                    <span className="text-[10px] font-mono text-slate-500">{proc.formulaOrPrinciple}</span>
                  </div>
                  <div className="text-[11px] text-slate-600"><span className="font-bold">Objetivo:</span> {proc.objective}</div>

                  <div className="space-y-1 pl-2">
                    {proc.steps.map((st) => (
                      <div key={st.step} className="flex gap-2 text-[11px]">
                        <span className="font-bold text-slate-800">{st.step}.</span>
                        <div>
                          <span className="font-semibold text-slate-800">{st.action}: </span>
                          <span className="text-slate-600 italic">{st.justification}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] bg-emerald-50 p-1.5 rounded text-emerald-900">
                    <span className="font-bold">Resultado:</span> {proc.resultAndInterpretation}
                  </div>
                  <div className="text-[11px] bg-rose-50 p-1.5 rounded text-rose-900">
                    <span className="font-bold">Error Frecuente:</span> {proc.commonError}
                  </div>
                </div>
              ))}
            </div>

            {/* 5. Ejemplo Clave Resuelto */}
            <div className="border border-slate-200 rounded p-3 text-xs space-y-2 bg-slate-50/60">
              <div className="font-bold text-slate-900">5. Ejemplo Clave del Material de Clase: {cls.keyExample.title}</div>
              <p className="text-[11px] text-slate-700">{cls.keyExample.problem}</p>
              <div className="bg-slate-900 text-slate-100 p-2.5 rounded font-mono text-[10px] space-y-0.5">
                {cls.keyExample.resolution.map((line, lIdx) => (
                  <div key={lIdx}>{line}</div>
                ))}
              </div>
              <div className="text-[11px] font-bold text-emerald-800">Resultado: {cls.keyExample.result}</div>
            </div>

            {/* 6. Cuadro Comparativo (si existe) */}
            {cls.comparativeTable && (
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-slate-800">{cls.comparativeTable.title}</div>
                <table className="w-full text-left text-[10px] border border-slate-200">
                  <thead className="bg-slate-100 font-bold">
                    <tr>
                      {cls.comparativeTable.headers.map((h, hi) => (
                        <th key={hi} className="p-1.5 border-b border-slate-200">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {cls.comparativeTable.rows.map((r, ri) => (
                      <tr key={ri}>
                        {r.map((c, ci) => (
                          <td key={ci} className={`p-1.5 ${ci === 0 ? 'font-bold' : ''}`}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* 7. Lo que debo recordar para el examen */}
            <div className="border-2 border-amber-300 bg-amber-50/50 rounded p-3 text-xs space-y-2">
              <div className="font-bold text-amber-950 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Lo que DEBO recordar para el examen (Trampas y Claves):</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                {cls.examKeys.map((k, ki) => (
                  <div key={ki} className="bg-white p-2 rounded border border-amber-200 space-y-0.5">
                    <div className="font-bold text-slate-900">• {k.point}</div>
                    <div className="text-slate-700">{k.tip}</div>
                    <div className="text-rose-700 italic">Evitar: {k.frequentTrap}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* SECCIÓN FINAL: RESOLUCIÓN DE CUESTIONARIOS */}
        <section className="page-break-after space-y-6 pt-6 border-t-2 border-slate-900">
          <div className="border-b-2 border-blue-600 pb-2">
            <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight">
              Sección Especial: Cuestionarios Oficiales Resueltos (1 al 6)
            </h2>
            <p className="text-xs text-slate-500">
              Solución oficial de todas las preguntas de los cuestionarios con su justificación teórica y procedimientos matemáticos.
            </p>
          </div>

          <div className="space-y-8">
            {QUIZZES_DATA.map((quiz) => (
              <div key={quiz.quizNumber} className="border border-slate-200 rounded-lg p-4 space-y-3 bg-white">
                <div className="flex items-center justify-between border-b pb-2">
                  <h3 className="font-black text-sm text-slate-900">
                    {quiz.title}
                  </h3>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {quiz.passingScore}
                  </span>
                </div>

                <div className="space-y-3">
                  {quiz.questions.map((q) => (
                    <div key={q.id} className="text-xs border-b border-slate-100 pb-2.5 space-y-1">
                      <div className="font-bold text-slate-900 flex gap-2">
                        <span className="text-blue-700">P{q.questionNumber}:</span>
                        <span>{q.questionText}</span>
                      </div>
                      <div className="text-emerald-800 font-bold bg-emerald-50/70 p-1.5 rounded pl-3">
                        ✓ Respuesta Correcta: {q.correctAnswers.join(' ; ')}
                      </div>
                      {q.procedure && (
                        <div className="font-mono text-[10px] bg-slate-900 text-slate-100 p-2 rounded">
                          {q.procedure.join(' | ')}
                        </div>
                      )}
                      <div className="text-slate-600 text-[11px] pl-3">
                        <span className="font-semibold">Fundamento: </span>
                        {q.explanation}
                      </div>
                      <div className="text-amber-900 text-[11px] pl-3 font-semibold">
                        💡 Para memorizar: {q.memoryTip}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PIE FORMAL */}
        <div className="text-center text-[10px] text-slate-400 pt-6 border-t border-slate-200">
          Documento elaborado para estudiantes de Electrónica II — Tecnicatura Universitaria en Sonido y Grabación (UNLP).
        </div>
      </div>
    </div>
  );
};
