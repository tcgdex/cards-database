import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Cosmic Eclipse",
		fr: "Éclipse Cosmique",
	},
	code: "sm12",
	expansionCode: "sm",
	tcgoCode: "CEC",

	cardCount: {
		total: 271,
		official: 236
	},

	api: "12-sm",

	releaseDate: "2019-11-01",

	legal: {
		standard: true,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sm/sm12/symbol",
		logo: "https://assets.tcgdex.net/en/sm/sm12/logo"
	}
}

export default set
