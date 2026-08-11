import { Set } from 'models/database/set'
import serie from '../E-Card'

const ecard2: Set = {
	id: "ecard2",

	name: {
		'en-us': "Aquapolis",
		'fr-fr': "Aquapolis",
		'de-de': "Aquapolis",
		'it-it': "Aquapolis"
	},

	serie: serie,
	tcgOnline: "AQ",

	cardCount: {
		official: 147
	},

	releaseDate: "2003-01-15",

	abbreviations: {
		official: "AQ",
		'fr-fr': "AQU"
	},

	thirdParty: {
		cardmarket: 1537,
		tcgplayer: 1397
	}
}

export default ecard2
