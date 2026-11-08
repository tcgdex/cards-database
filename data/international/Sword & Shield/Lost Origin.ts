import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh11: Set = {
	id: "swsh11",

	name: {
		'en-us': "Lost Origin",
		'fr-fr': "Origine Perdue",
		'es-es': "Origen Perdido",
		'de-de': "Verlorener Ursprung",
		'it-it': "Origine Perduta",
		'pt-br': "Origem Perdida"
	},

	serie: serie,

	cardCount: {
		official: 196
	},

	releaseDate: "2022-09-09",

	abbreviations: {
		official: "LOR",
		'fr-fr': "ORP"
	},

	thirdParty: {
		cardmarket: 5093,
		tcgplayer: 3118
	}
}

export default swsh11
