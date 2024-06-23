$(document).ready(function () {
  let balance = 0;

  function updateBalance() {
    $("#balance").text(balance.toFixed(2));
  }

  $("#depositBtn").click(function () {
    let amount = parseFloat($("#amount").val());
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      updateBalance();
      $("#amount").val("");
      alert("Depósito efectuado satisfactoriamente");
    } else {
      alert("El monto ingresado no es válido.");
    }
  });

  $("#withdrawBtn").click(function () {
    let amount = parseFloat($("#amount").val());
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      balance -= amount;
      updateBalance();
      $("#amount").val("");
      alert("Retiro exitoso!");
    } else {
      alert("Cantidad no válida. Ingrese un número válido dentro de su saldo.");
    }
  });
});