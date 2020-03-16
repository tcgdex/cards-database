import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Sandstorm"
	},
	code: "ex2",
	expansionCode: "ex",
	tcgoCode: "SS",

	cardCount: {
		total: 100,
		official: 100
	},

	api: "1-ex-sandstorm",


	releaseDate: "2003-09-18", // or 17 depending on the source

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/ex/ex2/symbol",
		logo: "https://assets.tcgdex.net/en/ex/ex2/logo"
	}
}

export default set
