(() =>{

    // no correcto reponsabilidad unica
    type Gender = 'M'|'F'; // obliga a que sean uno de esos valores

    class Person{
        constructor( 
            public name: string, 
            public gender: Gender,
            public birthDate: Date){}
            
        // public name: string;
        // public gender: Gender;
        // public birthDate: Date;

        // constructor(name: string, gender: Gender, birthDate: Date){
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthDate = birthDate;
        // }

    }

    class User extends Person {
        
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date,
        ) {
            super( name, gender, birthDate );
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder  : string,
            email                  : string,
            role                   : string,
            name                   : string,
            gender                 : Gender,
            birthDate              : Date
        ) {
            super(email, role, name, gender, birthDate );
        }
    }


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'fernando@google.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings });

    const newPerson = new Person('Ruben','M',new Date('1994-08-17'));
    console.log({newPerson});


})();