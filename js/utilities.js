let usersJson;
let userID;

function readCookie(name) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

function cargarUsuario() {
    var miCookie = readCookie("userId");
    //let id = miCookie.slice(6, 7);
    userId = miCookie;
    cargarJson();
}

function cargarJson() {
    let local;

    local = localStorage.getItem("usersJson");
    if (local != null) {
        usersJson = JSON.parse(local);
        //console.log(local);
        usersJson.forEach(function (value, indice, array) {
            //console.log(value.email);
        })
    } else {
        usersJson = [];
    }
}
function cargarUser() {
    usersJson.forEach(function (value, indice, array) {
        if (indice == userId) {
            userName = value.userName;
            userSkin = "recursos/skins/" + value.skin + ".png";
            userPoints = value.points;
        }
    })
}

function newCubeBomb(posicionNueva) {
    let posicion = [-0.02, 0, 8];
    posicion[0] += posicionNueva[0];
    posicion[1] += posicionNueva[1];
    posicion[2] += posicionNueva[2];

    // Creamos un poligono
    var geometriaCubo = new THREE.CubeGeometry(
        1, // Dimensiones en eje X
        1, // Dimensiones en eje Y
        1 // Dimensiones en eje Z
    );
    // Creamos una apariencia (de lila claro)
    var aparienciaLila = new THREE.MeshLambertMaterial({
        color: 0x999FF // Color hexadecimal
    });
    // Generamos el polígino y le aplicamos la apariencia
    var cubo = new THREE.Mesh(geometriaCubo, aparienciaLila);
    //cubo.scale.set(0.42, 0.25, 0.20)
    cubo.scale.set(0.46, 0.30, 0.30);
    cubo.position.set(posicion[0], posicion[1], posicion[2]);
    //cubo.material.visible = false;

    return cubo;
}

function soltarBomba() {
    bombaPrincipal.position.set(posicionPersonaje[0], posicionPersonaje[1], posicionPersonaje[2]);
    bombaPrincipal.rotation.set(0, 0, 0);
    bombaPrincipal.rotation.x = -1.6;
}