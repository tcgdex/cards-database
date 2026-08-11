import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "svp",

	name: {
		'de-de': "SVP Black Star Promos",
		'en-us': "SVP Black Star Promos",
		'es-es': "SVP Black Star Promos",
		'fr-fr': "SVP Black Star Promos",
		'it-it': "SVP Black Star Promos",
		'pt-br': "SVP Black Star Promos"
	},

	serie: serie,

	cardCount: {
		official: 225
	},

	releaseDate: "2023-03-31",

	abbreviations: {
		official: "SVP"
	},

	thirdParty: {
		cardmarket: 5241,
		tcgplayer: 22873
	}
}

export default set
