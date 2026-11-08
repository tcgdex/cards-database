import { Set } from 'models/database/set'
import serie from '../McDonald\'s Collection'

const s2015xy: Set = {
	id: "2015xy",

	name: {
		'en-us': "McDonald's Collection 2015",
		'fr-fr': "Collection McDonald's 2015",
		'it-it': "McDonald's Collection 2015"
	},

	serie: serie,

	cardCount: {
		official: 12
	},

	releaseDate: "2015-11-27",

	abbreviations: {
		official: "MCD15",
		'fr-fr': "M15"
	},

	thirdParty: {
		tcgplayer: 1694
	}
}

export default s2015xy
