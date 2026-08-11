import { Set } from 'models/database/set'
import serie from '../Platinum'

const pl3: Set = {
	id: "pl3",

	name: {
		'en-us': "Supreme Victors",
		'fr-fr': "Vainqueurs Suprêmes",
		'de-de': "Ultimative Sieger"
	},

	serie: serie,
	tcgOnline: "SV",

	cardCount: {
		official: 147
	},

	releaseDate: "2009-08-19",

	abbreviations: {
		official: "SV",
		'fr-fr': "VSU"
	},

	thirdParty: {
		cardmarket: 1564,
		tcgplayer: 1384
	}
}

export default pl3
