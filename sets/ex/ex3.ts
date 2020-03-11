import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Dragon"
	},
	code: "ex3",
	expansionCode: "ex",
	tcgoCode: "DR",

	cardCount: {
		total: 100,
		official: 97
	},

	api: "1-ex-dragon",


	releaseDate: "2003-11-24",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/ex/ex3/symbol",
		logo: "https://assets.tcgdex.net/en/sets/ex/ex3/logo"
	}
}

export default set
