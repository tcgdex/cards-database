import { Set } from 'models/database/set'
import serie from '../XY'

const xy2: Set = {
	id: "xy2",

	name: {
		'en-us': "Flashfire",
		'fr-fr': "Étincelles",
		'es-es': "Destellos de Fuego",
		'it-it': "Fuoco Infernale",
		'de-de': "Flammenmeer",
		'pt-br': "Flash de Fogo",
		ru: "Огненная Вспышка"
	},

	serie: serie,
	tcgOnline: "FLF",

	cardCount: {
		official: 106
	},

	releaseDate: "2014-05-07",

	abbreviations: {
		official: "FLF",
		'fr-fr': "ETI"
	},

	thirdParty: {
		cardmarket: 1583,
		tcgplayer: 1464
	}
}

export default xy2
