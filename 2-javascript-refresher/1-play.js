/*
const name = 'Muhammed';
const age = 28;
const hobbies = true;

const summerizPerson = (userName, userAge, userHobbies) => {
	return (`my name is ${userName}, and age is: ${userAge}. and hobbies is: ${userHobbies}`);
}

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 4 + 4;


console.log(add(3, 3));
console.log(addOne(6));
console.log(addRandom());
console.log(summerizPerson(name, age, hobbies));

*/
/*-----------------------------------------*/
/*
const person = {
	name: 'Muhammed',
	age: '28',
	greet() {
		console.log(`Hi i am ${this.name}`);
	}
}


person.greet();
*/

/*-----------------------------------------*/
/*
const hobbies = ['Sports', 'Swimming'];

for (let hobby of hobbies) {
	console.log(hobby);
}

const rearrangeHobbies = hobbies.map((hobby) => {
	return `Hobby is: ${hobby}`;
});
console.log(rearrangeHobbies);
console.log(hobbies)

hobbies.push('Reading');
console.log(hobbies);

*/
/*-----------------------------------------*/
		//(spread,   rest) oberators
/*
const hobbies = ['Sports', 'Swimming'];

const copiedHobbies = [...hobbies];
console.log(copiedHobbies);

//
const person = {
	name: 'Muhammed',
	age: '28',
	greet() {
		console.log(`Hi i am ${this.name}`);
	}
}

const copiedPerson = {...person};
console.log(copiedPerson);

// rest:

const toArray = (...args) => {
	return args;
}

console.log(toArray(1, 2, 3, 4, 5));
*/
/*-----------------------------------------*/
								//    (Destructring)    //
/*								
const person = {
	name: 'Muhammed',
	age: '28',
	greet() {
		console.log(`Hi i am ${this.name}`);
	}
}

const { name, age } = person;
console.log(name, age)


const printName = ({ name, age }) => {
	console.log(`My name is ${name}, and age is ${age}`);
}

printName(person);
//

const hobbies = ['Sports', 'Swimming'];
const [ hobby1, hobby2 ] = hobbies;

console.log(hobby1, hobby2);
*/

/*-----------------------------------------*/

const fetchData = () => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('done');
			reject('error is happen');
		}, 4000);
	})
	return promise;
}


setTimeout(() => {
	console.log('timer is done!');

	fetchData()
		.then((text1) => {
			console.log(text1);
			return fetchData();
		})
		.then((text2) => {
			console.log(text2);
			return fetchData();
		})
		.then((text3) => {
			console.log(text3)
		})
		.catch((err) => {
			console.log(err);
		})
}, 2000);

console.log('Hello');
console.log('Hi');
























