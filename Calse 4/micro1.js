let perfil = "Administrador"

switch (perfil) {
    case "Administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema.");
        break;
    case "Asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
        break;
    case "Invitado":
        console.log("Usted sólo tiene permisos de consultar datos");
        break;
    default:
        console.log("Debe especificar un perfil valido");
        break;
}