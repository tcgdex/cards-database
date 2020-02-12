import Set from '../../interfaces/Set'

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
		symbol: "https://assets.tcgdex.net/sets/ecards/ecard2/symbol.png",
		logo: "https://assets.tcgdex.net/sets/ecards/ecard2/logo.png"
	}
}

export default set
