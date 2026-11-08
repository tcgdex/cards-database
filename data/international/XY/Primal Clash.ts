import { Set } from 'models/database/set'
import serie from '../XY'

const xy5: Set = {
	id: "xy5",

	name: {
		'en-us': "Primal Clash",
		'fr-fr': "Primo-Choc",
		'es-es': "Duelos Primigenios",
		'it-it': "Scontro Primordiale",
		'de-de': "Protoshock",
		'pt-br': "Conflito Primitivo",
		ru: "Первобытная Дуэль"
	},

	serie: serie,
	tcgOnline: "PRC",

	cardCount: {
		official: 160
	},

	releaseDate: "2015-02-04",

	abbreviations: {
		official: "PRC",
		'fr-fr': "PRI"
	},

	thirdParty: {
		cardmarket: 1585,
		tcgplayer: 1509
	}
}

export default xy5
