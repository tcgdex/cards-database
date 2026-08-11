import { Set } from 'models/database/set'
import serie from '../XY'

const xy8: Set = {
	id: "xy8",

	name: {
		'en-us': "BREAKthrough",
		'fr-fr': "Impulsion Turbo",
		'es-es': "Turbo Impulso",
		'it-it': "Turbo Blitz",
		'de-de': "TURBOstart",
		'pt-br': "Turbo Revolução",
		ru: "Турбо Импульс"
	},

	serie: serie,
	tcgOnline: "BKT",

	cardCount: {
		official: 162
	},

	releaseDate: "2015-11-04",

	abbreviations: {
		official: "BKT",
		'fr-fr': "IMP"
	},

	thirdParty: {
		cardmarket: 1678,
		tcgplayer: 1661
	}
}

export default xy8
