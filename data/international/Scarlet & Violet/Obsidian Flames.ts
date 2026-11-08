import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv03",

	name: {
		'de-de': "Obsidian Flammen",
		'en-us': "Obsidian Flames",
		'es-es': "Llamas Obsidianas",
		'fr-fr': "Flammes Obsidiennes",
		'it-it': "Ossidiana Infuocata",
		'pt-br': "Obsidiana em Chamas"
	},

	serie: serie,

	cardCount: {
		official: 197
	},

	releaseDate: "2023-08-11",

	abbreviations: {
		official: "OBF",
		'fr-fr': "FLO"
	},

	thirdParty: {
		cardmarket: 5385,
		tcgplayer: 23228
	}
}

export default set
