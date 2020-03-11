import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Evolutions",
		fr: "Évolutions",
	},
	code: "xy12",
	expansionCode: "xy",
	tcgoCode: "EVO",

	cardCount: {
		total: 113,
		official: 108
	},

	api: "12-xy",

	releaseDate: "2016-11-02",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/xy/xy12/symbol",
		logo: "https://assets.tcgdex.net/en/sets/xy/xy12/logo"
	}
}

export default set
