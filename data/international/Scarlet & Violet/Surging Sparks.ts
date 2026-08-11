import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv08",

	name: {
		'de-de': "Stürmische Funken",
		'en-us': "Surging Sparks",
		'es-es': "Chispas Fulgurantes",
		'fr-fr': "Étincelles Déferlantes",
		'it-it': "Scintille Folgoranti",
		'pt-br': "Fagulhas Impetuosas"
	},

	serie: serie,

	cardCount: {
		official: 191
	},

	releaseDate: "2024-11-08",

	abbreviations: {
		official: "SSP",
		'fr-fr': "ETD"
	},

	thirdParty: {
		cardmarket: 5879,
		tcgplayer: 23651
	}
}

export default set
