// type People = Underclassmen
//             | Upperclassmen
//             | Lecturer
//             | Professor
//             | Auditing;


type ClassYears = 1 | 2 | 3 | 4 | 5;

let myYear: ClassYears = 5;

type letters = 'a' | 'b' | 'c';

type Soup = boolean
          | letters;

type HasId = {
    id: number
}

type HasName = {
    name: string
}

type HasColor = {
    color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'
}

type User = HasId & HasName;

const x: User = {
    id: 7,
    name: 'Zardul'
}

type IsAlive {
    alive: boolean
}

type HasYear = {
    year: ClassYears
}

const val: IsAlive & HasYear = {
    alive: false,
    year: 2
}