import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Noble Victories",
		fr: "Nobles Victoires",
	},
	code: "bw3",
	expansionCode: "bw",
	tcgoCode: "NVI",

	cardCount: {
		total: 102,
		official: 101
	},

	api: "3-black-white",

	releaseDate: "2011-11-16",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/bw/bw3/symbol",
		logo: "https://assets.tcgdex.net/en/bw/bw3/logo"
	}
}

export default set
