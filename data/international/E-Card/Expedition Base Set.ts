import { Set } from 'models/database/set'
import serie from '../E-Card'

const ecard1: Set = {
	id: "ecard1",

	name: {
		'en-us': "Expedition Base Set",
		'fr-fr': "Expedition",
		'it-it': "Expedition Set Base",
		'de-de': "Expedition"
	},

	serie: serie,
	tcgOnline: "EX",

	cardCount: {
		official: 165
	},

	releaseDate: "2002-09-15",

	abbreviations: {
		official: "EX",
		'fr-fr': "EXP"
	},

	thirdParty: {
		cardmarket: 1536,
		tcgplayer: 1375
	}
}

export default ecard1
