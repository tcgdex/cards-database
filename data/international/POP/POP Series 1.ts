import { Set } from 'models/database/set'
import serie from '../POP'

const pop1: Set = {
	id: "pop1",

	name: {
		'en-us': "POP Series 1",
		'fr-fr': "POP Série 1",
		'it-it': "POP Serie 1",
		'de-de': "POP Serie 1",
	},

	serie: serie,

	cardCount: {
		official: 17
	},

	releaseDate: "2004-09-01",

	abbreviations: {
		official: "P1",
		'fr-fr': "P01"
	},

	thirdParty: {
		cardmarket: 1613,
		tcgplayer: 1422
	}
}

export default pop1
