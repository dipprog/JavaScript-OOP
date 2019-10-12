class Player {
	set name(n) {
		this._name = n;
	}
	set level(l) {
		this._level = l;
	}
	set type(t) {
		this._type = t;
	}
	set health(h) {
		this._health = h;
	}
	set weapon(w) {
		this._weapon = w;
	}
	get name() {
		return this._name;
	}
	get level() {
		return this._level;
	}
	get type() {
		return this._type;
	}
	get health() {
		return this._health;
	}
	get weapon() {
		return this._weapon;
	}
	reset() {
		// Start / Reset the game
		this._level = 5;
		this._type = 'Peasant';
		this._weapon = 'Saber';
		this._health = 5;
	}
	constructor(n) {
		this.reset();
		this._name = n;
	}

	getAllInfo() {
		// Return the status
		if (parseInt(this._health) === 0) {
			this._health = this.name + ' Died!';
			return this._health;
		} else {
			return (
				'Name: ' +
				this.name +
				'\n' +
				'Type: ' +
				this.type +
				'\n' +
				'Weapon: ' +
				this.weapon +
				'\n' +
				'Health: ' +
				this.health +
				'\n'
			);
		}
	}

	getRan() {
		// Random Number
		let r = Math.floor(Math.random() * 10) + 1;
		return r;
	}

	doBattle(goodGuy, badGuy) {
		// Determines who takes demage
		// Use random number generator
		let attacksByGood = this.getRan();
		// Maybe Add Something about the amount of demage per attack
		// Maybe track number of blows each get and/ strikes
		// Maybe do something with level (add new weapon with more demage)
		let attacksByBad = this.getRan();
		let action = document.getElementById('action');

		if (attacksByGood > attacksByBad) {
			action.value = goodGuy.name + ' attacks ' + badGuy.name;
			goodGuy.health++;
			badGuy.health--;
			badGuy.level--;
			goodGuy.level++;
		} else if (attacksByBad > attacksByGood) {
			action.value = badGuy.name + ' attacks ' + goodGuy.name;
			badGuy.health++;
			goodGuy.health--;
			goodGuy.level--;
			badGuy.level--;
		}
	}
}

var player1 = new Player('Atrus');
var player2 = new Player('Gehn');

function status() {
	let p1 = document.getElementById('p1');
	p1.value = player1.getAllInfo();

	let p2 = document.getElementById('p2');
	p2.value = player2.getAllInfo();
}

function initGame() {
	player1.reset();
	player2.reset();
	status();
}
function startGame() {
	player1.doBattle(player1, player2);
	status();
}
