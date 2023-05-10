
// modulo reclutas

const botonToggle = document.querySelector('#boton-toggle-5');
const elementoAOcultar = document.querySelector('#elemento-a-ocultar-5');

botonToggle.addEventListener('click', function() {
  elementoAOcultar.classList.toggle('oculto-1');
});

const d = document, 
$table = d.querySelector(".crud-table-5"),
$template = d.getElementById("crud-template-5").content,
$fragment = d.createDocumentFragment();

const getAll = async () => {
try {
  let res = await fetch("http://localhost:4500/modulo_skill/"),
    json = await res.json();

  if (!res.ok) throw { status: res.status, statusText: res.statusText };

  console.log(json,res);
  json.forEach((el) => {
    $template.querySelector(".mod").textContent = el.nombre;
    $template.querySelector(".recl").textContent =
      el.id;
    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $table.querySelector("#tbody-5").appendChild($fragment);
} catch (err) {
  let message = err.statusText || "Ocurrió un error";
  $table.insertAdjacentHTML(
    "afterend",
    `<p><b>Error ${err.status}: ${message}</b></p>`
  );
}
};

d.addEventListener("DOMContentLoaded", getAll);