import { Set } from 'models/database/set'
import serie from '../Trainer kits'

const set: Set = {
	id: "tk-dp-l",

	name: {
		'en-us': "DP trainer Kit (Lucario)",
		'it-it': "Diamond & Pearl trainer Kit (Lucario)",
		'fr-fr': "DP Kit dresseur (Lucario)",
		'es-es': "Kit de Entrenador Diamante & Perla (Lucario)",
	},

	serie: serie,

	cardCount: {
		official: 11
	},

	releaseDate: "2007-09-01",

	abbreviations: {
		official: "TK3L",
		'fr-fr': "LUC"
	},
	thirdParty: {
		tcgplayer: 610
	}
}

export default set
