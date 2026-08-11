import { Set } from 'models/database/set'
import serie from '../Trainer kits'

const set: Set = {
	id: "tk-ex-m",

	name: {
		'en-us': "EX trainer Kit 2 (Minun)",
		'it-it': "EX trainer Kit (Ninun)",
		'fr-fr': "EX Kit dresseur (Négapi)",
		'es-es': "Kit de Entrenador EX (Ninun)",
	},

	serie: serie,

	cardCount: {
		official: 12
	},

	releaseDate: "2006-03-01",

	abbreviations: {
		official: "TK2M",
		'fr-fr': "NEG"
	},

	thirdParty: {
		tcgplayer: 1542
	}
}

export default set
