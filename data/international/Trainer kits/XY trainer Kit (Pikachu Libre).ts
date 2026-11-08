import { Set } from 'models/database/set'
import serie from '../Trainer kits'

const set: Set = {
	id: "tk-xy-p",

	name: {
		'en-us': "XY trainer Kit (Pikachu Libre)",
		'it-it': "XY trainer Kit (Pikachu Libre)",
		'fr-fr': "XY Kit du dresseur (Pikachu Libre)",
		'es-es': "Kit de Entrenador XY (Pikachu Enmascarada)",
	},

	serie: serie,

	cardCount: {
		official: 30
	},

	releaseDate: "2016-04-27",

	abbreviations: {
		official: "TK9P",
		'fr-fr': "PLB"
	},

	thirdParty: {
		tcgplayer: 1796
	}
}

export default set
