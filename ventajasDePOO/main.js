class Stundent {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            //twitter, es lo mismo que twitter: twitter
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }
}

// RETO
class learningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
    addCourse(newCourse) {
        this.courses.push(newCourse);
    }
}

const escuelaWeb = new learningPath({
    name: "Escuela de JavaScript",
    courses: [
        "Curso de JavaScript Básico",
        "Curso de FrontEnd Developer",
        "Curso Práctico de JavaScript"
    ]
});

escuelaWeb.addCourse("Curso de introducción a la terminal");

const escuelaData = new learningPath({
    name: "Escuela de Data Science",
    courses: [
        "Curso de Python",
        "Curso de Excel",
        "Curso de matemáticas"
    ],
    addCourse: []
})

const Belen = new Stundent({
    name: "Belen",
    email: "belencita@example.com",
    username: "Belencita",
    twitter: "BelenFigue_"
})

const Ana = new Stundent({
    name: "Ana",
    email: "Ana@example.com",
    username: "Anita_Denis",
    instagram: "Ana_BlueEyes",
    learningPath: {
        escuelaWeb,
    },
    approvedCourses:[
        "Curso de introducción a la terminal"
    ]
})