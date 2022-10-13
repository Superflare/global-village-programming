//type Peope = Student | Faculty | Staff | Visitor;

type Money = {
    dollars: number,
    cents: number
};

type Burritos = {
    tag: 'burrito',
    refriedBeansAmount: number
}

type Tacos = {
    tag: 'tacos',
    numberOfTacos: number
}

type Nachos = {
    tag: 'nachos',
    size: 'small' | 'large'
}

type Salsas = Burritos | Tacos | Nachos

const salsasPrice = (food: Salsas): Money => {
    switch (food.tag) {
        case 'burrito':
            return {dollars: food.refriedBeansAmount, cents: 0};
        case 'tacos':
            return {dollars: 0, cents: food.numberOfTacos * 20};
        case 'nachos':
            return {dollars: 100 * (food.size === 'small' ? 1 : 2), cents: 0};
    }
}

//type Food = Salsas | AsianBar | Grill;