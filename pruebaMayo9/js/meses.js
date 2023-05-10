
// meses

    const botonToggle = document.querySelector('#boton-toggle-1');
    const elementoAOcultar = document.querySelector('#elemento-a-ocultar-1');
    
    botonToggle.addEventListener('click', function() {
      elementoAOcultar.classList.toggle('oculto-1');
    });

const d = document, 
$table = d.querySelector(".crud-table-1"),
$template = d.getElementById("crud-template-1").content,
$fragment = d.createDocumentFragment()
    


const getAll = async () => {
    try {
        let res = await fetch(`http://localhost:4500/reclutas/`),
        json = await res.json();
        
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        
        // let mes = el.fecha_ingreso
        console.log(json,res);
        json.forEach((el) => {
        let fecha1 = el.fecha_ingreso;
        let fecha2 = '2022-05-09';

        const fecha_compare_1 = new Date(fecha1)
        const fecha_compare_2 = new Date(fecha2)

        fecha_compare_1.setMonth(fecha_compare_1.getMonth()- 2);
        let dif = fecha_compare_1> fecha_compare_2
          let dift = dif === true
        // console.log(`fecha1 es mayor a dos meses? > ${fecha_compare_1> fecha_compare_2} `  )

        $template.querySelector(".name").textContent = el.nombre;
        $template.querySelector(".months").textContent =
        el.fecha_ingreso;
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
  });

  $table.querySelector("#tbody-1").appendChild($fragment);
} catch (err) {
  let message = err.statusText || "Ocurrió un error";
  $table.insertAdjacentHTML(
    "afterend",
    `<p><b>Error ${err.status}: ${message}</b></p>`
  );
}
};

d.addEventListener("DOMContentLoaded", getAll);