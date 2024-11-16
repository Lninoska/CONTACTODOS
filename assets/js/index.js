document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contacto");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const contacto = {
            nombre: document.getElementById("nombre").value.trim(),
            email: document.getElementById("email").value.trim(),
            telefono: document.getElementById("telefono").value.trim(),
            notas: document.getElementById("notas").value.trim(),
        }

        const nuevocontacto = {
            ...contacto,
            notas: contacto.notas || "Nuevo contacto agregado"
        }

        console.log(nuevocontacto)

        const { nombre, email, telefono, notas } = nuevocontacto;

        console.log("Nombre completo:", nombre);
        console.log("Correo electrónico:", email);
        console.log("Número de telefono:", telefono);
        console.log("Notas:", notas);

        document.querySelector("#contactoModal .modal-body").innerHTML =
        `<p>Nombre: ${nombre} </p>
        <p>Email: ${email} </p>
        <p>Teléfono: ${telefono}</p>
        <p>Notas: ${notas}</p>
        `;

        const contactoModal = new bootstrap.Modal(document.getElementById("contactoModal"));
        contactoModal.show();
    })

})