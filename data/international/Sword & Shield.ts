import { Serie } from 'models/database/serie'

const set: Serie = {
	id: "swsh",
	name: {
		'en-us': "Sword & Shield",
		'fr-fr': "Épée et Bouclier",
		'es-es': "Espada y Escudo",
		'it-it': "Spada e Scudo",
		'de-de': "Schwert & Schild",
		'pt-br': "Espada e Escudo"
	},

	energies: [
		'Darkness', 'Dragon',
		'Fighting', 'Fire', 'Grass',
		'Lightning', 'Metal',
		'Psychic', 'Water'
	]
}

export default set
