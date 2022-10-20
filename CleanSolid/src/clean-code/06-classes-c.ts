(() =>{

    // Principio de responsabilidad única 
    // priorizar la composición frente a la herencia

    
    type Gender = 'M'|'F'; // obliga a que sean uno de esos valores

    interface PersonProperties{
        birthdate: Date;
        gender: Gender;
        name: string; 
    }

    class Person{
        public birthdate: Date;
        public gender: Gender;
        public name : string;
        constructor({name, gender, birthdate}: PersonProperties){
                this.birthdate = birthdate;
                this.gender = gender;
                this.name = name;
            }
    }


    interface UserProperties{
        email     : string;
        role      : string;
    }


    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({email, role}:UserProperties) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProperties{
        lastOpenFolder: string;
        workingDirectory: string;
    }


    class Settings{
        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({lastOpenFolder, workingDirectory}: SettingsProperties) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }


    interface UserSettingsProperties{
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings{
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate, email, role, lastOpenFolder, workingDirectory
        }: UserSettingsProperties){
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, role});
            this.settings = new Settings({lastOpenFolder, workingDirectory});

        }

    }


    const userSettings = new UserSettings({
        lastOpenFolder:'/usr/home',
        workingDirectory:'/home',
        email:'fernando@google.com',
        role:'Admin',
        name:'Fernando',
        gender:'M',
        birthdate:new Date('1985-10-21')
});

    console.log({ userSettings });


})();