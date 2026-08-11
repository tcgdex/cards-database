import { Set } from 'models/database/set'
import serie from '../EX'

const ex6: Set = {
	id: "ex6",

	name: {
		'en-us': "FireRed & LeafGreen",
		'fr-fr': "EX Rouge Feu & Vert Feuille",
		'it-it': "EX RossoFuoco e VerdeFoglia",
		'de-de': "EX Feuerrot & Blattgrün"
	},

	serie: serie,
	tcgOnline: "RG",

	cardCount: {
		official: 112
	},

	releaseDate: "2004-09-01",

	abbreviations: {
		official: "RG",
		'fr-fr': "RFV"
	},

	thirdParty: {
		cardmarket: 1544,
		tcgplayer: 1419
	}
}

export default ex6
