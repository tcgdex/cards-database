import { Set } from '../../interfaces'
import serie from '../EX'

const ex1: Set = {
	id: "ex1",

	name: {
		en: "Ruby & Sapphire",
		fr: "EX Rubis & Saphir",
		es: "Rubí & Zafiro",
		it: "EX Rubino & Zaffiro",
		de: "EX Rubin & Saphir",
		pt: "EX Rubi e Safira" // pt_PT and not pt_BR ?
	},

	serie: serie,
	tcgOnline: "RS",

	cardCount: {
		official: 109
	},

	releaseDate: "2003-07-01",

	abbreviations: {
		official: "RS",
		fr: "R&S"
	},

	thirdParty: {
		cardmarket: 1539
	}
}

export default ex1
