console.log('Provided arguents:');
console.log(process.argv);

const fs = require('fs');

const wordsToSearch = process.argv.slice(2);

const stringGenerator = {};

stringGenerator.init = (...args) => {
	
	const alphabet = [];
	
	const monkeysCanType = "a lot of";

	const writeStream = fs.createWriteStream('Shakespeare.txt');

	// Generates a collection of characters from the English alphabet
	generateAlphabet("a", "z");
	// writes the stream
	
	writeButNotTooFast();

	// comment out for short-form otherwise  QUIT PROCESS MANUALLY - FILES GO UP IN SIZE INSANELY QUICK;
	// writeStream.end(() => console.log('Finished writing stream.'));

	function writeButNotTooFast(clickclick)
	{
		while(monkeysCanType)
		{
			// console.log("clik click")
			const errCb = err => {
				if(err)
					throw Error('Monkeyss got tired of your shenanigans');
			}
	
			if(!writeStream.write(generateRandomChar(alphabet), errCb))
			{
				console.log(clickclick)
				writeStream.once('drain', 
					() => writeButNotTooFast(generateRandomChar(alphabet), errCb))
				return;
			}
		}
	}

	function generateRandomChar(alphabet)
	{
		return alphabet[Math.floor(Math.random() * alphabet.length)];
	}
	
	function generateAlphabet(from, to)
	{
		let i = from.charCodeAt();
		let j = to.charCodeAt();
		for(; i <= j; i++)
			alphabet.push(String.fromCharCode(i));
	}
};

stringGenerator.init(wordsToSearch);

