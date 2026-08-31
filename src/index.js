'use strict';

function toNonNegativeNumber(value, label) {
  const number = Number(value);

  if (!Number.isFinite(number) || number < 0) {
    throw new TypeError(`${label} must be a finite number greater than or equal to 0`);
  }

  return number;
}

/**
 * Calculate an informational bonus summary.
 *
 * This helper does not represent or guarantee any operator's actual terms.
 */
function calculateBonusSummary({
  deposit,
  bonusPercentage,
  wageringMultiplier,
}) {
  const normalizedDeposit = toNonNegativeNumber(deposit, 'deposit');
  const normalizedBonusPercentage = toNonNegativeNumber(
    bonusPercentage,
    'bonusPercentage',
  );
  const normalizedWageringMultiplier = toNonNegativeNumber(
    wageringMultiplier,
    'wageringMultiplier',
  );

  const bonusAmount = normalizedDeposit * normalizedBonusPercentage / 100;

  return {
    deposit: normalizedDeposit,
    bonusPercentage: normalizedBonusPercentage,
    wageringMultiplier: normalizedWageringMultiplier,
    bonusAmount,
    totalBalance: normalizedDeposit + bonusAmount,
    wageringRequirement: bonusAmount * normalizedWageringMultiplier,
  };
}

function formatCurrency(value, currency = 'NZD', locale = 'en-NZ') {
  const amount = toNonNegativeNumber(value, 'value');

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

module.exports = {
  calculateBonusSummary,
  formatCurrency,
};

