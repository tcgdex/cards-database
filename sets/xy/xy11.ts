import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Steam Siege",
		fr: "Offensive Vapeur",
	},
	code: "xy11",
	expansionCode: "xy",
	tcgoCode: "STS",

	cardCount: {
		total: 116,
		official: 114
	},

	api: "11-xy",

	releaseDate: "2016-08-03",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/xy/xy11/symbol",
		logo: "https://assets.tcgdex.net/en/xy/xy11/logo"
	}
}

export default set
