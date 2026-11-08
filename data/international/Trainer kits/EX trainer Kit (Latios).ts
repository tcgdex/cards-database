import { Set } from 'models/database/set'
import serie from '../Trainer kits'

const set: Set = {
	id: "tk-ex-latio",

	name: {
		'en-us': "EX trainer Kit (Latios)",
		'it-it': "EX trainer Kit (Latios)",
		'de-de': "EX trainer Kit (Latios)",
		'fr-fr': "EX Kit dresseur (Latios)",
		'es-es': "Kit de Entrenador EX (Latios)",
	},

	serie: serie,

	cardCount: {
		official: 10
	},

	releaseDate: "2004-07-01",

	abbreviations: {
		official: "TK1O",
		'fr-fr': "KDL"
	},

	thirdParty: {
		tcgplayer: 1543
	}
}

export default set
