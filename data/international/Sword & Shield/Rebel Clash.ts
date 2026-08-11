import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh2: Set = {
	id: "swsh2",

	name: {
		'en-us': "Rebel Clash",
		'fr-fr': "Clash des Rebelles",
		'es-es': "Choque Rebelde",
		'it-it': "Fragore Ribelle",
		'de-de': "Clash der Rebellen",
		'pt-br': "Rixa Rebelde"
	},

	tcgOnline: 'RCL',
	serie: serie,

	cardCount: {
		official: 192
	},

	releaseDate: "2020-05-01",

	abbreviations: {
		official: "RCL",
		'fr-fr': "CDR"
	},

	thirdParty: {
		cardmarket: 3143,
		tcgplayer: 2626
	}
}

export default swsh2
