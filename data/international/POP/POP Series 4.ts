import { Set } from 'models/database/set'
import serie from '../POP'

const pop4: Set = {
	id: "pop4",

	name: {
		'en-us': "POP Series 4",
		'fr-fr': "POP Série 4",
		'it-it': "POP Serie 4",
		'de-de': "POP Serie 4",
	},

	serie: serie,

	cardCount: {
		official: 17
	},

	releaseDate: "2006-08-01",

	abbreviations: {
		official: "P4",
		'fr-fr': "P04"
	},

	thirdParty: {
		cardmarket: 1616,
		tcgplayer: 1452
	}
}

export default pop4
