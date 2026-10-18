/**
 * Pure calculation functions for Electronica II topics:
 * - Amplification & Decibels
 * - Passive Filters (RL, RC, LC, XL, XC, fc)
 * - LM317 / LM337 Regulators
 * - Operational Amplifiers
 */

/** Calculate Inductive Reactance XL = 2 * PI * f * L (Ohms) */
export function calcXL(f: number, L: number): number {
  if (f <= 0 || L <= 0) return 0;
  return 2 * Math.PI * f * L;
}

/** Calculate Capacitive Reactance XC = 1 / (2 * PI * f * C) (Ohms) */
export function calcXC(f: number, C: number): number {
  if (f <= 0 || C <= 0) return 0;
  return 1 / (2 * Math.PI * f * C);
}

/** Calculate Cutoff Frequency for RL filter fc = R / (2 * PI * L) (Hz) */
export function calcFC_RL(R: number, L: number): number {
  if (R <= 0 || L <= 0) return 0;
  return R / (2 * Math.PI * L);
}

/** Calculate Cutoff Frequency for RC filter fc = 1 / (2 * PI * R * C) (Hz) */
export function calcFC_RC(R: number, C: number): number {
  if (R <= 0 || C <= 0) return 0;
  return 1 / (2 * Math.PI * R * C);
}

/** Calculate Cutoff Frequency for LC filter fc = 1 / (2 * PI * sqrt(L * C)) (Hz) */
export function calcFC_LC(L: number, C: number): number {
  if (L <= 0 || C <= 0) return 0;
  return 1 / (2 * Math.PI * Math.sqrt(L * C));
}

/** Linear Gain A = Vout / Vin */
export function calcGainLinear(vin: number, vout: number): number {
  if (vin === 0) return 0;
  return vout / vin;
}

/** Gain in dB = 20 * log10(|A|) */
export function calcGainDb(A: number): number {
  const absA = Math.abs(A);
  if (absA <= 0) return -Infinity;
  return 20 * Math.log10(absA);
}

/** Linear Gain from dB: A = 10^(a / 20) */
export function calcLinearFromDb(db: number): number {
  return Math.pow(10, db / 20);
}

/** LM317 Output Voltage: Vout = 1.25 * (1 + R1 / R2) */
export function calcLM317Vout(R1_toGround: number, R2_betweenOutAdj: number = 240): number {
  if (R2_betweenOutAdj <= 0) return 1.25;
  return 1.25 * (1 + R1_toGround / R2_betweenOutAdj);
}

/** LM317 R1 resistor (to ground) given target Vout and R2 */
export function calcLM317R1(targetVout: number, R2_betweenOutAdj: number = 240): number {
  if (targetVout < 1.25 || R2_betweenOutAdj <= 0) return 0;
  return R2_betweenOutAdj * (targetVout / 1.25 - 1);
}

/** OpAmp Non-inverting gain: A = 1 + Rlazo / Rmasa */
export function calcOpAmpNonInverting(Rmasa: number, Rlazo: number): number {
  if (Rmasa <= 0) return 1;
  return 1 + Rlazo / Rmasa;
}

/** OpAmp Inverting gain: A = - Rlazo / Rentrada */
export function calcOpAmpInverting(Rin: number, Rlazo: number): number {
  if (Rin <= 0) return 0;
  return -(Rlazo / Rin);
}

/** OpAmp Inverted Summing output: Vout = - sum( (Rlazo / Rin_i) * Vin_i ) */
export function calcOpAmpSumming(inputs: { vin: number; R: number }[], Rlazo: number): number {
  let sum = 0;
  for (const item of inputs) {
    if (item.R > 0) {
      sum += (Rlazo / item.R) * item.vin;
    }
  }
  return -sum;
}
