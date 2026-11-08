import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv10.5w",

	name: {
		'de-de': "Weiße Flammen",
		'en-us': "White Flare",
		'es-es': "Llama Blanca",
		"es-mx": "Llama Blanca",
		'fr-fr': "Flamme Blanche",
		'it-it': "Fuoco Bianco",
		'pt-br': "Fogo Branco"
	},

	serie: serie,

	cardCount: {
		official: 86
	},

	releaseDate: "2025-07-17",

	abbreviations: {
		official: "WHT"
	},

	thirdParty: {
		cardmarket: 6135,
		tcgplayer: 24326
	}
}

export default set
