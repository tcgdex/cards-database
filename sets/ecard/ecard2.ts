import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Aquapolis"
	},
	code: "ecard2",
	expansionCode: "ecard",
	tcgoCode: "AQ",

	cardCount: {
		total: 182, // or 186 depending on the source
		official: 147
	},

	releaseDate: "2003-01-15",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/ecard/ecard2/symbol",
		logo: "https://assets.tcgdex.net/en/ecard/ecard2/logo"
	}
}

export default set
