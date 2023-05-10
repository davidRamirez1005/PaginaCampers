
// skill especificado

const botonToggle = document.querySelector('#boton-toggle-4');
const elementoAOcultar = document.querySelector('#elemento-a-ocultar-4');

botonToggle.addEventListener('click', function() {
  elementoAOcultar.classList.toggle('oculto-1');
});

const d = document, 
$table = d.querySelector(".crud-table-4"),
$template = d.getElementById("crud-template-4").content,
$fragment = d.createDocumentFragment();

const getAll = async () => {
try {
  let res = await fetch("http://localhost:4500/modulo_skill/"),
    json = await res.json();

  if (!res.ok) throw { status: res.status, statusText: res.statusText };

  console.log(json,res);
  json.forEach((el) => {
    $template.querySelector(".modulo").textContent = el.nombre;
    $template.querySelector(".skillSpecific").textContent =
      el.id_skill;
    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $table.querySelector("#tbody-4").appendChild($fragment);
} catch (err) {
  let message = err.statusText || "Ocurrió un error";
  $table.insertAdjacentHTML(
    "afterend",
    `<p><b>Error ${err.status}: ${message}</b></p>`
  );
}
};

d.addEventListener("DOMContentLoaded", getAll);