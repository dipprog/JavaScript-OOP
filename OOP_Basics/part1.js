class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}
let person1 = new Person('Sankar', 22);
let person2 = new Person('Chiran', 20);
let person3 = new Person('Krishna', 19);
let person4 = new Person();
person4.name = 'Ganesh';
person4.age = 28;

console.log(person1.name);
console.log(person2.name);
console.log(person3.name);
console.log(person4.name);

let people = new Array();
people.push(person1);
people.push(person2);
people.push(person3);
people.push(person4);

// Array to Json
let sjson = JSON.stringify(people);
console.log(sjson);

// Json to Object and added to Array
let newJsonData = '{ "name": "Pankaj", "age": 23}';
let newPerson = new Person();
newPerson = JSON.parse(newJsonData);

// Verify that we got the data into an Object
console.log(newPerson.name);
people.push(newPerson);
sjson = JSON.stringify(people);
console.log(sjson);
