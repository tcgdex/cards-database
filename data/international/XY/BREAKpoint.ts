import { Set } from 'models/database/set'
import serie from '../XY'

const xy9: Set = {
	id: "xy9",

	name: {
		'en-us': "BREAKpoint",
		'fr-fr': "Rupture Turbo",
		'es-es': "TURBOLímite",
		'it-it': "Turbo Crash",
		'de-de': "TURBOfieber",
		'pt-br': "Turbo Colisão"
	},

	serie: serie,
	tcgOnline: "BKP",

	cardCount: {
		official: 122
	},

	releaseDate: "2016-02-03",

	abbreviations: {
		official: "BKP",
		'fr-fr': "RUP"
	},

	thirdParty: {
		cardmarket: 1687,
		tcgplayer: 1701
	}
}

export default xy9
