import { Set } from 'models/database/set'
import serie from '../EX'

const ex3: Set = {
	id: "ex3",

	name: {
		'en-us': "Dragon",
		'fr-fr': "EX Dragon",
		'de-de': "EX Drache",
		'it-it': "EX Drago"
	},

	serie: serie,
	tcgOnline: "DR",

	cardCount: {
		official: 97
	},

	releaseDate: "2003-11-24",

	abbreviations: {
		official: "DR",
		'fr-fr': "DRG"
	},

	thirdParty: {
		cardmarket: 1541,
		tcgplayer: 1376
	}
}

export default ex3
