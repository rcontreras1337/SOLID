interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}
interface RunningBird {
    run(): void;
}
interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    eat(): void {
        throw new Error("Method not implemented.");
    }
    fly(): void {
        throw new Error("Method not implemented.");
    }

}

class HumminBird implements Bird, FlyingBird{
    fly(): void {
        throw new Error("Method not implemented.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }
}

class Ostrich implements Bird, RunningBird {
    run(): void {
        throw new Error("Method not implemented.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }
}

class Penguin implements Bird, SwimmerBird {
    swim(): void {
        throw new Error("Method not implemented.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }
}