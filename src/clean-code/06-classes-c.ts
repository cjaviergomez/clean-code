(() => {
	// Aplicando el principio de responsabilidad única
	// Priorizar la composición sobre la herencia!

	type Gender = 'M' | 'F';

	interface PersonProps {
		name: string;
		gender: Gender;
		birthDate: Date;
	}

	class Person {
		public name: string;
		public gender: Gender;
		public birthDate: Date;
		constructor({ name, gender, birthDate }: PersonProps) {
			this.name = name;
			this.gender = gender;
			this.birthDate = birthDate;
		}
	}

	interface UserProps {
		lastUpdate: Date;
	}

	class User {
		public lastUpdate: Date;

		constructor({ lastUpdate }: UserProps) {
			this.lastUpdate = lastUpdate;
		}

		validateCredentials() {
			return true;
		}
	}

	interface SettingsProps {
		folder: string;
	}

	class Settings {
		folder: string;
		constructor({ folder }: SettingsProps) {
			this.folder = folder;
		}
	}

	interface UserSettingsProps {
		name: string;
		gender: Gender;
		birthDate: Date;
		lastUpdate: Date;
		folder: string;
	}

	class UserSettings {
		public person: Person;
		public user: User;
		public settings: Settings;
		constructor({ name, gender, birthDate, lastUpdate, folder }: UserSettingsProps) {
			this.person = new Person({ name, gender, birthDate });
			this.user = new User({ lastUpdate });
			this.settings = new Settings({ folder });
		}
	}

	const person = new Person({ name: 'John', gender: 'M', birthDate: new Date(1990, 1, 1) });
	console.log({ person });

	const user = new User({ lastUpdate: new Date(1990, 1, 1) });
	console.log({ user });

	const settings = new Settings({ folder: 'C:UsersJohn' });
	console.log({ settings });

	const userSettings = new UserSettings({
		name: 'Carlos',
		gender: 'M',
		birthDate: new Date(1990, 1, 1),
		lastUpdate: new Date(1990, 1, 1),
		folder: 'C:UsersCarlos'
	});
	console.log({ userSettings });
	console.log(userSettings.user.validateCredentials());
})();
