import Set from '@tcgdex/sdk/interfaces/Set'
import swsh from '../../expansions/swsh'
const swsh2: Set = {
	name: {
		en: "Champion's Path"
	},

	expansion: swsh,
	expansionCode: "swsh",

	code: "swsh35",
	// tcgoCode

	cardCount: {
		total: 80,
		official: 70
	},

	releaseDate: "2020-09-25",

	legal: {
		standard: true,
		expanded: true
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/swsh/swsh35/symbol",
		logo: "https://assets.tcgdex.net/en/swsh/swsh35/logo"
	}
}

export default swsh2
