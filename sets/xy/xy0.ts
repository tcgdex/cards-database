import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Kalos Starter Set",
		fr: "Bienvenue à Kalos",
	},
	code: "xy0",
	expansionCode: "xy",
	tcgoCode: "KSS",

	cardCount: {
		total: 45,
		official: 45
	},

	api: "0-xy",

	releaseDate: "2013-11-08",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/xy/xy0/symbol",
		logo: "https://assets.tcgdex.net/en/sets/xy/xy0/logo"
	}
}

export default set
