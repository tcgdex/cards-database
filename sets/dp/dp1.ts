import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Diamond & Pearl",
		fr: "Diamant & Perle",
	},
	code: "dp1",
	expansionCode: "dp",
	tcgoCode: "DP",

	cardCount: {
		total: 130,
		official: 130
	},

	api: "2-diamond-pearl",

	releaseDate: "2007-05-01",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/dp/dp1/symbol",
		logo: "https://assets.tcgdex.net/en/dp/dp1/logo"
	}
}

export default set
