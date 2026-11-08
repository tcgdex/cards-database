import { Set } from 'models/database/set'
import serie from '../Platinum'

const pl1: Set = {
	id: "pl1",

	name: {
		'en-us': "Platinum",
		'fr-fr': "Platine",
		'es-es': "Platino",
		'it-it': "Platino",
		'de-de': "Platin"
	},

	serie: serie,
	tcgOnline: "PL",

	cardCount: {
		official: 127
	},

	releaseDate: "2009-02-11",

	abbreviations: {
		official: "PL",
		'fr-fr': "PLA"
	},

	thirdParty: {
		cardmarket: 1562,
		tcgplayer: 1406
	}
}

export default pl1
