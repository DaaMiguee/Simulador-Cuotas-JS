const cuotasCalc = () => {
    const cuotas = parseInt(document.getElementById("cuotas").value);
    const monto = parseFloat(document.getElementById("monto").value);
    if (isNaN(cuotas) || isNaN(monto) || cuotas <= 0 || monto <= 0) {
        alert("Por favor, ingresa valores válidos para cuotas y monto.");
        return;
    }
    const totalPagar = monto / cuotas;
    document.getElementById("total").innerText = `Vas a pagar: ${cuotas} cuotas de $${totalPagar.toLocaleString('es-AR')}`;
}

document.getElementById("accept").addEventListener("click", () => {
    cuotasCalc();
});

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("cuotas").value = "";
    document.getElementById("monto").value = "";
    document.getElementById("total").innerText = "Vas a pagar: $0";
});