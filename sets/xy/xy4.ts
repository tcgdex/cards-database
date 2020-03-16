import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Phantom Forces",
		fr: "Vigueur Spectrale",
	},
	code: "xy4",
	expansionCode: "xy",
	tcgoCode: "PHF",

	cardCount: {
		total: 122,
		official: 119
	},

	api: "4-xy",

	releaseDate: "2014-11-05",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/xy/xy4/symbol",
		logo: "https://assets.tcgdex.net/en/xy/xy4/logo"
	}
}

export default set
