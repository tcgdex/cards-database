import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: "Arceus",

	code: "pl4",
	expansionCode: "pl",
	tcgoCode: "AR",

	cardCount: {
		total: 111,
		official: 99
	},

	api: "3-platinum-arceus",

	releaseDate: "2009-11-04",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/pl/pl4/symbol",
		logo: "https://assets.tcgdex.net/en/sets/pl/pl4/logo"
	},

	availability: {
		fr: false
	}
}

export default set
