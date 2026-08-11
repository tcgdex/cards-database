import { Set } from 'models/database/set'
import serie from '../XY'

const xy11: Set = {
	id: "xy11",

	name: {
		'en-us': "Steam Siege",
		'fr-fr': "Offensive Vapeur",
		'es-es': "Asedio de Vapor",
		'it-it': "Vapori Accesi",
		'de-de': "Dampfkessel",
		'pt-br': "Cerco de Vapor"
	},

	serie: serie,
	tcgOnline: "STS",

	cardCount: {
		official: 114
	},

	releaseDate: "2016-08-03",

	abbreviations: {
		official: "STS",
		'fr-fr': "OFV"
	},

	thirdParty: {
		cardmarket: 1716,
		tcgplayer: 1815
	}
}

export default xy11
