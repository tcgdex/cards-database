import { Set } from 'models/database/set'
import serie from '../EX'

const ex4: Set = {
	id: "ex4",

	name: {
		'en-us': "Team Magma vs Team Aqua",
		'fr-fr': "EX Team Magma vs Team Aqua",
		'it-it': "EX Team Magma vs Team Idro",
		'de-de': "EX Team Magma vs Team Aqua"
	},

	serie: serie,
	tcgOnline: "MA",

	cardCount: {
		official: 95
	},

	releaseDate: "2004-03-01",

	abbreviations: {
		official: "MA",
		'fr-fr': "M&A"
	},

	thirdParty: {
		cardmarket: 1542,
		tcgplayer: 1377
	}
}

export default ex4
