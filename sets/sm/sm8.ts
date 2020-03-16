import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Lost Thunder",
		fr: "Tonnerre Perdu",
	},
	code: "sm8",
	expansionCode: "sm",
	tcgoCode: "LOT",

	cardCount: {
		total: 236,
		official: 214
	},

	api: "8-sm",

	releaseDate: "2018-11-02",

	legal: {
		standard: true,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sm/sm8/symbol",
		logo: "https://assets.tcgdex.net/en/sm/sm8/logo"
	}
}

export default set
