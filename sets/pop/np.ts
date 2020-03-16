import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Nintendo Black Star Promos"
	},
	code: "np",
	expansionCode: "pop",
	tcgoCode: "PR-NP",

	cardCount: {
		total: 40,
		official: 40
	},

	releaseDate: "2003-10-01",
	// releaseDate: "2003-01-14",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/pop/np/symbol",
		logo: "https://assets.tcgdex.net/en/pop/np/logo"
	}
}

export default set
