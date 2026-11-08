import { Set } from 'models/database/set'
import serie from '../POP'

const pop8: Set = {
	id: "pop8",

	name: {
		'en-us': "POP Series 8",
		'de-de': "POP Series 8",
	},

	serie: serie,

	cardCount: {
		official: 17
	},

	releaseDate: "2008-09-01",

	abbreviations: {
		official: "P8"
	},

	thirdParty: {
		cardmarket: 1620,
		tcgplayer: 1450
	}
}

export default pop8
