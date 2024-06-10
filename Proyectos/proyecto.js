
function Obtenerdatos() {
    let txtusuario = document.getElementById("txtUsuario").value;
    let txtpass = document.getElementById("txtpass").value;
    
    if(txtusuario === "" ){
        alert("debe llenar todos los campos");
    }
    else if(txtpass === "")
    {
        alert("debe llenar todos los campos");
    }
    else
    {
        Validar(txtusuario, txtpass);
    }

    
}

function Validar(usu, pass) {
    if (usu === "kelvin" && pass === "123456") {
        alert("Bienvenido " + usu);
    } else {
        alert("No se encuentra registrado el usuario");
    }
}