import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh105: Set = {
	id: "swsh10.5",

	name: {
		'en-us': "Pokémon GO",
		'fr-fr': "Pokémon GO",
		'es-es': "Pokémon GO",
		'it-it': "Pokémon GO",
		'de-de': "Pokémon GO",
		'pt-br': "Pokémon GO"
	},

	tcgOnline: 'PGO',
	serie: serie,

	cardCount: {
		official: 78
	},

	releaseDate: "2022-07-01",

	abbreviations: {
		official: "PGO",
		'fr-fr': "PGO"
	},

	thirdParty: {
		cardmarket: 4786,
		tcgplayer: 3064
	}
}

export default swsh105
