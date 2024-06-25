$(document).ready(function () {
  // Marcar un contacto como seleccionado
  $("#contactList").on("click", ".list-group-item", function () {
    // Remover la clase 'selected' de todos los elementos y luego agregarla al elemento clickeado
    $(".list-group-item").removeClass("selected");
    $(this).addClass("selected");
  });

  // Manejar clic en el botón de guardar contacto en el modal
  $("#botonGuardarContacto").on("click", function () {
    // (El código existente aquí permanece igual)
  });

  // Manejar el envío del formulario de enviar dinero
  $("#sendMoneyForm").on("submit", function (event) {
    event.preventDefault();
    // Verificar que se haya seleccionado un contacto
    let contactoSeleccionado = $(
      "#contactList .list-group-item.selected .contact-name"
    ).text();
    let monto = parseFloat($("#amount").val());

    if (!contactoSeleccionado) {
      alert("Seleccione un contacto para enviar dinero.");
      return;
    }

    if (!monto || monto <= 0) {
      alert("Ingrese un monto válido para enviar.");
      return;
    }

    // Mostrar alerta de éxito
    alert("Dinero enviado correctamente a " + contactoSeleccionado + ".");
  });
});
