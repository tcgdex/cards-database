import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv07",

	name: {
		'de-de': "Stellarkrone",
		'en-us': "Stellar Crown",
		'es-es': "Corona Astral",
		'fr-fr': "Couronne Stellaire",
		'it-it': "Corona Astrale",
		'pt-br': "Coroa Estelar"
	},

	serie: serie,

	cardCount: {
		official: 142
	},

	releaseDate: "2024-09-13",

	abbreviations: {
		official: "SCR"
	},

	thirdParty: {
		cardmarket: 5802,
		tcgplayer: 23537
	}
}

export default set
