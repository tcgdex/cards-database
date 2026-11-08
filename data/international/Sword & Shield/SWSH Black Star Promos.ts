import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swshp: Set = {
	id: "swshp",

	name: {
		'en-us': "SWSH Black Star Promos",
		'pt-br': "ESES Promos",
		'fr-fr': "Promo SWSH",
		'es-es': "Cartas de promoción ESES",
		'it-it': "SPSC Promo",
		'de-de': "SCSC Promokarten"
	},

	serie: serie,

	cardCount: {
		official: 307
	},

	releaseDate: "2019-11-15",

	thirdParty: {
		tcgplayer: 2545,
		cardmarket: 2916
	}
}

export default swshp
