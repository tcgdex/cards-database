import { Set } from 'models/database/set'
import serie from '../Neo'

const neo2: Set = {
	id: "neo2",

	name: {
		'en-us': "Neo Discovery",
		'fr-fr': "Neo Discovery",
		'it-it': "Neo Discovery",
		'de-de': "Neo Entdeckung"
	},

	serie: serie,
	tcgOnline: "N2",

	cardCount: {
		official: 75
	},

	releaseDate: "2001-06-01",

	abbreviations: {
		official: "N2",
		'fr-fr': "NDS"
	},

	thirdParty: {
		cardmarket: 1532,
		tcgplayer: 1434
	}
}

export default neo2
