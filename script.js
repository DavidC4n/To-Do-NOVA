// Función para abrir la página de nueva tarea
function openNewTaskPage() {
    window.location.href = "new_task.html";
}

// Función para agregar una nueva tarea
function addTask(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    console.log("Función addTask llamada");

    // Obtener valores del formulario
    const title = document.getElementById("titleInput").value;
    const date = document.getElementById("dateInput").value;
    const time = document.getElementById("timeInput").value;
    const color = document.getElementById("colorInput").value;
    const details = document.getElementById("detailsInput").value;


    // Validar que el título no esté vacío
    if (title.trim() === "") {
        alert("Por favor, ingrese un título para la tarea.");
        return;
    }

    // Crear la estructura de la tarea
    const task = {
        title: title,
        date: date,
        time: time,
        color: color,
        details: details
    };

    // Aquí puedes agregar lógica adicional, como guardar la tarea en el almacenamiento o enviarla al servidor

    // Redirigir de nuevo a la página principal
    window.location.href = "index.html";
}

// Función para cancelar la operación y volver a la página principal
function cancel() {
    window.location.href = "index.html";
}

// Event listener para el envío del formulario
document.getElementById("taskForm").addEventListener("submit", function(event) {
    addTask(event);
});