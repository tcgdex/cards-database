import { Set } from 'models/database/set'
import serie from '../Mega Evolution'

const set: Set = {
	id: "me01",

	name: {
		'de-de': "Mega-Entwicklung",
		'en-us': "Mega Evolution",
		'es-es': "Megaevolución",
		"es-mx": "Megaevolución",
		'fr-fr': "Méga-Évolution",
		'it-it': "Megaevoluzione",
		'pt-br': "Megaevolução"
	},

	serie: serie,

	cardCount: {
		official: 132
	},

	releaseDate: "2025-09-26",

	abbreviations: {
		official: "MEG"
	},

	thirdParty: {
		cardmarket: 6209,
		tcgplayer: 24380
	}
}

export default set
