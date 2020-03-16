import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Guardians Rising",
		fr: "Gardiens Ascendants",
	},
	code: "sm2",
	expansionCode: "sm",
	tcgoCode: "GRI",

	cardCount: {
		total: 169,
		official: 145
	},

	api: "2-sm",

	releaseDate: "2017-05-05",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sm/sm2/symbol",
		logo: "https://assets.tcgdex.net/en/sm/sm2/logo"
	}
}

export default set
