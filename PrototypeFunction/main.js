function Course(name, classes) {
    this._name = name;
    this.classes = classes;
}
Course.prototype = {
    get name() {
        return this._name;
    },
    set name(newName) {
        this._name = newName;
    }
}
