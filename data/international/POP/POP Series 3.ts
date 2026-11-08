import { Set } from 'models/database/set'
import serie from '../POP'

const pop3: Set = {
	id: "pop3",

	name: {
		'en-us': "POP Series 3",
		'fr-fr': "POP Série 3",
		'it-it': "POP Serie 3",
		'de-de': "POP Serie 3",
	},

	serie: serie,

	cardCount: {
		official: 17
	},

	releaseDate: "2006-04-01",

	abbreviations: {
		official: "P3",
		'fr-fr': "P03"
	},

	thirdParty: {
		cardmarket: 1615,
		tcgplayer: 1442
	}
}

export default pop3
