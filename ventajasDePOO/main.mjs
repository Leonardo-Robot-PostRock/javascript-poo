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
class LearningPath {
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

class Course {
    constructor({
        name,
        classes = []
    }) {
        this._name = name;
        this.classes = classes;
    }
    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName === "Curso Malito de Programación Básica") {
            console.log("Nombre no admitido, por favor elija otro");
        } else {
            this._name = newName;
        }
    }
}



export class PlatziClass {
    constructor({
        name,
        videoID
    }) {
        this.name = name;
        this.videoID = videoID;
    }
    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}
function videoPlay(id) {
    const urlSecreta = "https://www.youtube.com/watch?v=MI_VRF5Vnfw&ab_channel=Platzi";
    console.log("Se esta reproduciendo desde la url " + urlSecreta);
}
function videoStop(id) {
    const urlSecreta = "https://www.youtube.com/watch?v=MI_VRF5Vnfw&ab_channel=Platzi";
    console.log("Pausamos la url " + urlSecreta);
}


class Classes {
    constructor({
        name,
        classes = []
    }) {
        this._name = name;
        this._classes = classes;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }

}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});
const cursoPracJs = new Course({
    name: "Curso de Práctico JavaScript"
});
const cursoDeFrontDev = new Course({
    name: "Curso de FrontEnd Developer"
});
const cursBasicJs = new Course({
    name: "Curso de JavaScript Básico"
});

const cursoPython = new Course({
    name: "Curso de Python"
});

const cursoExcel = new Course({
    name: "Curso de Excel",
});

const cursoMate = new Course({
    name: "Curso de matemáticas",
});

const escuelaJs = new LearningPath({
    name: "Escuela de JavaScript",
    courses: [
        cursoDeFrontDev,
        cursBasicJs,
        cursoPracJs
    ]
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        cursoPython,
        cursoExcel,
        cursoMate
    ],
    addCourse: []
})

const Belen = new Stundent({
    name: "Belen",
    email: "belencita@example.com",
    username: "Belencita",
    twitter: "BelenFigue_",
    LearningPath: [
        escuelaData
    ]
})

const Ana = new Stundent({
    name: "Ana",
    email: "Ana@example.com",
    username: "Anita_Denis",
    instagram: "Ana_BlueEyes",
    LearningPath: {
        escuelaJs,
    },
    approvedCourses: []
})