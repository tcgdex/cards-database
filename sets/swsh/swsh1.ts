import Set from '@tcgdex/sdk/interfaces/Set'
import swsh from '../../expansions/swsh'
const set: Set = {
	name: {
		en: "Sword & Shield"
	},

	expansion: swsh,
	expansionCode: "swsh",

	code: "swsh1",
	// tcgoCode

	cardCount: {
		total: 216,
		official: 202
	},

	api: '1-swsh',

	releaseDate: "2020-02-07",

	legal: {
		standard: true,
		expanded: true
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/swsh/swsh1/symbol",
		logo: "https://assets.tcgdex.net/en/sets/swsh/swsh1/logo"
	}
}

export default set
