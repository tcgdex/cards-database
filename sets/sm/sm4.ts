import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Crimson Invasion",
		fr: "Invasion Carmin",
	},
	code: "sm4",
	expansionCode: "sm",
	tcgoCode: "CIN",

	cardCount: {
		total: 111,
		official: 111
	},

	api: "4-sm",

	releaseDate: "2017-11-03",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/sm/sm4/symbol",
		logo: "https://assets.tcgdex.net/en/sets/sm/sm4/logo"
	}
}

export default set
