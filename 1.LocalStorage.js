const user = {
    id: 1,
    name: "John",
    age: 25,
  };

// 1º - Crear una función
function UserStorage(user) {
    // 2º - Convertir el objeto a JSON
    const userJSON = JSON.stringify(user);
    // 3º - Guardar la cadena JSON en localStorage
    localStorage.setItem("user", userJSON);
}

// 4º - Llamar a la función para guardar el objeto en localStorage
UserStorage(user);

// 5º - Obtener lo guardado en localStorage
const userJSON = localStorage.getItem("user");

// 6º - Verificar si el valor existe
if (userJSON){

    // 7ª - Convertir JSON a objeto
    const user = JSON.parse(userJSON);

    // 8º - Mostrar el objeto
    console.log(('Objeto USER guardado en localStorage: ', user));
} else {
    console.log('Objeto no guardado en localStorage');
}

