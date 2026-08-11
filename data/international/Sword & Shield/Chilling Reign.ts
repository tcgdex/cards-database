import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh6: Set = {
	id: "swsh6",

	name: {
		'en-us': "Chilling Reign",
		'fr-fr': "Règne de Glace",
		'es-es': "Reinado Escalofriante",
		'it-it': "Regno Glaciale",
		'de-de': "Schaurige Herrschaft",
		'pt-br': "Reinado Arrepiante"
	},

	tcgOnline: 'CRE',
	serie: serie,

	cardCount: { // NOT confirmed
		official: 198
	},

	releaseDate: "2021-06-18",

	abbreviations: {
		official: "CRE",
		'fr-fr': "REG"
	},

	thirdParty: {
		cardmarket: 4174,
		tcgplayer: 2807
	}
}

export default swsh6
