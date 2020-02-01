const city = {
    capital:'Warszawa',
    population:666666666,
    president:'Kowalski',
    primeMinisters:['Pierwszy minister','Drugi minister']
}

console.log(city.capital,city.population,city.president,city.primeMinisters);

//0b
const timeMachine = {
    shape:'kwadrat',
    model:'model',
    run: function(date,place) {
        console.log(`Przenosimy się do ${date} w ${place}`);
    }
}

console.log(timeMachine.shape,timeMachine.model);
timeMachine.run('21.05.2017','Nibylandia');

//1
const book = {
    title:"Tytuł",
    author:"autor",
    numberOfPages:23
}

console.log(book.title,book.author,book.numberOfPages);

//2
const person = {
    name:'Wojtek',
    age:26,
    sayHello: () => console.log('hello')
}

console.log(person.name,person.age);
person.sayHello();

//3
const recipe = {
    title:"Tiramisu",
    servings:1
}
recipe.ingredients = ['string1','string2'];

console.log(recipe.title,recipe.servings,recipe.ingredients);

//6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);
//nie istnieje, poniewaz operujemy cały czas na tym samym obiekcie.
