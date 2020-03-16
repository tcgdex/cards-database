import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Detective Pikachu",
		fr: "Détective Pikachu",
	},
	code: "det1",
	expansionCode: "sm",
	tcgoCode: "DET",

	cardCount: {
		total: 18,
		official: 18
	},

	api: "det-sm",

	releaseDate: "2019-03-29",

	legal: {
		standard: true,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sm/det1/symbol",
		logo: "https://assets.tcgdex.net/en/sm/det1/logo"
	}
}

export default set
