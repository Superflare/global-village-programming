type Person = {
    prop: string
}

const pipe = (a: (_: Person) => Person, b: (_: Person) => Person): (_: Person) => Person => {
    return (person: Person) => b(a(person));
}

const makeFunction = (input: string, output: string): (_: Person) => Person => {
    return (person: Person) => {
        if (person.prop === input) {
            return {prop: output};
        }

        return person;
    }
};

const orderFood: (_: Person) => Person = makeFunction('hungry', 'has order');

const pickupFood: (_: Person) => Person =
    (p: Person) => {
        if (p.prop === 'has order') {
            return {prop: 'has food'};
        }

        return p;
    };

const sitDownWithFood: (_: Person) => Person = 
    (p: Person) => {
        if (p.prop === 'has food') {
            return {prop: 'person eating'};
        }

        return p;
    };

const eatFood: (_: Person) => Person = 
    (p: Person) => {
        if (p.prop === 'person eating') {
            return {prop: 'person satisfied'};
        }

        return p;
    };

const getFood = pipe(orderFood, pickupFood);
console.log(getFood({prop: 'hungry'}));