import { Set } from 'models/database/set'
import serie from '../Black & White'

const bw9: Set = {
	id: "bw9",

	name: {
		'en-us': "Plasma Freeze",
		'fr-fr': "Glaciation Plasma",
		'es-es': "Glaciación Plasma",
		'it-it': "Glaciazione Plasma",
		'de-de': "Plasma-Frost",
		'pt-br': "Congelamento de Plasma"
	},

	serie: serie,
	tcgOnline: "PLF",

	cardCount: {
		official: 116
	},

	releaseDate: "2013-05-08",

	abbreviations: {
		official: "PLF",
		'fr-fr': "GPL"
	},

	thirdParty: {
		cardmarket: 1579,
		tcgplayer: 1382
	}
}

export default bw9
