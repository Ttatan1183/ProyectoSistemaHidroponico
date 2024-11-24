document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("message").value;

  const contacto = { nombre, email, mensaje };

  let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  contactos.push(contacto);

  localStorage.setItem("contactos", JSON.stringify(contactos));

  document.getElementById("mensaje-exito").style.display = "block";

  this.reset();
});
