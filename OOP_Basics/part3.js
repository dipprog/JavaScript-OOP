class Person {
	set fname(fn) {
		this._fname = this.validateName(fn);
	}

	get fname() {
		return this._fname;
	}

	set lname(ln) {
		this._lname = this.validateName(ln);
	}

	get lname() {
		return this._lname;
	}

	constructor(fn, ln) {
		this._fname = this.validateName(fn);
		this._lname = this.validateName(ln);
	}

	validateName(nam) {
		if (nam !== undefined) {
			if (nam.length >= 3) {
				return nam;
			} else {
				return 'Bad Name';
			}
		}
	}
	// to access this like a property, put the word get in from of the wholeName() method.
	// get wholeName()
	// ex: console.log(p1.wholeName)
	wholeName(greet = false) {
		// Notice the local variable
		let wName = this.makeName(greet);
		return wName;
	}

	makeName(greet) {
		if (greet === true) {
			return this.addGreet() + this._fname + ' ' + this._lname;
		} else {
			return this._fname + ' ' + this._lname;
		}
	}

	addGreet() {
		return 'Hello ';
	}
}
let p1 = new Person('Bob', 'Jones');
console.log(p1.lname);
let p2 = new Person();
p2.fname = 'Lenny';
p2.lname = 'Brown';
console.log(p2.lname);
console.log(p1.wholeName(true));
console.log(p2.wholeName());
let p3 = new Person('Bo', 'White');
console.log(p3.wholeName(true));
