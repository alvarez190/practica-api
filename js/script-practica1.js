window.addEventListener('load', () => {
    let name = sessionStorage.getItem("nombre");
    let span = document.getElementById("log");

    span.innerHTML = "Bienvenid@ " + name;

    document.getElementById('guardar').addEventListener('click', () => {
        saveData(getDataUser());
        document.getElementById('nombre').value = "";
    });
});

function getDataUser() {
    return document.getElementById('nombre').value;
}

function saveData(data) {
    sessionStorage.setItem("nombre", data);
}