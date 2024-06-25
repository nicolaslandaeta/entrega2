$(document).ready(function () {
  $("#addContactBtn").click(function () {
    let contactName = $("#searchContact").val();
    if (contactName) {
      $("#contactList").append(
        '<li class="list-group-item">' +
          '<div class="contact-info">' +
          '<span class="contact-name">' +
          contactName +
          "</span>" +
          '<span class="contact-details">CBU: XXXX, Alias: ' +
          contactName.toLowerCase() +
          ", Banco: N/A</span>" +
          "</div>" +
          "</li>"
      );
      $("#searchContact").val("");
      alert("Contacto agregado");
    } else {
      alert("Por favor ingrese un nombre de contacto válido.");
    }
  });
});
