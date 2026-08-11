import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv04.5",

	name: {
		'de-de': "Paldeas Schicksale",
		'en-us': "Paldean Fates",
		'es-es': "Destinos de Paldea",
		'fr-fr': "Destinées de Paldea",
		'it-it': "Destino di Paldea",
		'pt-br': "Destinos de Paldea"
	},

	serie: serie,

	cardCount: {
		official: 91
	},

	releaseDate: "2024-01-26",

	abbreviations: {
		official: "PAF",
		'fr-fr': "DDP"
	},

	thirdParty: {
		cardmarket: 5546,
		tcgplayer: 23353
	}
}

export default set
