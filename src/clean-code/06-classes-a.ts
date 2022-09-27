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

    // TODO: Forma corta
    class Person {
        constructor(public name: string, public gender: Gender, public birthDate: Date){}
    }


    class User extends Person {
        constructor(public lastUpdate: Date, public name: string, public gender: Gender, public birthDate: Date){
            super(name, gender, birthDate);
        }

        validateCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(public folder: string, public lastUpdate: Date, public name: string, public gender: Gender, public birthDate: Date){
            super(lastUpdate, name, gender, birthDate);
        }
    }

    const person = new Person('John', 'M', new Date(1990, 1, 1));
    console.log({ person });

    const user = new User(new Date(), 'John', 'M', new Date(1990, 1, 1));
    console.log({ user });

    const userSettings = new UserSettings('C:\Users\John', new Date(), 'John', 'M', new Date(1990, 1, 1));
    console.log({ userSettings });
    console.log(userSettings.validateCredentials());

})()