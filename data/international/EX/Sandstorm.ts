import { Set } from 'models/database/set'
import serie from '../EX'

const ex2: Set = {
	id: "ex2",

	name: {
		'en-us': "Sandstorm",
		'fr-fr': "EX Tempête de sable",
		'it-it': "EX Tempesta di Sabbia",
		'de-de': "EX Sandsturm"
	},

	serie: serie,
	tcgOnline: "SS",

	cardCount: {
		official: 100
	},

	releaseDate: "2003-09-18",

	abbreviations: {
		official: "SS",
		'fr-fr': "TES"
	},

	thirdParty: {
		cardmarket: 1540,
		tcgplayer: 1392
	}
}

export default ex2
