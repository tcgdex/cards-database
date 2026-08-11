import { Set } from 'models/database/set'
import serie from '../POP'

const pop2: Set = {
	id: "pop2",

	name: {
		'en-us': "POP Series 2",
		'fr-fr': "POP Série 2",
		'it-it': "POP Serie 2",
		'de-de': "POP Serie 2",
	},

	serie: serie,

	cardCount: {
		official: 17
	},

	releaseDate: "2005-08-01",

	abbreviations: {
		official: "P2",
		'fr-fr': "P02"
	},

	thirdParty: {
		cardmarket: 1614,
		tcgplayer: 1447
	}
}

export default pop2
