import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv09",

	name: {
		'de-de': "Reisegefährten",
		'en-us': "Journey Together",
		'es-es': "Juntos de Aventuras",
		'fr-fr': "Aventures Ensemble",
		'it-it': "Avventure Insieme",
		'pt-br': "Amigos de Jornada",
		"es-mx": 'Aventuras Compartidas'
	},

	serie: serie,

	cardCount: {
		official: 159
	},

	releaseDate: "2025-03-28",

	abbreviations: {
		official: "JTG"
	},

	thirdParty: {
		cardmarket: 6006,
		tcgplayer: 24073
	}
}

export default set
