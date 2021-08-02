class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  sleep() {
    return `${this.name} is sleeping`;
  }

  play() {
    return `${this.name} is playing`;
  }
}

const sakib = new Person("Sakib", 35);
console.log(sakib.name);
console.log(sakib.play());
const tamim = new Person("Tamim", 35);
