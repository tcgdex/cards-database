import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Expedition Base Set",
		fr: "Expedition"
	},
	code: "ecard1",
	expansionCode: "ecard",
	tcgoCode: "EX",

	cardCount: {
		total: 165,
		official: 165
	},

	releaseDate: "2002-09-15",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/ecard/ecard1/symbol",
		logo: "https://assets.tcgdex.net/en/ecard/ecard1/logo"
	}
}

export default set
