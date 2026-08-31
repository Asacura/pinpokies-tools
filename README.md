# Pin Pokies Bonus Calculator

A small browser calculator and framework-free JavaScript helper for estimating bonus value and wagering requirements.

Try the live [Pin Pokies Bonus Calculator](https://pinpokies.com/bonus-calculator/).

## Features

- Calculates the bonus amount from a deposit and bonus percentage
- Shows the deposit plus bonus total
- Estimates wagering requirements from a multiplier
- Runs in the browser and exposes the same calculation as a zero-dependency npm package

## Browser calculator

Open `index.html` in a browser and enter the deposit, bonus percentage, and wagering multiplier.

## JavaScript package

Install the helper with:

```bash
npm install pin-pokies-bonus-calculator
```

Use it from Node.js or a bundler:

```js
const {
  calculateBonusSummary,
  formatCurrency,
} = require('pin-pokies-bonus-calculator');

const summary = calculateBonusSummary({
  deposit: 100,
  bonusPercentage: 100,
  wageringMultiplier: 35,
});

console.log(formatCurrency(summary.bonusAmount));
console.log(summary.wageringRequirement);
```

The package contains calculation helpers only; it does not process deposits, accounts, or payments. All values are estimates. Always check the actual bonus terms and applicable rules before relying on them.

## Development

```bash
npm test
```

## License

MIT

