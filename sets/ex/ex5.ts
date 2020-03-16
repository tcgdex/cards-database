import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Hidden Legends"
	},
	code: "ex5",
	expansionCode: "ex",
	tcgoCode: "HL",

	cardCount: {
		total: 102,
		official: 101
	},

	api: "1-ex-hidden-legends",

	releaseDate: "2004-06-01",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/ex/ex5/symbol",
		logo: "https://assets.tcgdex.net/en/ex/ex5/logo"
	}
}

export default set
