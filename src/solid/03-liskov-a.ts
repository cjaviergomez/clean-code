import { Audi, Ford, Honda, Tesla, Toyota, Vehicle } from './03-liskov-b';

(() => {
	const printCarSeats = (cars: Vehicle[]) => {
		// for (const car of cars) {
		// 	if (car instanceof Tesla) {
		// 		console.log('Tesla', car.getNumberSeats());
		// 		continue;
		// 	}
		// 	if (car instanceof Audi) {
		// 		console.log('Audi', car.getNumberSeats());
		// 		continue;
		// 	}
		// 	if (car instanceof Toyota) {
		// 		console.log('Toyota', car.getNumberSeats());
		// 		continue;
		// 	}
		// 	if (car instanceof Honda) {
		// 		console.log('Honda', car.getNumberSeats());
		// 		continue;
		// 	}
		// }
		cars.forEach(car => {
			console.log(car.constructor.name, car.getNumberSeats());
		});
	};

	const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5), new Ford(5)];

	printCarSeats(cars);
})();
