import { Set } from 'models/database/set'
import serie from '../EX'

const ex1: Set = {
	id: "ex1",

	name: {
		'en-us': "Ruby & Sapphire",
		'fr-fr': "EX Rubis & Saphir",
		'es-es': "Rubí & Zafiro",
		'it-it': "EX Rubino & Zaffiro",
		'de-de': "EX Rubin & Saphir",
		'pt-br': "EX Rubi e Safira" // pt_PT and not pt_BR ?
	},

	serie: serie,
	tcgOnline: "RS",

	cardCount: {
		official: 109
	},

	releaseDate: "2003-07-01",

	abbreviations: {
		official: "RS",
		'fr-fr': "R&S"
	},

	thirdParty: {
		cardmarket: 1539,
		tcgplayer: 1393
	}
}

export default ex1
