function updateValue(sliderId, valueId) {
    const slider = document.getElementById(sliderId);
    const valueSpan = document.getElementById(valueId);
    valueSpan.textContent = slider.value;
}

function calculateSIP() {
    const P = parseFloat(document.getElementById('monthlyInvestment').value);
    const r = parseFloat(document.getElementById('annualReturnRate').value) / 100 / 12;
    const n = parseInt(document.getElementById('investmentDuration').value) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = P* n;   

    document.getElementById('investedval').innerText = invested.toFixed(2);
    document.getElementById('futureValue').innerText = futureValue.toFixed(2);
}
