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
	constructor(n) {
		this.reset();
		this._name = n;
	}
	reset() {
		// Start / Reset the game
		this._level = 5;
		this._type = 'Peasant';
		this._weapon = 'Saber';
		this._health = 5;
	}
	getAllInfo() {
		// Return the status
		if (parseInt(this._health) === 0) {
			this._health = this.name + 'Died!';
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
		}
		if (attacksByBad > attacksByGood) {
			action.value = badGuy.name + ' attacks ' + goodGuy.name;
			goodGuy.health--;
			badGuy.health++;
			badGuy.level++;
			goodGuy.level--;
		}
	}
	getRan() {
		// Random Number
		let r = Math.floor(Math.random() * 10) + 1;
		return r;
	}
}

var player1 = new Player('Atrus');
var player2 = new Player('Gehn');

function initGame() {
	player1.reset();
	player2.reset();

	status();
}
function startGame() {
	player1.doBattle(player1, player2);
	status();
}
function status() {
	document.getElementById('p1');
	player1.value = player1.getAllInfo();

	document.getElementById('p2');
	player2.value = player2.getAllInfo();
}
