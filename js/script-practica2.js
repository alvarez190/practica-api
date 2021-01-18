/**
 *  Funcion donde empezara la cuenta atras y lo mostrara en el elemento indicado
 *  @param {Number} counter El tiempo del temporizador
 * 
 */
function temporizador(counter) {

    let elemento = document.getElementById("number");
    elemento.innerHTML = counter;

    if (counter == 0) {
        elemento.innerHTML = "0";
        showNotification()
    } else {
        counter--;
        setTimeout(() => {
            temporizador(counter)
        }, 1000);
    }
}


window.addEventListener('load', () => {
    let permiso = Notification.permission;
    if (permiso == "granted") {
        temporizador(5);
    } else if (permiso == "default") {
        Notification.requestPermission().then(resp => {
            if (resp == "granted ") {
                temporizador(5);
            } else {
                document.getElementById('number').innerHTML = 'Acepta notificacion para continuar';
                console.log('Acepta notificacion para continuar');
            }
        }).catch(error => {
            console.error(error.message);
        });
    }
});



function showNotification() {
    let noti = new Notification(" Información ", {
        body: " ¡Se ha publicado un nuevo video!"
    });

    noti.addEventListener("click", () => {
        window.open("practica2-p2-video.html");
    });

    setTimeout(() => {
        noti.close()
    }, 3000)
}