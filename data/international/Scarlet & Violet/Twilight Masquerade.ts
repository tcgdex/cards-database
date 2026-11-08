import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv06",

	name: {
		'de-de': "Maskerade im Zwielicht",
		'en-us': "Twilight Masquerade",
		'es-es': "Mascarada Crepuscular",
		'fr-fr': "Mascarade Crépusculaire",
		'it-it': "Crepuscolo Mascherato",
		'pt-br': "Máscaras do Crepúsculo"
	},

	serie: serie,

	cardCount: {
		official: 167
	},

	releaseDate: "2024-05-24",

	abbreviations: {
		official: "TWM",
		'fr-fr': "MCR"
	},

	thirdParty: {
		cardmarket: 5691,
		tcgplayer: 23473
	}
}

export default set
