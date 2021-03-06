class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",

    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    publicar() {
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

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

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}
class FreeStudent extends Stundent {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.log("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}
class BasicStudent extends Stundent {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.log("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles");
        }
    }
}
class ExpertStudent extends Stundent {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}
class TeacherStudent extends Stundent {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
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
        classes = [],
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName === "Curso Malito de Programaci??n B??sica") {
            console.log("Nombre no admitido, por favor elija otro");
        } else {
            this._name = newName;
        }
    }
}



class PlatziClass {
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
    name: "Curso Gratis de Programaci??n B??sica",
    isFree: true,
});
const cursoPracJs = new Course({
    name: "Curso de Pr??ctico JavaScript"
});
const cursoDeFrontDev = new Course({
    name: "Curso de FrontEnd Developer"
});

const cursBasicJs = new Course({
    name: "Curso de JavaScript B??sico",
    lang: "english"
});

const cursoPython = new Course({
    name: "Curso de Python"
});

const cursoExcel = new Course({
    name: "Curso de Excel",
});

const cursoMate = new Course({
    name: "Curso de matem??ticas",
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

const belen = new ExpertStudent({
    name: "Belen",
    email: "belencita@example.com",
    username: "Belencita",
    twitter: "BelenFigue_",
    learningPath: [
        escuelaData
    ]
})

const ana = new BasicStudent({
    name: "Ana",
    email: "Ana@example.com",
    username: "Anita_Denis",
    instagram: "Ana_BlueEyes",
    learningPath: {
        escuelaJs,
    },
})

const juan = new FreeStudent({
    name: "Juan",
    email: "Juan@example.com",
    username: "Juanito_Perez",
    twitter: "Juanito_Perez",
    learningPath: {
        escuelaJs,
    },
})

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    email: "Freddy@example.com",
    username: "Freddier",
    instagram: "freddiervega",
})