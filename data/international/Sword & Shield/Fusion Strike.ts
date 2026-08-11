import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh8: Set = {
	id: "swsh8",

	name: {
		'en-us': "Fusion Strike",
		'fr-fr': "Poing de Fusion",
		'es-es': "Golpe Fusión",
		'it-it': "Colpo Fusione",
		'de-de': "Fusions Angriff",
		'pt-br': "Golpe Fusão"
	},

	tcgOnline: 'FST',
	serie: serie,

	cardCount: {
		official: 264
	},

	releaseDate: "2021-11-12",

	abbreviations: {
		official: "FST",
		'fr-fr': "PDF"
	},

	thirdParty: {
		cardmarket: 4382,
		tcgplayer: 2906
	}
}

export default swsh8
