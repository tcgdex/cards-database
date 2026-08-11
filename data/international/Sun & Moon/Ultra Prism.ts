import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm5: Set = {
	id: "sm5",

	name: {
		'en-us': "Ultra Prism",
		'fr-fr': "Ultra-Prisme",
		'es-es': "Ultraprisma",
		'it-it': "Ultraprisma",
		'de-de': "Ultra-Prisma",
		'pt-br': "Ultra Prisma"
	},

	serie: serie,
	tcgOnline: "UPR",

	cardCount: {
		official: 156
	},

	releaseDate: "2018-02-02",

	abbreviations: {
		official: "UPR",
		'fr-fr': "UPR"
	},

	thirdParty: {
		cardmarket: 2065,
		tcgplayer: 2178
	}
}

export default sm5
