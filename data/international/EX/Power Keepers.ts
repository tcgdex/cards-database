import { Set } from 'models/database/set'
import serie from '../EX'

const ex16: Set = {
	id: "ex16",

	name: {
		'en-us': "Power Keepers",
		'fr-fr': "EX Gardiens du Pouvoir",
		'de-de': "EX Power Keepers"
	},

	serie: serie,
	tcgOnline: "PK",

	cardCount: {
		official: 108
	},

	releaseDate: "2007-02-17",

	abbreviations: {
		official: "PK",
		'fr-fr': "GDP"
	},

	thirdParty: {
		cardmarket: 1554,
		tcgplayer: 1383
	}
}

export default ex16
