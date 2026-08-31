const test = require('node:test');
const assert = require('node:assert/strict');

const {
  calculateBonusSummary,
  formatCurrency,
} = require('../src');

test('calculates bonus, total balance, and wagering requirement', () => {
  assert.deepEqual(
    calculateBonusSummary({
      deposit: 100,
      bonusPercentage: 50,
      wageringMultiplier: 35,
    }),
    {
      deposit: 100,
      bonusPercentage: 50,
      wageringMultiplier: 35,
      bonusAmount: 50,
      totalBalance: 150,
      wageringRequirement: 1750,
    },
  );
});

test('rejects invalid or negative inputs', () => {
  assert.throws(
    () => calculateBonusSummary({ deposit: -1, bonusPercentage: 50, wageringMultiplier: 35 }),
    /deposit must be/,
  );
  assert.throws(
    () => calculateBonusSummary({ deposit: 100, bonusPercentage: 'nope', wageringMultiplier: 35 }),
    /bonusPercentage must be/,
  );
});

test('formats an amount using the requested currency', () => {
  assert.match(formatCurrency(150, 'NZD', 'en-NZ'), /150\.00/);
});

