import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Legendary Treasures"
	},
	code: "bw11",
	expansionCode: "bw",
	tcgoCode: "LTR",

	cardCount: {
		total: 115,
		official: 113
	},

	api: '11-black-white',

	releaseDate: "2013-11-06",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/bw/bw11/symbol",
		logo: "https://assets.tcgdex.net/en/bw/bw11/logo"
	}
}

export default set
