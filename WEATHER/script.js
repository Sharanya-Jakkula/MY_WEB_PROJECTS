const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '76f200b47emsh91de7510a4ed4cbp19efedjsn403e77ecefbd',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}