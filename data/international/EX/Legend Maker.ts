import { Set } from 'models/database/set'
import serie from '../EX'

const ex12: Set = {
	id: "ex12",

	name: {
		'en-us': "Legend Maker",
		'fr-fr': "EX Créateurs de légendes",
		'de-de': "EX Legend Maker",
		'it-it': "EX La Leggenda di Mew"
	},

	serie: serie,
	tcgOnline: "LM",

	cardCount: {
		official: 92
	},

	releaseDate: "2006-02-13",

	abbreviations: {
		official: "LM",
		'fr-fr': "CDL"
	},

	thirdParty: {
		cardmarket: 1550,
		tcgplayer: 1378
	}
}

export default ex12
