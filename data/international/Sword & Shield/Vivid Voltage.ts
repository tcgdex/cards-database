import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh4: Set = {
	id: "swsh4",

	name: {
		'en-us': "Vivid Voltage",
		'fr-fr': "Voltage Éclatant",
		'es-es': "Voltaje Vívido",
		'it-it': "Voltaggio Sfolgorante",
		'de-de': "Farbenschock",
		'pt-br': "Voltagem Vívida"
	},

	tcgOnline: 'VIV',
	serie: serie,

	cardCount: {
		official: 185
	},

	releaseDate: "2020-11-13",

	abbreviations: {
		official: "VIV",
		'fr-fr': "VOL"
	},

	thirdParty: {
		cardmarket: 3484,
		tcgplayer: 2701
	}
}

export default swsh4
