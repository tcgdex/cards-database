import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv10",

	name: {
		'de-de': "Ewige Rivalen",
		'en-us': "Destined Rivals",
		'es-es': "Rivales Predestinados",
		'fr-fr': "Rivalités Destinées",
		'it-it': "Rivali Predestinati",
		'pt-br': "Rivais Predestinados",
		'es-mx': 'Rivales Predestinados'
	},

	serie: serie,

	cardCount: {
		official: 182
	},

	releaseDate: "2025-05-30",

	abbreviations: {
		official: "DRI",
		'fr-fr': "RVD"
	},

	thirdParty: {
		tcgplayer: 24269
	}
}

export default set
