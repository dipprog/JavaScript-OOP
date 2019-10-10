class Person {
	set name(newName) {
		if (newName.length < 3) {
			this._name = 'Name Error: Length must be at least 3 characters';
		} else {
			this._name = newName;
		}
	}
	get name() {
		if (this._name === '') {
			return 'Name Error: The Name was never set';
		} else {
			return this._name;
		}
	}
	set age(newAge) {
		if (newAge >= 1 && newAge <= 125) {
			this._age = newAge;
		} else {
			this._age = -999;
		}
	}
	get age() {
		return this._age;
	}
	constructor(name, age) {
		// Actual property with backing prefix..
		this._name = name;
		this._age = age;
	}
	// Method can go above or below the constructor as can set and get
	showPersonInformation() {
		let info = 'Name: ' + this._name + '\n' + 'Age: ' + this._age;
		return info;
	}

	increaseAgeBy(amount) {
		this._age = parseInt(this._age) + parseInt(amount);
	}
}

let person1 = new Person();
person1.name = 'Bob';
person1.age = 24;

let person2 = new Person();
person2.name = 'Ca';
person2.age = 36;

let person3 = new Person();
person3.name = 'Ted';
person3.age = 200;

person1.increaseAgeBy(30);

console.log(person1.showPersonInformation());
console.log(person2.showPersonInformation());
console.log(person3.showPersonInformation());
