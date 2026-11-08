import { Set } from 'models/database/set'
import serie from '../McDonald\'s Collection'

const s2011bw: Set = {
	id: "2011bw",

	name: {
		'en-us': "McDonald's Collection 2011",
		'fr-fr': "Collection McDonald's 2011",
		'es-es': "Colección de McDonald's 2011",
		'it-it': "McDonald's Collection",
		'de-de': "McDonald’s Kollektion 2011",
	},

	serie: serie,

	cardCount: {
		official: 12
	},

	releaseDate: "2011-06-17",

	abbreviations: {
		official: "MCD11",
		'fr-fr': "M11"
	},
	thirdParty: {
		tcgplayer: 1401
	}
}

export default s2011bw
