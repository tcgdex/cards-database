import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Rising Rivals",
		fr: "Rivaux Émergeants",
	},
	code: "pl2",
	expansionCode: "pl",
	tcgoCode: "RR",

	cardCount: {
		total: 120,
		official: 111
	},

	api: "3-platinum-rising-rivals",

	releaseDate: "2009-05-16",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/pl/pl2/symbol",
		logo: "https://assets.tcgdex.net/en/pl/pl2/logo"
	}
}

export default set
