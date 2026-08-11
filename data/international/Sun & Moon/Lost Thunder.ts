import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm8: Set = {
	id: "sm8",

	name: {
		'en-us': "Lost Thunder",
		'fr-fr': "Tonnerre Perdu",
		'es-es': "Truenos Perdidos",
		'it-it': "Tuoni Perduti",
		'de-de': "Echo des Donners",
		'pt-br': "Trovões Perdidos"
	},

	serie: serie,
	tcgOnline: "LOT",

	cardCount: {
		official: 214
	},

	releaseDate: "2018-11-02",

	abbreviations: {
		official: "LOT",
		'fr-fr': "TPD"
	},

	thirdParty: {
		cardmarket: 2370,
		tcgplayer: 2328
	}
}

export default sm8
