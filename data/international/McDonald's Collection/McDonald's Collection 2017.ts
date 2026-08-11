import { Set } from 'models/database/set'
import serie from '../McDonald\'s Collection'

const s2017sm: Set = {
	id: "2017sm",

	name: {
		'en-us': "McDonald's Collection 2017",
		'fr-fr': "Collection McDonald's 2017",
		'it-it': "McDonald's Collection 2017",
		'de-de': "McDonald’s Kollektion 2017",
	},

	serie: serie,

	cardCount: {
		official: 12
	},

	releaseDate: "2017-08-03",

	abbreviations: {
		official: "MCD17",
		'fr-fr': "M17"
	},

	thirdParty: {
		tcgplayer: 2148
	}
}

export default s2017sm
