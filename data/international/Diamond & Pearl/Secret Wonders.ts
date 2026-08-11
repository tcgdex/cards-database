import { Set } from 'models/database/set'
import serie from '../Diamond & Pearl'

const dp3: Set = {
	id: "dp3",

	name: {
		'en-us': "Secret Wonders",
		'fr-fr': "Merveilles Secrètes",
		'es-es': "Maravillas Secretas",
		'it-it': "Prodigi Segreti",
		'de-de': "Rätselhafte Wunder",
		'pt-br': "Maravilhas Secretas"
	},

	serie: serie,
	tcgOnline: "SW",

	cardCount: {
		official: 132
	},

	releaseDate: "2007-11-01",

	abbreviations: {
		official: "SW",
		'fr-fr': "MSQ"
	},

	thirdParty: {
		cardmarket: 1557,
		tcgplayer: 1380
	}
}

export default dp3
