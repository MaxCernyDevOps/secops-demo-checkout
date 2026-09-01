// Applies a discount code to the order total.
const codes = { WELCOME10: 0.1, SPRING20: 0.2 };

function applyDiscount(total, code) {
    const rate = codes[code] || 0;
    return Math.round(total * (1 - rate) * 100) / 100;
}

module.exports = { applyDiscount };
