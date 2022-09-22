function Login() {
  let L_usuario = document.getElementById("usuario").value;
  let L_contrasena = document.getElementById("password").value;

  if (L_contrasena == "" || L_usuario == "") {
    alert("El campo contraseña y usuario son obligatorios");
    window.location = "login.html";
  } else {
    let acceso = false;

    if (localStorage.getItem("Usuarios")) {
      let Usuarios = JSON.parse(localStorage.getItem("Usuarios"));

      Usuarios.forEach((usuario, indice) => validarDatos(usuario, indice));

      function validarDatos(usuario, indice) {
        console.log(
          `# ${indice + 1} ${usuario.U_usuario} ${usuario.U_contrasena}`
        );

        if (
          usuario.U_usuario === L_usuario &&
          usuario.U_contrasena === L_contrasena
        ) {
          //console.log("usuario ecnontreado")
          //window.location="views/inicio.php"
          acceso = true;
        }
      }
      if (acceso == true) {
          console.log(acceso)
            window.location = "../Views/juego.html";
      } else {
        alert("Datos Incorrectos");
      }
    }
  }
}

function valoresLocales() {
  console.log(localStorage);
}
function SignUp() {
  let Users;
  if (localStorage.getItem("Usuarios")) {
    Users = JSON.parse(localStorage.getItem("Usuarios"));
  } else {
    Users = [];
  }

  //variables
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let usuario = document.getElementById("usuario").value;
  let contrasena = document.getElementById("password").value;

  if (nombre == "" || apellido == "" || usuario == "" || contrasena == "") {
    alert("Los campos son obligatorios para completar el registro");
    window.location = "signUp.html";
  } else {
    Users.push({
      U_nombre: nombre,
      U_apellido: apellido,
      U_usuario: usuario,
      U_contrasena: contrasena,
    });

    //Añadimos datos al array
    localStorage.setItem("Usuarios", JSON.stringify(Users));

    //limpiamos datos
    nombre = "";
    apellido = "";
    usuario = "";
    contrasena = "";

    console.log(Users);
    alert("Registro Exitoso");
    window.location = "../../index.html";
  }
}
