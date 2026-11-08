import { Set } from 'models/database/set'
import serie from '../Trainer kits'

const set: Set = {
	id: "tk-dp-m",

	name: {
		'en-us': "DP trainer Kit (Manaphy)",
		'it-it': "Diamond & Pearl trainer Kit (Manaphy)",
		'fr-fr': "DP Kit dresseur (Manaphy)",
		'es-es': "Kit de Entrenador Diamante & Perla (Manaphy)",
	},

	serie: serie,

	cardCount: {
		official: 12
	},

	releaseDate: "2007-09-01",

	abbreviations: {
		official: "TK3M",
		'fr-fr': "MAN"
	},
	thirdParty: {
		tcgplayer: 609
	}
}

export default set
