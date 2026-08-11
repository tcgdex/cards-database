import { Set } from 'models/database/set'
import serie from '../XY'

const xy3: Set = {
	id: "xy3",

	name: {
		'en-us': "Furious Fists",
		'fr-fr': "Poings Furieux",
		'es-es': "Puños Furiosos",
		'it-it': "Colpi Furiosi",
		'de-de': "Fliegende Fäuste",
		'pt-br': "Punhos Furiosos",
		ru: "Яростный Кулак"
	},

	serie: serie,
	tcgOnline: "FFI",

	cardCount: {
		official: 111
	},

	releaseDate: "2014-08-13",

	abbreviations: {
		official: "FFI",
		'fr-fr': "PFU"
	},

	thirdParty: {
		cardmarket: 1584,
		tcgplayer: 1481
	}
}

export default xy3
