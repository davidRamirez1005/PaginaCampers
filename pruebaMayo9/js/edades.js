
// Edades

const botonToggle = document.querySelector('#boton-toggle-2');
const elementoAOcultar = document.querySelector('#elemento-a-ocultar-2');

botonToggle.addEventListener('click', function() {
  elementoAOcultar.classList.toggle('oculto-1');
});

const d = document, 
$table = d.querySelector(".crud-table-2"),
$template = d.getElementById("crud-template-2").content,
$fragment = d.createDocumentFragment();

const getAll = async () => {
try {
  let res = await fetch("http://localhost:4500/reclutas/?edad_lte=18"),
    json = await res.json();

  if (!res.ok) throw { status: res.status, statusText: res.statusText };

  console.log(json,res);
  json.forEach((el) => {
    $template.querySelector(".name").textContent = el.nombre;
    $template.querySelector(".age").textContent =
      el.edad;
    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $table.querySelector("#tbody-2").appendChild($fragment);
} catch (err) {
  let message = err.statusText || "Ocurrió un error";
  $table.insertAdjacentHTML(
    "afterend",
    `<p><b>Error ${err.status}: ${message}</b></p>`
  );
}
};

d.addEventListener("DOMContentLoaded", getAll);