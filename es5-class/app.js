function Person(name, age) {
    this._name = name;
    this.age = age;
}

Person.getInfo = function(instance) {
    return {
        name: instance._name,
        age: instance._age
    };
}
Person.prototype.getName = function() {
    return this._name
}
Person.prototype.getAge = function() {
    return this._age
}
