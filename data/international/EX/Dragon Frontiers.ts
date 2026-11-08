import { Set } from 'models/database/set'
import serie from '../EX'

const ex15: Set = {
	id: "ex15",

	name: {
		'en-us': "Dragon Frontiers",
		'fr-fr': "EX Île des Dragons",
		'it-it': "EX L'Isola dei Draghi",
		'de-de': "EX Dragon Frontiers"
	},

	serie: serie,
	tcgOnline: "DF",

	cardCount: {
		official: 101
	},

	releaseDate: "2006-11-08",

	abbreviations: {
		official: "DF",
		'fr-fr': "IDR"
	},

	thirdParty: {
		cardmarket: 1553,
		tcgplayer: 1411
	}
}

export default ex15
