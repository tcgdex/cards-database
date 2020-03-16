import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Neo Genesis"
	},
	code: "neo1",
	expansionCode: "neo",
	tcgoCode: "N1",

	cardCount: {
		total: 111,
		official: 111
	},

	releaseDate: "2000-12-16",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/neo/neo1/symbol",
		logo: "https://assets.tcgdex.net/en/neo/neo1/logo"
	}
}

export default set
