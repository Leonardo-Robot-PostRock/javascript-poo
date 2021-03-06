// Objeto literal
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo HTML y CSS",
        "Curso Práctico HTML y CSS",
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};
// Prototipo de funciones
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

//Método para agregar un curso

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

// instancia de prototipos
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso introducción a los videojuegos",
        "curso de creación de personaje"
    ],
);

// A la instancia de la función Student se le agrega un curso aprobado.

juanita.aprobarCurso("Curso de gestión del tiempo");

// Prototipos con la sintaxis de clases
class Student2 {
    constructor({
        name,
        age,
        email,
        cursosAprobados = []
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}
const persona = new Student2({
    email: 'email@example.com',
    name: "Leonardo",
    age: 27,
})