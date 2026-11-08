import { Set } from 'models/database/set'
import serie from '../XY'

const xy1: Set = {
	id: "xy1",

	name: {
		'en-us': "XY",
		'fr-fr': "XY",
		'es-es': "XY",
		'it-it': "XY",
		'de-de': "XY",
		'pt-br': "XY",
		ru: "XY"
	},

	serie: serie,
	tcgOnline: "XY",

	cardCount: {
		official: 146
	},

	releaseDate: "2014-02-05",

	abbreviations: {
		official: "XY",
		'fr-fr': "XY"
	},

	thirdParty: {
		cardmarket: 1582,
		tcgplayer: 1387
	}
}

export default xy1
