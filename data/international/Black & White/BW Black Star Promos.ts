import { Set } from 'models/database/set'
import serie from '../Black & White'

const bwp: Set = {
	id: "bwp",

	name: {
		'en-us': "BW Black Star Promos",
		'fr-fr': "Promo BW",
		'es-es': "NB Promo",
		'it-it': "NB Promo",
		'de-de': "SW Promokarten"
	},

	serie: serie,
	tcgOnline: "PR-BLW",

	cardCount: {
		official: 101
	},

	releaseDate: "2011-04-26",

	abbreviations: {
		official: "BWP",
		'fr-fr': "PBW"
	},

	thirdParty: {
		tcgplayer: 1407
	}
}

export default bwp
