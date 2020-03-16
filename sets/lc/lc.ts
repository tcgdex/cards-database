import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Legendary Collection"
	},
	code: "lc",
	expansionCode: "lc",
	tcgoCode: "LC",

	cardCount: {
		total: 110,
		official: 110
	},

	releaseDate: "2002-05-24",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/lc/lc/symbol",
		logo: "https://assets.tcgdex.net/en/lc/lc/logo"
	},

	availability: {
		fr: false
	}
}

export default set
