import { Set } from 'models/database/set'
import serie from '../Black & White'

const bw7: Set = {
	id: "bw7",

	name: {
		'en-us': "Boundaries Crossed",
		'fr-fr': "Frontières Franchies",
		'es-es': "Fronteras Cruzadas",
		'it-it': "Confini Varcati",
		'de-de': "Überschrittene Schwellen",
		'pt-br': "Fronteiras Cruzadas"
	},

	serie: serie,
	tcgOnline: "BCR",

	cardCount: {
		official: 149
	},

	releaseDate: "2012-11-07",

	abbreviations: {
		official: "BCR",
		'fr-fr': "FFR"
	},

	thirdParty: {
		cardmarket: 1577,
		tcgplayer: 1408
	}
}

export default bw7
