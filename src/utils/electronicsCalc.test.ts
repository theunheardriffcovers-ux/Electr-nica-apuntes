import test from 'node:test';
import assert from 'node:assert/strict';
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
} from './electronicsCalc.ts';

test('calcXL matches Quiz 6 values', () => {
  // Q1: L = 1H, f = 100Hz -> XL = 2 * pi * 100 * 1 = 628.318 -> 628 Ohms
  const xl1 = calcXL(100, 1);
  assert.ok(Math.abs(xl1 - 628.318) < 0.5);

  // Q2: L = 1mH = 0.001H, f = 100Hz -> XL = 0.628 Ohms = 628 mOhms
  const xl2 = calcXL(100, 0.001);
  assert.ok(Math.abs(xl2 - 0.6283) < 0.01);
});

test('calcXC matches Quiz 6 values', () => {
  // Q3: C = 100uF, f = 100Hz -> XC = 1 / (2 * pi * 100 * 100e-6) = 15.915 Ohms -> 15.9 Ohms
  const xc1 = calcXC(100, 100e-6);
  assert.ok(Math.abs(xc1 - 15.915) < 0.1);

  // Q4: C = 314uF, f = 200Hz -> XC = 1 / (2 * pi * 200 * 314e-6) = 2.534 Ohms -> 2.53 Ohms
  const xc2 = calcXC(200, 314e-6);
  assert.ok(Math.abs(xc2 - 2.534) < 0.05);
});

test('calcFC matches Quiz 6 and class examples', () => {
  // RL filter: R = 1000 Ohms, L = 0.15915 H -> fc = 1000 / (2 * pi * 0.15915) = 1000 Hz
  const fcRL = calcFC_RL(1000, 0.15915);
  assert.ok(Math.abs(fcRL - 1000) < 1);

  // RC filter: R = 500 Ohms, C = 2uF -> fc = 1 / (2 * pi * 500 * 2e-6) = 159.15 Hz -> 159 Hz
  const fcRC = calcFC_RC(500, 2e-6);
  assert.ok(Math.abs(fcRC - 159.15) < 0.5);
});

test('Gain calculations match Quiz 4 and class examples', () => {
  // Vin = 5mV, Vout = 10mV -> A = 2, dB = 6.02
  const A = calcGainLinear(5, 10);
  assert.equal(A, 2);
  const db = calcGainDb(A);
  assert.ok(Math.abs(db - 6.02) < 0.1);

  // A from dB: 20dB -> A = 10, -20dB -> A = 0.1, 60dB -> A = 1000
  assert.ok(Math.abs(calcLinearFromDb(20) - 10) < 0.01);
  assert.ok(Math.abs(calcLinearFromDb(-20) - 0.1) < 0.001);
  assert.ok(Math.abs(calcLinearFromDb(60) - 1000) < 1);
});

test('LM317 calculations match Quiz 3 and slides', () => {
  // Slide 69: R2 = 240, target 5V -> R1 = 720
  const r1 = calcLM317R1(5, 240);
  assert.ok(Math.abs(r1 - 720) < 0.01);

  // Slide 73: target 20V, R2 = 220 -> R1 = 3300
  const r1_20 = calcLM317R1(20, 220);
  assert.ok(Math.abs(r1_20 - 3300) < 0.01);

  // Slide 65: R1 = 1500, R2 = 240 -> Vout approx 9.06V
  const vout = calcLM317Vout(1500, 240);
  assert.ok(Math.abs(vout - 9.06) < 0.1);
});

test('OpAmp gain calculations match Class 7', () => {
  // Non-inverting: R1 = 2k, R2 = 40k -> A = 1 + 40k/2k = 21
  const Anoinv = calcOpAmpNonInverting(2000, 40000);
  assert.equal(Anoinv, 21);

  // Inverting: R1 = 2k, R2 = 40k -> A = -20
  const Ainv = calcOpAmpInverting(2000, 40000);
  assert.equal(Ainv, -20);

  // Summing: R2 = 4k, Vin1 = 1mV (R1a = 1k), Vin2 = 1mV (R1b = 2k)
  // Vout = -(4k/1k * 1mV + 4k/2k * 1mV) = -(4 + 2) = -6 mV
  const Vsum = calcOpAmpSumming(
    [
      { vin: 1, R: 1000 },
      { vin: 1, R: 2000 },
    ],
    4000
  );
  assert.equal(Vsum, -6);
});
