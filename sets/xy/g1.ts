import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Generations",
		fr: "Générations",
	},
	code: "g1",
	expansionCode: "xy",
	tcgoCode: "GEN",

	cardCount: {
		total: 115,
		official: 83
	},

	api: "1-generations",

	releaseDate: "2016-02-22",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/xy/g1/symbol",
		logo: "https://assets.tcgdex.net/en/sets/xy/g1/logo"
	}
}

export default set
