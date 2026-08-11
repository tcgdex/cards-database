import { Set } from 'models/database/set'
import serie from '../Trainer kits'

const set: Set = {
	id: "tk-hs-g",

	name: {
		'en-us': "HS trainer Kit (Gyarados)",
		'it-it': "HS trainer Kit (Gyarados)",
		'fr-fr': "HS Kit du dresseur (Léviator)",
		'es-es': "Kit de Entrenador HeatGold & SoulSilver (Gyarados)",
	},

	serie: serie,

	cardCount: {
		official: 30
	},

	releaseDate: "2010-05-01",

	abbreviations: {
		official: "TK4G",
		'fr-fr': "LEV"
	},

	thirdParty: {
		tcgplayer: 1540
	}
}

export default set
