import { Set } from 'models/database/set'
import serie from '../EX'

const ex11: Set = {
	id: "ex11",

	name: {
		'en-us': "Delta Species",
		'fr-fr': "EX Espèces Delta",
		'it-it': "EX Specie Delta",
		'de-de': "EX Delta Species"
	},

	serie: serie,
	tcgOnline: "DS",

	cardCount: {
		official: 113
	},

	releaseDate: "2005-10-31",

	abbreviations: {
		official: "DS",
		'fr-fr': "ESD"
	},

	thirdParty: {
		cardmarket: 1549,
		tcgplayer: 1429
	}
}

export default ex11
