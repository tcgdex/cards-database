import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Platinum",
		fr: "Platine",
	},
	code: "pl1",
	expansionCode: "pl",
	tcgoCode: "PL",

	cardCount: {
		total: 133,
		official: 127
	},

	api: "3-platinum",

	releaseDate: "2009-02-11",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/pl/pl1/symbol",
		logo: "https://assets.tcgdex.net/en/pl/pl1/logo"
	}
}

export default set
