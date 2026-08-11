import { Set } from 'models/database/set'
import serie from '../McDonald\'s Collection'

const s2012bw: Set = {
	id: "2012bw",

	name: {
		'en-us': "McDonald's Collection 2012",
		'fr-fr': "Collection McDonald's 2012",
		'es-es': "Colección de McDonald's 2012",
		'it-it': "McDonald's Collection 2012",
	},

	serie: serie,

	cardCount: {
		official: 12
	},

	releaseDate: "2012-06-15",

	abbreviations: {
		official: "MCD12",
		'fr-fr': "M12"
	},

	thirdParty: {
		tcgplayer: 1427
	}
}

export default s2012bw
