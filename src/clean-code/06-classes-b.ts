(()=> {

    type Gender = 'M' | 'F';

    // TODO: Forma larga 
    // class Person {
    //     public name: string;
    //     public gender: Gender;
    //     public birthDate: Date;

    //     constructor(name: string, gender: Gender, birthDate: Date){
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthDate = birthDate;
    //     }
    // }

    interface PersonProps {
        name: string;
        gender: Gender; 
        birthDate: Date;
    }

    // TODO: Forma corta
    class Person {
        public name: string;
        public gender: Gender;
        public birthDate: Date;
        constructor({ name, gender, birthDate }: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
            
        }
    }

    interface UserProps {
        lastUpdate: Date;
        name: string;
        gender: Gender; 
        birthDate: Date;
    }

    class User extends Person {
        public lastUpdate: Date;

        constructor({ lastUpdate, name, gender, birthDate }: UserProps){
            super({ name, gender, birthDate });
            this.lastUpdate = lastUpdate;
        }

        validateCredentials(){
            return true;
        }
    }

    interface UserSettingsProps {
        folder: string;  
        lastUpdate: Date; 
        name: string;  
        gender: Gender;  
        birthDate: Date;
    }

    class UserSettings extends User {
        folder: string;
        constructor( { folder,  lastUpdate,  name,  gender,  birthDate }: UserSettingsProps){
            super({ lastUpdate, name, gender, birthDate });
            this.folder = folder;
        }
    }

    const person = new Person({ name: 'John', gender: 'M', birthDate: new Date(1990, 1, 1)});
    console.log({ person });

    const user = new User({ birthDate: new Date(), name: 'John', gender: 'M', lastUpdate: new Date(1990, 1, 1) });
    console.log({ user });

    const userSettings = new UserSettings({ folder: 'C:\Users\John', birthDate: new Date(), name: 'John', gender: 'M', lastUpdate: new Date(1990, 1, 1) });
    console.log({ userSettings });
    console.log(userSettings.validateCredentials());

})()