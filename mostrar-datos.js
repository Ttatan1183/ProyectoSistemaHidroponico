document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.getElementById("tabla-datos");
    const botonReiniciar = document.getElementById("limpiar-datos");

    // Función para cargar los datos registrados en la tabla
    function cargarDatos() {
        // Recuperar datos del Local Storage
        const datosRegistrados = JSON.parse(localStorage.getItem("contactos")) || [];

        // Limpiar la tabla antes de insertar nuevos datos
        tabla.innerHTML = "";

        // Verificar si hay datos
        if (datosRegistrados.length === 0) {
            tabla.innerHTML = `
                <tr>
                    <td colspan="3" style="text-align: center; color: #777;">No hay datos registrados.</td>
                </tr>
            `;
            return;
        }

        // Insertar los datos en la tabla
        datosRegistrados.forEach(dato => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${dato.nombre}</td>
                <td>${dato.email}</td>
                <td>${dato.mensaje}</td>
            `;
            tabla.appendChild(fila);
        });
    }

    // Llamada inicial para cargar los datos al cargar la página
    cargarDatos();

    // Función para reiniciar los datos (borrar del Local Storage)
    botonReiniciar.addEventListener("click", () => {
        localStorage.removeItem("contactos"); // Elimina los datos almacenados
        cargarDatos(); // Vuelve a cargar la tabla (vacía)
    });
});

