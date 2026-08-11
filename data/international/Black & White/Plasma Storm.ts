import { Set } from 'models/database/set'
import serie from '../Black & White'

const bw8: Set = {
	id: "bw8",

	name: {
		'en-us': "Plasma Storm",
		'fr-fr': "Tempète Plasma",
		'es-es': "Tormenta Plasma",
		'it-it': "Uragano Plasma",
		'de-de': "Plasma-Sturm",
		'pt-br': "Tempestade de Plasma"
	},

	serie: serie,
	tcgOnline: "PLS",

	cardCount: {
		official: 135
	},

	releaseDate: "2013-02-06",

	abbreviations: {
		official: "PLS"
	},

	thirdParty: {
		cardmarket: 1578,
		tcgplayer: 1413
	}
}

export default bw8
