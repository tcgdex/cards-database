import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Dragon Majesty",
		fr: "Majesté Des Dragons",
	},
	code: "sm75",
	expansionCode: "sm",
	tcgoCode: "DRM",

	cardCount: {
		total: 78,
		official: 70
	},

	api: "75-sm",

	releaseDate: "2018-09-07",

	legal: {
		standard: true,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sm/sm75/symbol",
		logo: "https://assets.tcgdex.net/en/sm/sm75/logo"
	}
}

export default set
