import { Set } from 'models/database/set'
import serie from '../Platinum'

const pl2: Set = {
	id: "pl2",

	name: {
		'en-us': "Rising Rivals",
		'fr-fr': "Rivaux Émergeants",
		'it-it': "L'Ascesa dei Rivali",
		'de-de': "Aufstieg der Rivalen"
	},

	serie: serie,
	tcgOnline: "RR",

	cardCount: {
		official: 111
	},

	releaseDate: "2009-05-16",

	abbreviations: {
		official: "RR",
		'fr-fr': "REM"
	},

	thirdParty: {
		cardmarket: 1563,
		tcgplayer: 1367
	}
}

export default pl2
