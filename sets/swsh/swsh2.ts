import Set from '../../interfaces/Set'
import swsh from '../../expansions/swsh'
const swsh2: Set = {
	name: {
		en: "Sword & Shield"
	},

	expansion: swsh,
	expansionCode: "swsh",

	code: "swsh1",
	// tcgoCode

	cardCount: {
		total: 192, //unknown
		official: 192
	},

	releaseDate: "2020-06-01",

	legal: {
		standard: true,
		expanded: true
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/swsh/swsh1/symbol.png",
		logo: "https://assets.tcgdex.net/en/sets/swsh/swsh1/logo.png"
	}
}

export default swsh2
