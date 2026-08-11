import { Set } from 'models/database/set'
import serie from '../POP'

const pop7: Set = {
	id: "pop7",

	name: {
		'en-us': "POP Series 7",
		'fr-fr': "POP Série 7",
		'it-it': "POP Serie 7",
		'de-de': "POP Serie 7",
	},

	serie: serie,

	cardCount: {
		official: 17
	},

	releaseDate: "2008-03-01",

	abbreviations: {
		official: "P7",
		'fr-fr': "P07"
	},

	thirdParty: {
		cardmarket: 1619,
		tcgplayer: 1414
	}
}

export default pop7
