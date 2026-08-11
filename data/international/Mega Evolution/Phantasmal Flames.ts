import { Set } from 'models/database/set'
import serie from '../Mega Evolution'

const set: Set = {
	id: "me02",

	name: {
		'de-de': "Fatale Flammen",
		'en-us': "Phantasmal Flames",
		'es-es': "Fuegos Fantasmales",
		'es-mx': "Llamaradas Fantasmales",
		'fr-fr': "Flammes Fantasmagoriques",
		'it-it': "Fiamme Spettrali",
		'pt-br': "Fogo Fantasmagórico"
	},

	serie: serie,

	cardCount: {
		official: 94
	},

	releaseDate: "2025-11-14",

	abbreviations: {
		official: "PFL"
	},

	thirdParty: {
		cardmarket: 6299,
		tcgplayer: 24448
	}
}

export default set
