(() =>{
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
        birthdate : Date;
        email     : string;
        gender    : Gender;
        name      : string; 
        role      : string;
    }


    class User extends Person {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({birthdate, email, gender, name, role}:UserProperties) {
            super({name, gender, birthdate});
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
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


    class UserSettings extends User {
        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({birthdate, email, gender, lastOpenFolder, name, role, workingDirectory}: UserSettingsProperties) {
            super({email, role, name, gender, birthdate});
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
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