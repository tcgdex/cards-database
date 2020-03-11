import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Dragons Exalted",
		fr: "Dragons Éxaltés",
	},
	code: "bw6",
	expansionCode: "bw",
	tcgoCode: "DRX",

	cardCount: {
		total: 128,
		official: 124
	},

	api: "6-black-white",

	releaseDate: "2012-08-15",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/bw/bw6/symbol",
		logo: "https://assets.tcgdex.net/en/sets/bw/bw6/logo"
	}
}

export default set
