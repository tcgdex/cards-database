import Set from '@tcgdex/sdk/interfaces/Set'
import swsh from '../../expansions/swsh'
const swsh2: Set = {
	name: {
		en: "Vivid Voltage",
		fr: "Voltage Éclatant"
	},

	expansion: swsh,
	expansionCode: "swsh",

	code: "swsh4",
	// tcgoCode

	cardCount: {
		total: 203,
		official: 185
	},

	releaseDate: "2020-11-13",

	legal: {
		standard: true,
		expanded: true
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/swsh/swsh4/symbol",
		logo: "https://assets.tcgdex.net/en/swsh/swsh4/logo"
	}
}

export default swsh2
