import { Set } from 'models/database/set'
import serie from '../XY'

const xy4: Set = {
	id: "xy4",

	name: {
		'en-us': "Phantom Forces",
		'fr-fr': "Vigueur Spectrale",
		'es-es': "Fuerzas Fantasmales",
		'it-it': "Forze Spettrali",
		'de-de': "Phantomkräfte",
		'pt-br': "Força Fantasma",
		ru: "Призрачные Силы"
	},

	serie: serie,
	tcgOnline: "PHF",

	cardCount: {
		official: 119
	},

	releaseDate: "2014-11-05",

	abbreviations: {
		official: "PHF",
		'fr-fr': "VSP"
	},

	thirdParty: {
		cardmarket: 1521,
		tcgplayer: 1494
	}
}

export default xy4
