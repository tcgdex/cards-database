import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Shining Legends",
		fr: "Légendes Brillantes",
	},
	code: "sm35",
	expansionCode: "sm",
	tcgoCode: "SLG",

	cardCount: {
		total: 78,
		official: 73
	},

	api: "35-sm",

	releaseDate: "2017-10-06",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/sm/sm35/symbol",
		logo: "https://assets.tcgdex.net/en/sets/sm/sm35/logo"
	}
}

export default set
