function mixedMessages () {
	
	let animals = ['tiger', 'hypo', 'whale', 'giraffe', 'monkey'];
	let verb = ['sleeps', 'eats', 'travels', 'fights', 'runs'];
	let adjective = ['rapidly', 'slowly', 'patiently', 'wisely', 'smartly'];
	let message = [];

	message.push(animals[Math.floor(Math.random() * 5)], verb[Math.floor(Math.random() * 5)], adjective[Math.floor(Math.random() * 5)]);
	message = message.join(' ');
	console.log(message);
}

mixedMessages();