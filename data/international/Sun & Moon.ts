import { Serie } from 'models/database/serie'

const set: Serie = {
	id: "sm",
	name: {
		'en-us': "Sun & Moon",
		'fr-fr': "Soleil et Lune",
		'es-es': "Sol y Luna",
		'it-it': "Sole e Luna",
		'de-de': "Sonne & Mond",
		'pt-br': "Sol e Lua"
	},

	energies: [
		'Darkness', 'Dragon',
		'Fairy', 'Fighting',
		'Fire', 'Grass',
		'Lightning', 'Metal',
		'Psychic', 'Water'
	]
}

export default set
