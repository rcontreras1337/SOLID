interface Bird{
    run() : void;
    fly() : void;
    eat() : void;
    swim(): void;
}

class Tucan{
    public fly(){};
    public eat(){};
    public run(){};
}

class Humminbird{
    public fly(){};
    public eat(){};
    public run(){};
}

class Ostrich implements Bird{
    swim(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
    fly(): void {
        throw new Error("Method not implemented.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }
}

class Penguin implements Bird{
    swim(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
    fly(): void {
        throw new Error("Method not implemented.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }
}