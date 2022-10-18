export abstract class Vehicle {
	abstract getNumberSeats(): number;
}

export class Tesla extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberSeats() {
		return this.numberOfSeats;
	}
}

export class Audi extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberSeats() {
		return this.numberOfSeats;
	}
}

export class Toyota extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberSeats() {
		return this.numberOfSeats;
	}
}

export class Honda extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberSeats() {
		return this.numberOfSeats;
	}
}

export class Ford extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberSeats() {
		return this.numberOfSeats;
	}
}
