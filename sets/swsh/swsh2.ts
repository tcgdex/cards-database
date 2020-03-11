import Set from '@tcgdex/sdk/interfaces/Set'
import swsh from '../../expansions/swsh'
const swsh2: Set = {
	name: {
		en: "Sword & Shield"
	},

	expansion: swsh,
	expansionCode: "swsh",

	code: "swsh2",
	// tcgoCode

	cardCount: {
		total: 192, //unknown
		official: 192
	},

	releaseDate: "2020-05-01",

	legal: {
		standard: true,
		expanded: true
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/swsh/swsh2/symbol",
		logo: "https://assets.tcgdex.net/en/sets/swsh/swsh2/logo"
	}
}

export default swsh2
