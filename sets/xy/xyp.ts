import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Promos",
		fr: "Cartes Promos",
	},
	code: "xyp",
	expansionCode: "xy",
	tcgoCode: "PR-XY",

	cardCount: {
		total: 211,
		official: 211
	},

	api: "p-xy",

	releaseDate: "2013-10-12",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/xy/xyp/symbol",
		logo: "https://assets.tcgdex.net/en/sets/xy/xyp/logo"
	}
}

export default set
