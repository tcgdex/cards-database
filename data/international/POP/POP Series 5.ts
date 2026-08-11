import { Set } from 'models/database/set'
import serie from '../POP'

const pop5: Set = {
	id: "pop5",

	name: {
		'en-us': "POP Series 5",
		'it-it': "POP Serie 5",
		'de-de': "POP Serie 5",
	},

	serie: serie,

	cardCount: {
		official: 17
	},

	releaseDate: "2007-03-01",

	abbreviations: {
		official: "P5"
	},

	thirdParty: {
		cardmarket: 1617,
		tcgplayer: 1439
	}
}

export default pop5
