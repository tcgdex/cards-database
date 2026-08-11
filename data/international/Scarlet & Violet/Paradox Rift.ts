import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv04",

	name: {
		'de-de': "Paradoxrift",
		'en-us': "Paradox Rift",
		'es-es': "Brecha Paradójica",
		'fr-fr': "Faille Paradoxe",
		'it-it': "Paradosso Temporale",
		'pt-br': "Fenda Paradoxal"
	},

	serie: serie,

	cardCount: {
		official: 182
	},

	releaseDate: "2023-11-03",

	abbreviations: {
		official: "PAR",
		'fr-fr': "FAP"
	},

	thirdParty: {
		cardmarket: 5444,
		tcgplayer: 23286
	}
}

export default set
