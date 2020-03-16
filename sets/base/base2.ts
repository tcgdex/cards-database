import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Jungle"
	},
	code: "base2",
	expansionCode: "base",
	tcgoCode: "JU",

	cardCount: {
		total: 64,
		official: 64
	},

	releaseDate: "1999-06-16",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/base/base2/symbol",
		logo: "https://assets.tcgdex.net/en/base/base2/logo"
	}
}

export default set
