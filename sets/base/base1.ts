import Set from '@tcgdex/sdk/interfaces/Set'
import base from '../../expansions/base'

const set: Set = {
	name: {
		en: "Base"
	},
	code: "base1",
	expansion: base,
	expansionCode: "base",
	tcgoCode: "BS",

	cardCount: {
		total: 102,
		official: 102
	},

	releaseDate: "1999-01-09",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/base/base1/symbol",
		logo: "https://assets.tcgdex.net/en/sets/base/base1/logo"
	}
}

export default set
