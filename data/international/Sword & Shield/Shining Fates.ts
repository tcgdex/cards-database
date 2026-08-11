import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh45: Set = {
	id: "swsh4.5",

	name: {
		'en-us': "Shining Fates",
		'fr-fr': "Destinées Radieuses",
		'es-es': "Destinos Brillantes",
		'it-it': "Destino Splendente",
		'de-de': "Glänzendes Schicksal",
		'pt-br': "Destinos Brilhantes "
	},

	tcgOnline: 'SHF',
	serie: serie,

	cardCount: {
		official: 72
	},

	releaseDate: "2021-02-19",

	abbreviations: {
		official: "SHF",
		'fr-fr': "DRA"
	},

	thirdParty: {
		cardmarket: 3630,
		tcgplayer: 2754
	}
}

export default swsh45
