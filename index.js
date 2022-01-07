//Iteration#1

/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros. */

//1.1 Ejecuta esta función sin pasar ningún parametro
const sumFunc =  (a = 10, b = 5) => {
    console.log(a + b);
}

sumFunc();

//1.2 Ejecuta esta función pasando un solo parametro
sumFunc(15);

//1.3 Ejecuta esta función pasando dos parametros
sumFunc(15, 20);


//Iteration#2
/* 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto. */

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;

console.log(title, gender, year);


/* 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola. */
const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

/* 2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola. */

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name, race} = animalFunction();

console.log(name, race);

/* 2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo. */
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car;

const [year1, year2, year3] = itv;

console.log(name, itv);

console.log(year1, year2, year3);

//Iteration#3

//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointCopy = [...pointsList];

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const newPoints = [...pointsList, ...pointsLis2];

/* 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators. */
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newToys = {...toy, ...toyUpdate};

/* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors];
colorsCopy.splice(1,1);

//Iteration#4
/* 4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map(elem => elem.name);


/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names2 = users2.map(elem => elem.name);
names2[0] = 'anacleto';

/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

cityNames = cities.map( city => {
  if(city.isVisited) {
    return city.name + '(Visitado)';
  }
  return city.name;
  
});
