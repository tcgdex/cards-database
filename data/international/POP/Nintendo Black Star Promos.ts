import { Set } from 'models/database/set'
import serie from '../POP'

const np: Set = {
	id: "np",

	name: {
		'en-us': "Nintendo Black Star Promos",
		'fr-fr': "Promo Nintendo",
		'es-es': "Nintendo Black Star Promos",
		'it-it': "Nintendo Black Star Promos",
		'de-de': "Nintendo Black Star Promos",
	},

	serie: serie,
	tcgOnline: "PR-NP",

	cardCount: {
		official: 40
	},

	releaseDate: "2003-10-01",

	thirdParty: {
		tcgplayer: 1423
	}
}

export default np
