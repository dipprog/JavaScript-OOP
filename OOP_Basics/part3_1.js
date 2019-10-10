class Address {
	get city() {
		return this._city;
	}
	constructor(city, state) {
		this._city = city;
		this._state = state;
	}
}

class Employee {
	get address() {
		return this._address;
	}
	constructor(empId, name, address) {
		this._empId = empId;
		this._name = name;
		this._address = address; //will be an object of type Address
	}
}

class Customer {
	get address() {
		return this._address;
	}
	constructor(custId, name, address) {
		this._custId = custId;
		this._name = name;
		this._address = address; //will be an object of type Address
	}
}

let empAddress1 = new Address('Boston', 'MA');
let emp1 = new Employee(1, 'Bob', empAddress1);
let custAddress1 = new Address('Richmond', 'VA');
let cust1 = new Customer(1, 'Nilmot Solution, LLC', custAddress1);
console.log(emp1.address.city);
console.log(cust1.address.city);
