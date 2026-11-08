import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv06.5",

	name: {
		'de-de': "Nebel der Sagen",
		'en-us': "Shrouded Fable",
		'es-es': "Fabula Sombría",
		'fr-fr': "Fable Nébuleuse",
		'it-it': "Segreto Fiabesco",
		'pt-br': "Fábulas Nebulosas"
	},

	serie: serie,

	cardCount: {
		official: 64
	},

	releaseDate: "2024-08-02",

	abbreviations: {
		official: "SFA",
		'fr-fr': "FNE"
	},

	thirdParty: {
		cardmarket: 5760,
		tcgplayer: 23529
	}
}

export default set
