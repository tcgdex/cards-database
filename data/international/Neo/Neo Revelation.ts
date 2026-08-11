import { Set } from 'models/database/set'
import serie from '../Neo'

const neo3: Set = {
	id: "neo3",

	name: {
		'en-us': "Neo Revelation",
		'fr-fr': "Neo Revelation",
		'it-it': "Neo Revelation",
		'de-de': "Neo Revelation"
	},

	serie: serie,
	tcgOnline: "N3",

	cardCount: {
		official: 64
	},

	releaseDate: "2001-09-21",

	abbreviations: {
		official: "N3",
		'fr-fr': "NRE"
	},

	thirdParty: {
		cardmarket: 1533,
		tcgplayer: 1389
	}
}

export default neo3
