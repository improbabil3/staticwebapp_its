const form = document.getElementById("studentForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const cognome = document.getElementById("cognome").value.trim();
  const email = document.getElementById("email").value.trim();
  const indirizzo = document.getElementById("indirizzo").value.trim();

  if (!nome || !cognome || !email || !indirizzo) {
    alert("Compila tutti i campi.");
    return;
  }

  document.getElementById("r-nome").textContent = nome;
  document.getElementById("r-cognome").textContent = cognome;
  document.getElementById("r-email").textContent = email;
  document.getElementById("r-indirizzo").textContent = indirizzo;

  result.classList.remove("hidden");
});