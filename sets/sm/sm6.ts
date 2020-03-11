import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Forbidden Light",
		fr: "Lumière Interdite",
	},
	code: "sm6",
	expansionCode: "sm",
	tcgoCode: "FLI",

	cardCount: {
		total: 146,
		official: 131
	},

	api: "6-sm",

	releaseDate: "2018-05-04",

	legal: {
		standard: true,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/sm/sm6/symbol",
		logo: "https://assets.tcgdex.net/en/sets/sm/sm6/logo"
	}
}

export default set
