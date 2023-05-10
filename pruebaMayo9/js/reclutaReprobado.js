
// team asociado

const botonToggle = document.querySelector('#boton-toggle-6');
const elementoAOcultar = document.querySelector('#elemento-a-ocultar-6');

botonToggle.addEventListener('click', function() {
  elementoAOcultar.classList.toggle('oculto-1');
});

const d = document, 
$table = d.querySelector(".crud-table-6"),
$template = d.getElementById("crud-template-6").content,
$fragment = d.createDocumentFragment();

const getAll = async () => {
try {
  let res = await fetch("http://localhost:4500/evaluacion/?nota_lte=3"),
    json = await res.json();

  if (!res.ok) throw { status: res.status, statusText: res.statusText };

  console.log(json,res);
  json.forEach((el) => {
    $template.querySelector(".nom").textContent = el.id_recluta;
    $template.querySelector(".nota").textContent =
      el.nota;
    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $table.querySelector("#tbody-6").appendChild($fragment);
} catch (err) {
  let message = err.statusText || "Ocurrió un error";
  $table.insertAdjacentHTML(
    "afterend",
    `<p><b>Error ${err.status}: ${message}</b></p>`
  );
}
};

d.addEventListener("DOMContentLoaded", getAll);