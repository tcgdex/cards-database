import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv03.5",

	name: {
		'de-de': "151",
		'en-us': "151",
		'es-es': "151",
		'fr-fr': "151",
		'it-it': "151",
		'pt-br': "151"
	},

	serie: serie,

	cardCount: {
		official: 165
	},

	releaseDate: "2023-09-22",

	abbreviations: {
		official: "MEW",
		'fr-fr': "151"
	},

	thirdParty: {
		cardmarket: 5402,
		tcgplayer: 23237
	}
}

export default set
