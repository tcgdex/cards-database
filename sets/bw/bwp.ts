import Set from '../../interfaces/Set'

const set: Set = {
	name: {
		en: "Promo",
		fr: "Cartes Promo",
	},
	code: "bwp",
	expansionCode: "bw",
	tcgoCode: "PR-BLW",

	cardCount: {
		total: 101,
		official: 101
	},

	api: "p-bw",

	// releaseDate: "2011-03-01",
	releaseDate: "2011-04-26",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/sets/bw/bwp/symbol.png",
		logo: "https://assets.tcgdex.net/sets/bw/bwp/logo.png"
	}
}

export default set
