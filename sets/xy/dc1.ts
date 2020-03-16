import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Double Crisis",
		fr: "Double Danger",
	},

	code: "dc1",
	expansionCode: "xy",
	tcgoCode: "DCR",

	cardCount: {
		total: 34,
		official: 34
	},

	api: "1-xy-double-crisis",

	releaseDate: "2015-03-25",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/xy/dc1/symbol",
		logo: "https://assets.tcgdex.net/en/xy/dc1/logo"
	}
}

export default set
