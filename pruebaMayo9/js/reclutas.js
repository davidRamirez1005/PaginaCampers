const d = document, 
$table = d.querySelector(".crud-tableF"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.getElementById("crud-templateF").content,
$fragment = d.createDocumentFragment();

const getAll = async () => {
try {
  let res = await fetch("http://localhost:4500/reclutas/"),
    json = await res.json();

  if (!res.ok) throw { status: res.status, statusText: res.statusText };

  console.log(json,res);
  json.forEach((el) => {
    $template.querySelector(".nameRecluta").textContent = el.nombre;
    $template.querySelector(".edadRecluta").textContent = el.edad;
    $template.querySelector(".telefonoRecluta").textContent = el.telefono;
    $template.querySelector(".emailRecluta").textContent = el.email;
    $template.querySelector(".direccionRecluta").textContent = el.direccion;
    $template.querySelector(".nacimientoRecluta").textContent = el.fecha_nacimiento;
    $template.querySelector(".idenRecluta").textContent = el.numero_identificacion;
    $template.querySelector(".ingresoRecluta").textContent = el.fecha_ingreso;
    $template.querySelector(".teamRecluta").textContent = el.id_team;
    $template.querySelector(".edit").dataset.id = el.id;
    $template.querySelector(".edit").dataset.nameRecluta = el.nombre;
    $template.querySelector(".edit").dataset.edadRecluta = el.edad;
    $template.querySelector(".edit").dataset.telefonoRecluta = el.telefono;
    $template.querySelector(".edit").dataset.emailRecluta = el.email;
    $template.querySelector(".edit").dataset.direccionRecluta = el.direccion;
    $template.querySelector(".edit").dataset.nacimientoRecluta = el.fecha_nacimiento;
    $template.querySelector(".edit").dataset.idenRecluta = el.numero_identificacion;
    $template.querySelector(".edit").dataset.ingresoRecluta = el.fecha_ingreso;
    $template.querySelector(".edit").dataset.teamRecluta = el.id_team;
    $template.querySelector(".delete").dataset.id = el.id;


    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $table.querySelector("tbody").appendChild($fragment);
} catch (err) {
  let message = err.statusText || "Ocurrió un error";
  $table.insertAdjacentHTML(
    "afterend",
    `<p><b>Error ${err.status}: ${message}</b></p>`
  );
}
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
if (e.target === $form) {
  e.preventDefault();

  if (!e.target.id.value) {
    //Create - POST
    try {
      let options = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            nombre: e.target.nombre.value,
            edad: Number(e.target.edad.value),
            telefono: e.target.telefono.value,
            email: e.target.email.value,
            direccion: e.target.direccion.value,
            fecha_nacimiento: e.target.fecha_nacimiento.value,
            numero_identificacion: e.target.numero_identificacion.value,
            fecha_ingreso: e.target.fecha_ingreso.value,
            id_team: e.target.id_team.value

          }),
        },
        res = await fetch("http://localhost:4500/reclutas", options),
        json = await res.json();

      if (!res.ok)
        throw { status: res.status, statusText: res.statusText };

      location.reload();
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $form.insertAdjacentHTML(
        "afterend",
        `<p><b>Error ${err.status}: ${message}</b></p>`
      );
    }
  } else {
    //Update - PUT
    try {
      let options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            nombre: e.target.nombre.value,
            edad: e.target.edad.value,
            telefono: e.target.telefono.value,
            email: e.target.email.value,
            direccion: e.target.direccion.value,
            fecha_nacimiento: e.target.fecha_nacimiento.value,
            numero_identificacion: e.target.numero_identificacion.value,
            fecha_ingreso: e.target.fecha_ingreso.value,
            id_team: e.target.id_team.value

          }),
        },
        res = await fetch(
          `http://localhost:4500/reclutas/${e.target.id.value}`,
          options
        ),
        json = await res.json();

      if (!res.ok)
        throw { status: res.status, statusText: res.statusText };

      location.reload();
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $form.insertAdjacentHTML(
        "afterend",
        `<p><b>Error ${err.status}: ${message}</b></p>`
      );
    }
  }
}
});

d.addEventListener("click", async (e) => {
if (e.target.matches(".edit")) {
  $title.textContent = "Editar recluta";
  $form.nombre.value = e.target.dataset.nameRecluta;
  $form.edad.value = e.target.dataset.edadRecluta;
  $form.telefono.value = e.target.dataset.telefonoRecluta;
  $form.email.value = e.target.dataset.emailRecluta;
  $form.direccion.value = e.target.dataset.direccionRecluta;
  $form.fecha_nacimiento.value = e.target.dataset.nacimientoRecluta;
  $form.numero_identificacion.value = e.target.dataset.idenRecluta;
  $form.fecha_ingreso.value = e.target.dataset.ingresoRecluta;
  $form.id_team.value = e.target.dataset.teamRecluta;
  $form.id.value = e.target.dataset.id;
}

if (e.target.matches(".delete")) {
  let isDelete = confirm(
    `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
  );

  if (isDelete) {
    //Delete - DELETE
    try {
      let options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        },
        res = await fetch(
          `http://localhost:4500/reclutas/${e.target.dataset.id}`,
          options
        ),
        json = await res.json();

      if (!res.ok)
        throw { status: res.status, statusText: res.statusText };

      location.reload();
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      alert(`Error ${err.status}: ${message}`);
    }
  }
}
});