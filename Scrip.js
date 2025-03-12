// Simulación de una base de datos de usuarios registrados
const registeredUsers = [];

// Función para mostrar un modal
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
}

// Función para cerrar un modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Cerrar modales al hacer clic en la "X"
document.querySelectorAll(".close").forEach((closeButton) => {
  closeButton.addEventListener("click", function () {
    const modal = this.closest(".modal");
    modal.style.display = "none";
  });
});

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtener valores del formulario
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const educationLevel = document.getElementById("educationLevel").value;

  // Verificar si el usuario ya existe
  const userExists = registeredUsers.some(user => user.email === email);
  if (userExists) {
    showModal("userExistsModal"); // Mostrar modal de usuario existente
    return;
  }

  // Agregar usuario a la "base de datos"
  registeredUsers.push({ fullName, email, password, educationLevel });

  // Mostrar modal de éxito
  showModal("successModal");

  // Limpiar el formulario
  document.getElementById("registrationForm").reset();
});