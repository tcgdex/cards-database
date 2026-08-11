import { Set } from 'models/database/set'
import serie from '../POP'

const pop9: Set = {
	id: "pop9",

	name: {
		'en-us': "POP Series 9",
		'fr-fr': "POP Série 9",
		'it-it': "POP Serie 9",
		'de-de': "POP Serie 9",
	},

	serie: serie,

	cardCount: {
		official: 17
	},

	releaseDate: "2009-03-01",

	abbreviations: {
		official: "P9",
		'fr-fr': "P09"
	},

	thirdParty: {
		cardmarket: 1621,
		tcgplayer: 1446
	}
}

export default pop9
