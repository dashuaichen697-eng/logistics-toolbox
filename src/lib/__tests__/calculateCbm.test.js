import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateCbm } from '../calculateCbm.js';

// Synthetic numbers only; no real shipment data.
test('unit volume is L*W*H/1,000,000 and total volume multiplies by cartons', () => {
  const result = calculateCbm(10, 20, 50, 3);
  assert.equal(result.unitCbm, 0.01);
  assert.equal(result.totalCbm, 0.03);
});
