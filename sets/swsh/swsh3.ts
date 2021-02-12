import Set from '@tcgdex/sdk/interfaces/Set'
import swsh from '../../expansions/swsh'
const swsh2: Set = {
	name: {
		en: "Darkness Ablaze",
		fr: "Ténèbres Embrasées"
	},

	expansion: swsh,
	expansionCode: "swsh",

	code: "swsh3",
	// tcgoCode

	cardCount: {
		total: 201,
		official: 189
	},

	releaseDate: "2020-08-14",

	legal: {
		standard: true,
		expanded: true
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/swsh/swsh3/symbol",
		logo: "https://assets.tcgdex.net/en/swsh/swsh3/logo"
	}
}

export default swsh2
