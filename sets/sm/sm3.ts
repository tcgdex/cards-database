import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Burning Shadows",
		fr: "Ombres Ardentes",
	},
	code: "sm3",
	expansionCode: "sm",
	tcgoCode: "BUS",

	cardCount: {
		total: 169,
		official: 147
	},

	api: "3-sm",

	releaseDate: "2017-08-04",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sm/sm3/symbol",
		logo: "https://assets.tcgdex.net/en/sm/sm3/logo"
	}
}

export default set
