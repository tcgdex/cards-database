import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv05",

	name: {
		'de-de': "Gewalten der Zeit",
		'en-us': "Temporal Forces",
		'es-es': "Fuerzas Temporales",
		'fr-fr': "Forces Temporelles",
		'it-it': "Cronoforze",
		'pt-br': "Forças Temporais"
	},

	serie: serie,

	cardCount: {
		official: 162
	},

	releaseDate: "2024-03-22",

	abbreviations: {
		official: "TEF",
		'fr-fr': "FTP"
	},

	thirdParty: {
		cardmarket: 5589,
		tcgplayer: 23381
	}
}

export default set
