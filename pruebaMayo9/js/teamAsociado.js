
// team asociado

const botonToggle = document.querySelector('#boton-toggle-3');
const elementoAOcultar = document.querySelector('#elemento-a-ocultar-3');

botonToggle.addEventListener('click', function() {
  elementoAOcultar.classList.toggle('oculto-1');
});

const d = document, 
$table = d.querySelector(".crud-table-3"),
$template = d.getElementById("crud-template-3").content,
$fragment = d.createDocumentFragment();

const getAll = async () => {
try {
  let res = await fetch("http://localhost:4500/reclutas/"),
    json = await res.json();

  if (!res.ok) throw { status: res.status, statusText: res.statusText };

  console.log(json,res);
  json.forEach((el) => {
    $template.querySelector(".name2").textContent = el.nombre;
    $template.querySelector(".teamSpecific").textContent =
      el.team;
    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $table.querySelector("#tbody-3").appendChild($fragment);
} catch (err) {
  let message = err.statusText || "Ocurrió un error";
  $table.insertAdjacentHTML(
    "afterend",
    `<p><b>Error ${err.status}: ${message}</b></p>`
  );
}
};

d.addEventListener("DOMContentLoaded", getAll);