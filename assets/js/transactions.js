$(document).ready(function () {
  $("#depositForm").on("submit", function (event) {
    event.preventDefault(); // Previene la recarga

    const monto = parseFloat($("#monto").val()); // Obtiene el input y se convierte a números
    let balanceActual = parseFloat(localStorage.getItem("balance") || "0");

    if (monto > 0) {
      balanceActual += monto;
      localStorage.setItem("balance", balanceActual.toFixed(2)); // Actualiza balance

      alert("Depósito realizado con éxito.");
      // Redirige a menu con el balance actualizado
      window.location.href = "menu.html";
    } else {
      alert("Por favor, ingrese un monto válido.");
    }
  });
});
